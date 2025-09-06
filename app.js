/* Core game logic for Guess the Telugu Movie */

const MAX_GUESSES = 6;
const STORAGE_KEYS = {
  stats: "gtm_stats_v1",
  dailySeed: "gtm_daily_seed_v1",
  lastDailyDate: "gtm_last_daily_date_v1",
};

const els = {
  dailyToggle: document.getElementById("dailyModeToggle"),
  streak: document.getElementById("streak"),
  wins: document.getElementById("wins"),
  losses: document.getElementById("losses"),
  guessesLeft: document.getElementById("guessesLeft"),
  guessForm: document.getElementById("guessForm"),
  guessInput: document.getElementById("guessInput"),
  guesses: document.getElementById("guesses"),
  hints: document.getElementById("hints"),
  revealHintBtn: document.getElementById("revealHintBtn"),
  newGameBtn: document.getElementById("newGameBtn"),
  shareBtn: document.getElementById("shareBtn"),
  giveUpBtn: document.getElementById("giveUpBtn"),
  titlesDatalist: document.getElementById("titles"),
  answerPanel: document.getElementById("answerPanel"),
  answerText: document.getElementById("answerText"),
  answerDetails: document.getElementById("answerDetails"),
};

const state = {
  movie: null,
  revealedHints: 0,
  guesses: [],
  remaining: MAX_GUESSES,
  dailyMode: false,
  rngSeed: null,
  finished: false,
  win: false,
};

// Utils

function normalizeTitle(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function levenshtein(a, b) {
  // Simple Levenshtein distance for similarity scoring
  const s = a, t = b;
  const n = s.length, m = t.length;
  if (n === 0) return m;
  if (m === 0) return n;

  const v0 = new Array(m + 1);
  const v1 = new Array(m + 1);

  for (let i = 0; i <= m; i++) v0[i] = i;

  for (let i = 0; i < n; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < m; j++) {
      const cost = s[i] === t[j] ? 0 : 1;
      v1[j + 1] = Math.min(
        v1[j] + 1,
        v0[j + 1] + 1,
        v0[j] + cost
      );
    }
    for (let j = 0; j <= m; j++) v0[j] = v1[j];
  }
  return v1[m];
}

function similarityPercent(a, b) {
  const aa = normalizeTitle(a), bb = normalizeTitle(b);
  if (!aa && !bb) return 100;
  if (!aa || !bb) return 0;
  const dist = levenshtein(aa, bb);
  const maxLen = Math.max(aa.length, bb.length);
  const score = Math.round((1 - dist / maxLen) * 100);
  return Math.max(0, Math.min(100, score));
}

function pickRandomMovie(rng) {
  const idx = Math.floor(rng() * MOVIES.length);
  return MOVIES[idx];
}

// Simple seeded RNG (Mulberry32)
function mulberry32(seed) {
  return function() {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function todaySeed() {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  const str = `${y}-${m}-${day}`;
  // Hash string to number
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(stats));
}
function loadStats() {
  const raw = localStorage.getItem(STORAGE_KEYS.stats);
  if (!raw) return { wins: 0, losses: 0, streak: 0, lastWinDate: null };
  try { return JSON.parse(raw); } catch { return { wins: 0, losses: 0, streak: 0, lastWinDate: null }; }
}

function updateStatsUI() {
  const s = loadStats();
  els.wins.textContent = s.wins || 0;
  els.losses.textContent = s.losses || 0;
  els.streak.textContent = s.streak || 0;
}

function incrementWin() {
  const s = loadStats();
  s.wins = (s.wins || 0) + 1;
  // keep streak
  s.streak = (s.streak || 0) + 1;
  s.lastWinDate = new Date().toISOString().slice(0,10);
  saveStats(s);
  updateStatsUI();
}
function incrementLoss() {
  const s = loadStats();
  s.losses = (s.losses || 0) + 1;
  s.streak = 0;
  saveStats(s);
  updateStatsUI();
}

function fillDatalist() {
  els.titlesDatalist.innerHTML = "";
  const titles = MOVIES.map(m => m.title).sort((a,b)=>a.localeCompare(b));
  for (const t of titles) {
    const opt = document.createElement("option");
    opt.value = t;
    els.titlesDatalist.appendChild(opt);
  }
}

function resetUI() {
  els.guesses.innerHTML = "";
  els.hints.innerHTML = "";
  els.answerPanel.classList.add("hidden");
  els.answerText.textContent = "";
  els.answerDetails.innerHTML = "";
  els.guessesLeft.textContent = String(MAX_GUESSES);
}

function setupHints(movie) {
  // Build ordered hints that unlock progressively
  const titleLength = `${movie.title.replace(/[^A-Za-z0-9]/g, "").length} letters`;
  const year = movie.year ? `Year: ${movie.year}` : null;
  const directorInitials = movie.director ? `Director initials: ${movie.director.split(" ").map(p=>p[0]).filter(Boolean).join(".")}.` : null;
  const directorFull = movie.director ? `Director: ${movie.director}` : null;
  const castHint = Array.isArray(movie.cast) && movie.cast.length ? `Cast: ${movie.cast.slice(0,2).join(", ")}${movie.cast.length>2?"…":""}` : null;
  const emoji = movie.emoji ? `Emoji clue: ${movie.emoji}` : null;
  const keywords = movie.keywords && movie.keywords.length ? `Keywords: ${movie.keywords.slice(0,3).join(", ")}` : null;

  // Order from lightest to strongest hint
  const all = [
    `Title length: ${titleLength}`,
    directorInitials,
    year,
    castHint,
    emoji,
    directorFull,
    keywords
  ].filter(Boolean);

  state._allHints = all;
  state.revealedHints = 0;
  renderHints();
}

function renderHints() {
  els.hints.innerHTML = "";
  const toShow = state._allHints.slice(0, state.revealedHints);
  for (const h of toShow) {
    const li = document.createElement("li");
    li.textContent = h;
    els.hints.appendChild(li);
  }
}

function revealNextHint() {
  if (state.revealedHints < state._allHints.length) {
    state.revealedHints++;
    renderHints();
  }
}

function renderGuessRow(input, percent) {
  const li = document.createElement("li");
  li.className = "guess";
  const text = document.createElement("span");
  text.className = "text";
  text.textContent = input;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = `${percent}%`;

  if (percent >= 90) badge.classList.add("good");
  else if (percent >= 60) badge.classList.add("ok");
  else badge.classList.add("bad");

  li.appendChild(text);
  li.appendChild(badge);
  els.guesses.prepend(li);
}

function finishGame(win) {
  state.finished = true;
  state.win = win;
  els.revealHintBtn.disabled = true;
  els.guessInput.disabled = true;

  const m = state.movie;
  els.answerPanel.classList.remove("hidden");
  els.answerText.textContent = win ? "You got it! 🎉" : "Better luck next time!";
  const details = [];
  details.push(`<strong>${m.title}</strong>`);
  if (m.year) details.push(`<div>Year: ${m.year}</div>`);
  if (m.director) details.push(`<div>Director: ${m.director}</div>`);
  if (m.cast?.length) details.push(`<div>Cast: ${m.cast.slice(0,3).join(", ")}${m.cast.length>3?"…":""}</div>`);
  if (m.emoji) details.push(`<div>Emoji: ${m.emoji}</div>`);
  if (m.keywords?.length) details.push(`<div>Keywords: ${m.keywords.join(", ")}</div>`);
  els.answerDetails.innerHTML = details.join("");

  if (win) incrementWin(); else incrementLoss();
}

function shareResult() {
  const m = state.movie;
  const guesses = state.guesses.length;
  const outcome = state.win ? "✅" : "❌";
  const mode = state.dailyMode ? "Daily" : "Random";
  const lines = [];
  lines.push(`Guess the Telugu Movie — ${mode}`);
  lines.push(`${outcome} ${m.title} (${m.year || "—"})`);
  const bars = state.guesses.map(p => {
    if (p >= 90) return "🟩";
    if (p >= 60) return "🟨";
    return "🟥";
  }).join("");
  lines.push(`${bars} (${guesses}/${MAX_GUESSES})`);
  if (m.emoji) lines.push(`Clue: ${m.emoji}`);
  const text = lines.join("\n");
  if (navigator.share) {
    navigator.share({ text }).catch(()=>copyToClipboard(text));
  } else {
    copyToClipboard(text);
    alert("Result copied to clipboard!");
  }
}
function copyToClipboard(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

// Game control

function newGame({ daily } = {}) {
  state.dailyMode = !!daily;
  state.finished = false;
  state.win = false;
  state.guesses = [];
  state.revealedHints = 0;
  state.remaining = MAX_GUESSES;

  // Enable UI
  els.revealHintBtn.disabled = false;
  els.guessInput.disabled = false;

  // pick movie
  let rng;
  if (state.dailyMode) {
    const seed = todaySeed();
    state.rngSeed = seed;
    rng = mulberry32(seed);
  } else {
    const seed = (Math.random() * 1e9) >>> 0;
    state.rngSeed = seed;
    rng = mulberry32(seed);
  }
  state.movie = pickRandomMovie(rng);

  resetUI();
  setupHints(state.movie);
  els.guessesLeft.textContent = String(state.remaining);
  // Show one initial hint
  revealNextHint();
}

function handleGuessSubmit(e) {
  e.preventDefault();
  if (state.finished) return;
  const input = els.guessInput.value.trim();
  if (!input) return;

  const percent = similarityPercent(input, state.movie.title);
  state.guesses.push(percent);
  renderGuessRow(input, percent);

  if (percent >= 95) {
    finishGame(true);
  } else {
    state.remaining--;
    els.guessesLeft.textContent = String(state.remaining);
    // Reveal another hint on wrong guess
    revealNextHint();
    if (state.remaining <= 0) {
      finishGame(false);
    }
  }
  els.guessInput.value = "";
  els.guessInput.focus();
}

function giveUp() {
  if (state.finished) return;
  // Reveal all hints and finish as loss
  state.revealedHints = state._allHints.length;
  renderHints();
  finishGame(false);
}

// Initialize

function init() {
  updateStatsUI();
  fillDatalist();

  // Restore Daily toggle from last selection (optional)
  els.dailyToggle.checked = JSON.parse(localStorage.getItem("gtm_daily_toggle") || "false");
  els.dailyToggle.addEventListener("change", () => {
    localStorage.setItem("gtm_daily_toggle", JSON.stringify(els.dailyToggle.checked));
    newGame({ daily: els.dailyToggle.checked });
  });

  els.guessForm.addEventListener("submit", handleGuessSubmit);
  els.revealHintBtn.addEventListener("click", revealNextHint);
  els.newGameBtn.addEventListener("click", () => newGame({ daily: false }));
  els.shareBtn.addEventListener("click", shareResult);
  els.giveUpBtn.addEventListener("click", giveUp);

  // Start first game
  newGame({ daily: els.dailyToggle.checked });
}

document.addEventListener("DOMContentLoaded", init);