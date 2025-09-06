// Curated Telugu movie dataset for the game, expanded with harder/rarer picks.
// Fields are optional but recommended: title (required), year, director, cast, emoji, keywords.

const MOVIES = [
  {
    title: "Baahubali: The Beginning",
    year: 2015,
    director: "S. S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
    emoji: "👑⚔️🏰🥛",
    keywords: ["Mahishmati", "Kattappa", "epic"]
  },
  {
    title: "Baahubali 2: The Conclusion",
    year: 2017,
    director: "S. S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
    emoji: "👑⚔️🏰🗡️",
    keywords: ["Why", "Kattappa", "epic"]
  },
  {
    title: "RRR",
    year: 2022,
    director: "S. S. Rajamouli",
    cast: ["N. T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt"],
    emoji: "🔥🌊🤝",
    keywords: ["revolt", "freedom", "friendship"]
  },
  {
    title: "Pushpa: The Rise",
    year: 2021,
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    emoji: "🌲💰🤙",
    keywords: ["red sanders", "mannerism", "smuggling"]
  },
  {
    title: "Arjun Reddy",
    year: 2017,
    director: "Sandeep Reddy Vanga",
    cast: ["Vijay Deverakonda", "Shalini Pandey"],
    emoji: "🩺🍾💔",
    keywords: ["surgeon", "anger", "love"]
  },
  {
    title: "Mahanati",
    year: 2018,
    director: "Nag Ashwin",
    cast: ["Keerthy Suresh", "Dulquer Salmaan", "Samantha"],
    emoji: "🎬🌟😭",
    keywords: ["biopic", "Savitri", "classic"]
  },
  {
    title: "Eega",
    year: 2012,
    director: "S. S. Rajamouli",
    cast: ["Nani", "Samantha", "Sudeep"],
    emoji: "🪰🔁🎯",
    keywords: ["reincarnation", "revenge", "housefly"]
  },
  {
    title: "Magadheera",
    year: 2009,
    director: "S. S. Rajamouli",
    cast: ["Ram Charan", "Kajal Aggarwal"],
    emoji: "⚔️🏇⏳",
    keywords: ["rebirth", "warrior", "love"]
  },
  {
    title: "Rangasthalam",
    year: 2018,
    director: "Sukumar",
    cast: ["Ram Charan", "Samantha"],
    emoji: "🌾👂⚡",
    keywords: ["village", "politics", "hearing"]
  },
  {
    title: "Srimanthudu",
    year: 2015,
    director: "Koratala Siva",
    cast: ["Mahesh Babu", "Shruti Haasan"],
    emoji: "💼🏡🌾",
    keywords: ["adopt a village", "philanthropy"]
  },
  {
    title: "Bharat Ane Nenu",
    year: 2018,
    director: "Koratala Siva",
    cast: ["Mahesh Babu", "Kiara Advani"],
    emoji: "🏛️🧑‍💼📜",
    keywords: ["CM", "governance", "oath"]
  },
  {
    title: "Janatha Garage",
    year: 2016,
    director: "Koratala Siva",
    cast: ["Jr. NTR", "Mohanlal"],
    emoji: "🔧🚗🌳",
    keywords: ["environment", "family"]
  },
  {
    title: "Khaidi No. 150",
    year: 2017,
    director: "V. V. Vinayak",
    cast: ["Chiranjeevi", "Kajal Aggarwal"],
    emoji: "🔁👨‍🌾🏭",
    keywords: ["lookalike", "farmers"]
  },
  {
    title: "Dhruva",
    year: 2016,
    director: "Surender Reddy",
    cast: ["Ram Charan", "Arvind Swamy"],
    emoji: "🧠🔬🎯",
    keywords: ["IPS", "mind games"]
  },
  {
    title: "Vikramarkudu",
    year: 2006,
    director: "S. S. Rajamouli",
    cast: ["Ravi Teja", "Anushka Shetty"],
    emoji: "🔁👮‍♂️🗡️",
    keywords: ["doppelgänger", "cop"]
  },
  {
    title: "Chatrapathi",
    year: 2005,
    director: "S. S. Rajamouli",
    cast: ["Prabhas", "Shriya Saran"],
    emoji: "⚓👊🌊",
    keywords: ["port", "brothers"]
  },
  {
    title: "Athadu",
    year: 2005,
    director: "Trivikram Srinivas",
    cast: ["Mahesh Babu", "Trisha"],
    emoji: "🎯🕵️‍♂️🏡",
    keywords: ["assassin", "family"]
  },
  {
    title: "Pokiri",
    year: 2006,
    director: "Puri Jagannadh",
    cast: ["Mahesh Babu", "Ileana D'Cruz"],
    emoji: "🔫🕶️🕵️",
    keywords: ["undercover", "gangs"]
  },
  {
    title: "Jalsa",
    year: 2008,
    director: "Trivikram Srinivas",
    cast: ["Pawan Kalyan", "Ileana D'Cruz"],
    emoji: "🎓💘😂",
    keywords: ["rom-com", "campus"]
  },
  {
    title: "Gabbar Singh",
    year: 2012,
    director: "Harish Shankar",
    cast: ["Pawan Kalyan", "Shruti Haasan"],
    emoji: "👮‍♂️😎🔫",
    keywords: ["cop", "attitude"]
  },
  {
    title: "Temper",
    year: 2015,
    director: "Puri Jagannadh",
    cast: ["Jr. NTR", "Kajal Aggarwal"],
    emoji: "👮‍♂️🔥⚖️",
    keywords: ["corrupt cop", "change"]
  },
  {
    title: "Dookudu",
    year: 2011,
    director: "Srinu Vaitla",
    cast: ["Mahesh Babu", "Samantha"],
    emoji: "🎭👮‍♂️😂",
    keywords: ["operation", "action comedy"]
  },
  {
    title: "1: Nenokkadine",
    year: 2014,
    director: "Sukumar",
    cast: ["Mahesh Babu", "Kriti Sanon"],
    emoji: "🧠🎸🌀",
    keywords: ["psychological", "memory"]
  },
  {
    title: "Nuvvu Naaku Nachav",
    year: 2001,
    director: "K. Vijaya Bhaskar",
    cast: ["Venkatesh", "Aarthi Agarwal"],
    emoji: "💌🏠😊",
    keywords: ["family", "romance"]
  },
  {
    title: "Bommarillu",
    year: 2006,
    director: "Bhaskar",
    cast: ["Siddharth", "Genelia D'Souza"],
    emoji: "👨‍👦🏠💘",
    keywords: ["father", "love"]
  },
  {
    title: "Happy Days",
    year: 2007,
    director: "Sekhar Kammula",
    cast: ["Varun Sandesh", "Tamannaah"],
    emoji: "🎓👫🎶",
    keywords: ["college", "friendship"]
  },
  {
    title: "Geetha Govindam",
    year: 2018,
    director: "Parasuram",
    cast: ["Vijay Deverakonda", "Rashmika Mandanna"],
    emoji: "📚💘😅",
    keywords: ["rom-com", "misunderstanding"]
  },
  {
    title: "Fidaa",
    year: 2017,
    director: "Sekhar Kammula",
    cast: ["Varun Tej", "Sai Pallavi"],
    emoji: "🌾💃💘",
    keywords: ["Telangana", "love"]
  },
  {
    title: "Tholi Prema",
    year: 2018,
    director: "Venky Atluri",
    cast: ["Varun Tej", "Raashi Khanna"],
    emoji: "❄️💌⏳",
    keywords: ["first love", "fate"]
  },
  {
    title: "Ye Maaya Chesave",
    year: 2010,
    director: "Gautham Vasudev Menon",
    cast: ["Naga Chaitanya", "Samantha"],
    emoji: "🎥💘💍",
    keywords: ["romance", "faith"]
  },
  {
    title: "Gamyam",
    year: 2008,
    director: "Krish",
    cast: ["Sharwanand", "Allari Naresh"],
    emoji: "🛵🛣️🧭",
    keywords: ["road trip", "self discovery"]
  },
  {
    title: "Vedam",
    year: 2010,
    director: "Krish",
    cast: ["Allu Arjun", "Anushka Shetty", "Manoj Manchu"],
    emoji: "🧵🧵🧵🎇",
    keywords: ["anthology", "interwoven"]
  },
  {
    title: "A Aa",
    year: 2016,
    director: "Trivikram Srinivas",
    cast: ["Nithiin", "Samantha"],
    emoji: "🍲🚂💘",
    keywords: ["family", "romance"]
  },
  {
    title: "Julayi",
    year: 2012,
    director: "Trivikram Srinivas",
    cast: ["Allu Arjun", "Ileana D'Cruz"],
    emoji: "🧮💰🏦",
    keywords: ["heist", "wit"]
  },
  {
    title: "Mirchi",
    year: 2013,
    director: "Koratala Siva",
    cast: ["Prabhas", "Anushka Shetty"],
    emoji: "🌶️🏡🤝",
    keywords: ["faction", "peace"]
  },
  {
    title: "Attarintiki Daredi",
    year: 2013,
    director: "Trivikram Srinivas",
    cast: ["Pawan Kalyan", "Samantha"],
    emoji: "🏠👨‍👩‍👧‍👦😂",
    keywords: ["family reunion", "fun"]
  },
  {
    title: "Kshanam",
    year: 2016,
    director: "Ravikanth Perepu",
    cast: ["Adivi Sesh", "Adah Sharma"],
    emoji: "⏱️🧩🕵️",
    keywords: ["thriller", "missing"]
  },
  {
    title: "Goodachari",
    year: 2018,
    director: "Sashi Kiran Tikka",
    cast: ["Adivi Sesh", "Sobhita Dhulipala"],
    emoji: "🕵️‍♂️🇮🇳🎯",
    keywords: ["spy", "twists"]
  },
  {
    title: "Agent Sai Srinivasa Athreya",
    year: 2019,
    director: "Swaroop RSJ",
    cast: ["Naveen Polishetty", "Shruti Sharma"],
    emoji: "🕵️‍♂️📝😂",
    keywords: ["detective", "comedy"]
  },
  {
    title: "Brochevarevarura",
    year: 2019,
    director: "Vivek Athreya",
    cast: ["Sree Vishnu", "Nivetha Thomas"],
    emoji: "🎬🎭😂",
    keywords: ["heist", "comedy"]
  },
  {
    title: "C/O Kancharapalem",
    year: 2018,
    director: "Venkatesh Maha",
    cast: ["Ensemble"],
    emoji: "🏘️💜🌧️",
    keywords: ["anthology", "small town"]
  },
  {
    title: "Sita Ramam",
    year: 2022,
    director: "Hanu Raghavapudi",
    cast: ["Dulquer Salmaan", "Mrunal Thakur", "Rashmika Mandanna"],
    emoji: "💌📜❄️",
    keywords: ["letters", "army", "love"]
  },
  {
    title: "Hi Nanna",
    year: 2023,
    director: "Shouryuv",
    cast: ["Nani", "Mrunal Thakur"],
    emoji: "👨‍👧🎨💘",
    keywords: ["father-daughter", "love"]
  },
  {
    title: "Salaar: Part 1 – Ceasefire",
    year: 2023,
    director: "Prashanth Neel",
    cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"],
    emoji: "🔫🗺️⚔️",
    keywords: ["factions", "power"]
  },
  {
    title: "Ala Vaikunthapurramuloo",
    year: 2020,
    director: "Trivikram Srinivas",
    cast: ["Allu Arjun", "Pooja Hegde"],
    emoji: "🏠👶🔁",
    keywords: ["babies swapped", "family"]
  },
  {
    title: "Jersey",
    year: 2019,
    director: "Gowtam Tinnanuri",
    cast: ["Nani", "Shraddha Srinath"],
    emoji: "🏏👨‍👦⏳",
    keywords: ["cricket", "comeback"]
  },
  {
    title: "Oopiri",
    year: 2016,
    director: "Vamshi Paidipally",
    cast: ["Nagarjuna", "Karthi", "Tamannaah"],
    emoji: "🪑🤝😊",
    keywords: ["friendship", "caregiver"]
  },
  {
    title: "Leader",
    year: 2010,
    director: "Sekhar Kammula",
    cast: ["Rana Daggubati", "Richa Gangopadhyay"],
    emoji: "🏛️🗳️🧭",
    keywords: ["politics", "idealism"]
  },
  {
    title: "Karthikeya",
    year: 2014,
    director: "Chandoo Mondeti",
    cast: ["Nikhil Siddhartha", "Swathi Reddy"],
    emoji: "🛕🌀🕵️",
    keywords: ["mystery", "temple"]
  },
  {
    title: "Evaru",
    year: 2019,
    director: "Venkat Ramji",
    cast: ["Adivi Sesh", "Regina Cassandra"],
    emoji: "🕵️‍♂️🔁🧩",
    keywords: ["thriller", "twists"]
  },

  // ——— Additions: rarer/indie/classic/cult Telugu movies ———

  {
    title: "Aithe",
    year: 2003,
    director: "Chandra Sekhar Yeleti",
    cast: ["Shashank", "Sindhu Tolani"],
    emoji: "✈️💼🕵️",
    keywords: ["hijack", "rookies", "heist"]
  },
  {
    title: "Anukokunda Oka Roju",
    year: 2005,
    director: "Chandra Sekhar Yeleti",
    cast: ["Charmme Kaur", "Jagapathi Babu"],
    emoji: "🗓️🕳️🧩",
    keywords: ["missing day", "thriller", "cult"]
  },
  {
    title: "Okkadunnadu",
    year: 2007,
    director: "Chandra Sekhar Yeleti",
    cast: ["Gopichand", "Neha Julka"],
    emoji: "🩸💰🏃",
    keywords: ["rare blood", "chase", "action thriller"]
  },
  {
    title: "Prayanam",
    year: 2009,
    director: "Chandra Sekhar Yeleti",
    cast: ["Manoj Manchu", "Payal Ghosh"],
    emoji: "✈️💘⏱️",
    keywords: ["airport", "romance", "serendipity"]
  },
  {
    title: "Sahasam",
    year: 2013,
    director: "Chandra Sekhar Yeleti",
    cast: ["Gopichand", "Taapsee Pannu"],
    emoji: "🗺️🏔️💎",
    keywords: ["treasure", "adventure", "Lahore"]
  },
  {
    title: "Manamantha",
    year: 2016,
    director: "Chandra Sekhar Yeleti",
    cast: ["Mohanlal", "Gauthami"],
    emoji: "🧵👨‍👩‍👧‍👦🛒",
    keywords: ["slice of life", "anthology"]
  },
  {
    title: "Ashta Chamma",
    year: 2008,
    director: "Mohan Krishna Indraganti",
    cast: ["Nani", "Swathi Reddy"],
    emoji: "🎲💍😂",
    keywords: ["Oscar Wilde", "comedy of errors"]
  },
  {
    title: "Golconda High School",
    year: 2011,
    director: "Mohan Krishna Indraganti",
    cast: ["Sumanth", "Swathi Reddy"],
    emoji: "🏏🏫💪",
    keywords: ["cricket", "mentor", "underdogs"]
  },
  {
    title: "Anthaka Mundu Aa Tarvatha",
    year: 2013,
    director: "Mohan Krishna Indraganti",
    cast: ["Sumanth Ashwin", "Eesha Rebba"],
    emoji: "💍📝❤️",
    keywords: ["compatibility", "relationships"]
  },
  {
    title: "Ami Thumi",
    year: 2017,
    director: "Mohan Krishna Indraganti",
    cast: ["Adivi Sesh", "Eesha Rebba"],
    emoji: "😂🎭💍",
    keywords: ["farce", "mistaken identity"]
  },
  {
    title: "Sammohanam",
    year: 2018,
    director: "Mohan Krishna Indraganti",
    cast: ["Sudheer Babu", "Aditi Rao Hydari"],
    emoji: "🎬🎨💘",
    keywords: ["actress", "love", "boundaries"]
  },
  {
    title: "Dollar Dreams",
    year: 2000,
    director: "Sekhar Kammula",
    cast: ["Ensemble"],
    emoji: "🇺🇸💭✈️",
    keywords: ["immigration", "youth", "dreams"]
  },
  {
    title: "Anand",
    year: 2004,
    director: "Sekhar Kammula",
    cast: ["Raja", "Kamalinee Mukherjee"],
    emoji: "☕📷💘",
    keywords: ["simple romance", "healing"]
  },
  {
    title: "Godavari",
    year: 2006,
    director: "Sekhar Kammula",
    cast: ["Sumanth", "Kamalinee Mukherjee"],
    emoji: "🚢🌊💞",
    keywords: ["river cruise", "love", "Hyderabad"]
  },
  {
    title: "Life Is Beautiful",
    year: 2012,
    director: "Sekhar Kammula",
    cast: ["Abijeet", "Kaushik"],
    emoji: "🏘️👫🎓",
    keywords: ["coming of age", "neighborhood"]
  },
  {
    title: "Pelli Choopulu",
    year: 2016,
    director: "Tharun Bhascker",
    cast: ["Vijay Deverakonda", "Ritu Varma"],
    emoji: "🍽️🚚💘",
    keywords: ["food truck", "meet-cute"]
  },
  {
    title: "Ee Nagaraniki Emaindi",
    year: 2018,
    director: "Tharun Bhascker",
    cast: ["Vishwak Sen", "Abhinav Gomatam"],
    emoji: "🎬🍻🧳",
    keywords: ["bromance", "road trip", "short film"]
  },
  {
    title: "Keedaa Cola",
    year: 2023,
    director: "Tharun Bhascker",
    cast: ["Chaitanya Rao", "Rag Mayur"],
    emoji: "🪳🥤💼",
    keywords: ["dark comedy", "caper"]
  },
  {
    title: "Palasa 1978",
    year: 2020,
    director: "Karuna Kumar",
    cast: ["Rakshit", "Nakshatra"],
    emoji: "🪕🩸🏞️",
    keywords: ["caste", "revenge", "period"]
  },
  {
    title: "Mallesham",
    year: 2019,
    director: "Raj Rachakonda",
    cast: ["Priyadarshi", "Ananya Nagalla"],
    emoji: "🧶⚙️🏆",
    keywords: ["invention", "loom", "biopic"]
  },
  {
    title: "Color Photo",
    year: 2020,
    director: "Sandeep Raj",
    cast: ["Suhas", "Chandini Chowdary"],
    emoji: "🖤📸💔",
    keywords: ["class", "prejudice", "love"]
  },
  {
    title: "Dorasaani",
    year: 2019,
    director: "KVR Mahendra",
    cast: ["Anand Deverakonda", "Shivathmika Rajashekar"],
    emoji: "🏚️👩‍🦰💔",
    keywords: ["forbidden love", "rural"]
  },
  {
    title: "Mathu Vadalara",
    year: 2019,
    director: "Ritesh Rana",
    cast: ["Sri Simha", "Naresh Agastya"],
    emoji: "📦💊🌀",
    keywords: ["delivery boy", "crime", "twists"]
  },
  {
    title: "Uma Maheswara Ugra Roopasya",
    year: 2020,
    director: "Venkatesh Maha",
    cast: ["Satyadev", "Naresh"],
    emoji: "📷🦶🏽💢",
    keywords: ["dignity", "revenge", "gentle giant"]
  },
  {
    title: "Cinema Bandi",
    year: 2021,
    director: "Praveen Kandregula",
    cast: ["Vikas Vasistha", "Sandeep Varanasi"],
    emoji: "🎥🚜😊",
    keywords: ["village", "filmmaking", "heartwarming"]
  },
  {
    title: "Middle Class Melodies",
    year: 2020,
    director: "Vinod Anantoju",
    cast: ["Anand Deverakonda", "Varsha Bollamma"],
    emoji: "🍛🏠💘",
    keywords: ["tiffin", "dreams", "middle class"]
  },
  {
    title: "HIT: The First Case",
    year: 2020,
    director: "Sailesh Kolanu",
    cast: ["Vishwak Sen", "Ruhani Sharma"],
    emoji: "🧠🕵️‍♂️🧬",
    keywords: ["PTSD", "investigation"]
  },
  {
    title: "Jathi Ratnalu",
    year: 2021,
    director: "Anudeep KV",
    cast: ["Naveen Polishetty", "Priyadarshi", "Rahul Ramakrishna"],
    emoji: "🤣🏛️🔧",
    keywords: ["satire", "buddies", "trial"]
  },
  {
    title: "Naandhi",
    year: 2021,
    director: "Vijay Kanakamedala",
    cast: ["Allari Naresh", "Varalaxmi Sarathkumar"],
    emoji: "⚖️🔒🗣️",
    keywords: ["wrongful arrest", "justice"]
  },
  {
    title: "Awe!",
    year: 2018,
    director: "Prasanth Varma",
    cast: ["Kajal Aggarwal", "Nithya Menen", "Eesha Rebba"],
    emoji: "🧠🍽️🪄",
    keywords: ["anthology", "psychological", "twist"]
  },
  {
    title: "Kalki",
    year: 2019,
    director: "Prasanth Varma",
    cast: ["Rajasekhar", "Adah Sharma"],
    emoji: "🕵️‍♂️🏞️🕰️",
    keywords: ["period", "mystery"]
  },
  {
    title: "Zombie Reddy",
    year: 2021,
    director: "Prasanth Varma",
    cast: ["Teja Sajja", "Anandhi"],
    emoji: "🧟‍♂️🗡️😂",
    keywords: ["zombies", "Rayalaseema", "fun"]
  },
  {
    title: "118",
    year: 2019,
    director: "K. V. Guhan",
    cast: ["Nandamuri Kalyan Ram", "Shalini Pandey"],
    emoji: "📸🧩🏝️",
    keywords: ["dreams", "mystery"]
  },
  {
    title: "Ekkadiki Pothavu Chinnavada",
    year: 2016,
    director: "Vi Anand",
    cast: ["Nikhil Siddhartha", "Hebah Patel"],
    emoji: "👻💘🔁",
    keywords: ["supernatural", "romance"]
  },
  {
    title: "Disco Raja",
    year: 2020,
    director: "Vi Anand",
    cast: ["Ravi Teja", "Nabha Natesh"],
    emoji: "🧊🧠🎶",
    keywords: ["revival", "retro", "sci-fi"]
  },
  {
    title: "Yevade Subramanyam",
    year: 2015,
    director: "Nag Ashwin",
    cast: ["Nani", "Malavika Nair"],
    emoji: "⛰️🧭🧘",
    keywords: ["self discovery", "Dhoop chala"]
  },
  {
    title: "Krishna and His Leela",
    year: 2020,
    director: "Ravikanth Perepu",
    cast: ["Siddu Jonnalagadda", "Shraddha Srinath"],
    emoji: "💞🔁🤯",
    keywords: ["relationships", "choices"]
  },
  {
    title: "Oohalu Gusagusalade",
    year: 2014,
    director: "Srinivas Avasarala",
    cast: ["Naga Shaurya", "Raashi Khanna"],
    emoji: "💌🎙️😊",
    keywords: ["letters", "rom-com"]
  },
  {
    title: "Jyo Achyutananda",
    year: 2016,
    director: "Srinivas Avasarala",
    cast: ["Nara Rohit", "Naga Shaurya", "Regina Cassandra"],
    emoji: "👬💘🎻",
    keywords: ["siblings", "triangle"]
  },
  {
    title: "Chi La Sow",
    year: 2018,
    director: "Rahul Ravindran",
    cast: ["Sushanth", "Ruhani Sharma"],
    emoji: "🌃☕💬",
    keywords: ["arranged meet", "one night talk"]
  },
  {
    title: "Malli Raava",
    year: 2017,
    director: "Gowtam Tinnanuri",
    cast: ["Sumanth", "Akanksha Singh"],
    emoji: "📓⏳💘",
    keywords: ["chapters", "nostalgia"]
  },
  {
    title: "Vunnadhi Okate Zindagi",
    year: 2017,
    director: "Kishore Tirumala",
    cast: ["Ram Pothineni", "Sree Vishnu"],
    emoji: "🎸🛣️🤝",
    keywords: ["friendship", "love"]
  },
  {
    title: "Kanche",
    year: 2015,
    director: "Krish",
    cast: ["Varun Tej", "Pragya Jaiswal"],
    emoji: "⚔️🪖💔",
    keywords: ["WWII", "border", "caste"]
  },
  {
    title: "Krishnam Vande Jagadgurum",
    year: 2012,
    director: "Krish",
    cast: ["Rana Daggubati", "Nayanthara"],
    emoji: "🎭⛏️🔥",
    keywords: ["theatre", "mining", "activism"]
  },
  {
    title: "Anthapuram",
    year: 1998,
    director: "Krishna Vamsi",
    cast: ["Soundarya", "Jagapathi Babu"],
    emoji: "🏞️🧒🏽🔫",
    keywords: ["faction", "mother", "escape"]
  },
  {
    title: "Gulabi",
    year: 1995,
    director: "Krishna Vamsi",
    cast: ["J. D. Chakravarthy", "Maheswari"],
    emoji: "🌹💔🔫",
    keywords: ["love", "crime"]
  },
  {
    title: "Danger",
    year: 2005,
    director: "Krishna Vamsi",
    cast: ["Allari Naresh", "Shireen"],
    emoji: "🏚️🌑🩸",
    keywords: ["friends", "hunted"]
  },
  {
    title: "Gaayam",
    year: 1993,
    director: "Ram Gopal Varma",
    cast: ["Jagapathi Babu", "Urmila Matondkar"],
    emoji: "⚖️🩸🌃",
    keywords: ["mafia", "politics"]
  },
  {
    title: "Kshana Kshanam",
    year: 1991,
    director: "Ram Gopal Varma",
    cast: ["Venkatesh", "Sridevi"],
    emoji: "💼🏃‍♂️🌧️",
    keywords: ["road movie", "heist"]
  },
  {
    title: "Antham",
    year: 1992,
    director: "Ram Gopal Varma",
    cast: ["Nagarjuna", "Urmila Matondkar"],
    emoji: "🔫🌃💘",
    keywords: ["hitman", "noir"]
  },
  {
    title: "Money",
    year: 1993,
    director: "Siva Nageswara Rao",
    cast: ["J. D. Chakravarthy", "Chinna"],
    emoji: "💰😂🎭",
    keywords: ["kidnap", "comedy"]
  },
  {
    title: "Dongala Mutha",
    year: 2011,
    director: "Ram Gopal Varma",
    cast: ["Ravi Teja", "Charmme Kaur"],
    emoji: "🎥⚡📵",
    keywords: ["guerrilla shoot", "no lights"]
  },
  {
    title: "Ice Cream",
    year: 2014,
    director: "Ram Gopal Varma",
    cast: ["Navdeep", "Tejaswi Madivada"],
    emoji: "🏠📷😱",
    keywords: ["POV", "horror"]
  },
  {
    title: "Vangaveeti",
    year: 2016,
    director: "Ram Gopal Varma",
    cast: ["Sandy", "Vamsi Nakkanti"],
    emoji: "🗡️🩸🏙️",
    keywords: ["biopic", "Vijayawada"]
  },
  {
    title: "PSV Garuda Vega",
    year: 2017,
    director: "Praveen Sattaru",
    cast: ["Rajasekhar", "Pooja Kumar"],
    emoji: "🚙💣🛰️",
    keywords: ["spy", "action"]
  },
  {
    title: "Guntur Talkies",
    year: 2016,
    director: "Praveen Sattaru",
    cast: ["Siddu Jonnalagadda", "Rashmi Gautam"],
    emoji: "👜💸😬",
    keywords: ["heist", "black comedy"]
  },
  {
    title: "Chandamama Kathalu",
    year: 2014,
    director: "Praveen Sattaru",
    cast: ["Lakshmi Manchu", "Naresh"],
    emoji: "🌙🧵💔",
    keywords: ["anthology", "National Award"]
  },
  {
    title: "LBW: Life Before Wedding",
    year: 2011,
    director: "Praveen Sattaru",
    cast: ["Rohan Gudlavalleti", "Asif Taj"],
    emoji: "💍👫🧩",
    keywords: ["relationships", "urban"]
  },
  {
    title: "Routine Love Story",
    year: 2012,
    director: "Praveen Sattaru",
    cast: ["Sundeep Kishan", "Regina Cassandra"],
    emoji: "📱💬❤️",
    keywords: ["modern romance", "slice of life"]
  },
  {
    title: "Thilaadanam",
    year: 2001,
    director: "K. N. T. Sastry",
    cast: ["Banerjee", "Hema"],
    emoji: "🕯️🔥⚰️",
    keywords: ["rituals", "conflict", "art film"]
  },
  {
    title: "Vanaja",
    year: 2006,
    director: "Rajnesh Domalpalli",
    cast: ["Mamatha Bhukya", "Urmila Dammannagari"],
    emoji: "🩰🏠⚖️",
    keywords: ["dance", "power", "class"]
  },
  {
    title: "Maa Bhoomi",
    year: 1979,
    director: "Goutam Ghose",
    cast: ["Sai Chand", "Rami Reddy"],
    emoji: "🌾✊📜",
    keywords: ["peasant", "revolution", "classic"]
  },
  {
    title: "Daasi",
    year: 1988,
    director: "B. Narsing Rao",
    cast: ["Archana", "Ramakrishna"],
    emoji: "🧣⛓️😔",
    keywords: ["bonded labour", "realism"]
  },
  {
    title: "Seethakoka Chiluka",
    year: 1981,
    director: "Bharathiraja",
    cast: ["Karthik", "Aruna"],
    emoji: "🦋🌾💘",
    keywords: ["rural", "first love"]
  },
  {
    title: "Sitaara",
    year: 1984,
    director: "Vamsy",
    cast: ["Bhanupriya", "Harish"],
    emoji: "🎭🌆💔",
    keywords: ["model", "melancholy"]
  },
  {
    title: "Anveshana",
    year: 1985,
    director: "Vamsy",
    cast: ["Karthik", "Bhanupriya"],
    emoji: "🌲🐾🔍",
    keywords: ["forest", "serial killer", "thriller"]
  },
  {
    title: "Ladies Tailor",
    year: 1986,
    director: "Vamsy",
    cast: ["Rajendra Prasad", "Archana"],
    emoji: "✂️👗😂",
    keywords: ["comedy", "small town"]
  },
  {
    title: "April 1 Vidudala",
    year: 1991,
    director: "Vamsy",
    cast: ["Rajendra Prasad", "Shobana"],
    emoji: "📆😂🎭",
    keywords: ["pranks", "office", "comedy"]
  },
  {
    title: "Anumanaspadam",
    year: 2007,
    director: "Vamsy",
    cast: ["Aryan Rajesh", "Hamsa Nandini"],
    emoji: "🗺️🩸📷",
    keywords: ["lost in woods", "horror thriller"]
  },
  {
    title: "Aha Naa Pellanta!",
    year: 1987,
    director: "Jandhyala",
    cast: ["Rajendra Prasad", "Rajani"],
    emoji: "💍😂🏠",
    keywords: ["comedy", "classic"]
  },
  {
    title: "Chantabbai",
    year: 1986,
    director: "Jandhyala",
    cast: ["Chiranjeevi", "Suhasini"],
    emoji: "🕵️‍♂️😂📚",
    keywords: ["spoof", "detective"]
  },
  {
    title: "Srivariki Premalekha",
    year: 1984,
    director: "Jandhyala",
    cast: ["Naresh", "Poornima"],
    emoji: "💌📮😊",
    keywords: ["letters", "rom-com"]
  },
  {
    title: "Vivaha Bhojanambu",
    year: 1988,
    director: "Jandhyala",
    cast: ["Rajendra Prasad", "Archana"],
    emoji: "🍽️💍😂",
    keywords: ["marriage", "misunderstandings"]
  },
  {
    title: "Pelli Pustakam",
    year: 1991,
    director: "Bapu",
    cast: ["Rajendra Prasad", "Divyavani"],
    emoji: "📖💑🏠",
    keywords: ["middle class", "married life"]
  },
  {
    title: "Mister Pellam",
    year: 1993,
    director: "Bapu",
    cast: ["Rajendra Prasad", "Aamani"],
    emoji: "👔🔁🏠",
    keywords: ["role reversal", "family"]
  },
  {
    title: "Muthyala Muggu",
    year: 1975,
    director: "Bapu",
    cast: ["Sangeetha"],
    emoji: "💍🏞️🎨",
    keywords: ["folk", "classic"]
  },
  {
    title: "Seeta Kalyanam",
    year: 1976,
    director: "Bapu",
    cast: ["J. V. Somayajulu", "Jayamalini"],
    emoji: "🪔👑💍",
    keywords: ["mythology", "Ramayanam"]
  },
  {
    title: "Swathi Muthyam",
    year: 1986,
    director: "K. Viswanath",
    cast: ["Kamal Haasan", "Radhika"],
    emoji: "🕊️💍🧠",
    keywords: ["innocence", "widow", "classic"]
  },
  {
    title: "Sagara Sangamam",
    year: 1983,
    director: "K. Viswanath",
    cast: ["Kamal Haasan", "Jaya Prada"],
    emoji: "🩰🎻💧",
    keywords: ["classical dance", "tragedy"]
  },
  {
    title: "Swarna Kamalam",
    year: 1988,
    director: "K. Viswanath",
    cast: ["Venkatesh", "Bhanupriya"],
    emoji: "🌼🩰🎨",
    keywords: ["dance", "art"]
  },
  {
    title: "Sirivennela",
    year: 1986,
    director: "K. Viswanath",
    cast: ["Sarvadaman Banerjee", "Suhasini"],
    emoji: "🎶👨‍🦯💔",
    keywords: ["poetry", "blind", "love"]
  },
  {
    title: "Subhalekha",
    year: 1982,
    director: "K. Viswanath",
    cast: ["Chiranjeevi", "Suhasini"],
    emoji: "🖋️💌😂",
    keywords: ["dowry", "satire"]
  },
  {
    title: "Swathi Kiranam",
    year: 1992,
    director: "K. Viswanath",
    cast: ["Mammootty", "Radhika"],
    emoji: "🎼👨‍🏫🧒",
    keywords: ["envy", "music prodigy"]
  },
  {
    title: "Pratighatana",
    year: 1985,
    director: "T. Krishna",
    cast: ["Vijayashanti", "Charan Raj"],
    emoji: "🎓🩸✊",
    keywords: ["campus", "woman power"]
  },
  {
    title: "Neti Bharatam",
    year: 1983,
    director: "T. Krishna",
    cast: ["Suman", "Vijayashanti"],
    emoji: "🗣️📰✊",
    keywords: ["ideals", "youth"]
  },
  {
    title: "Repati Pourulu",
    year: 1986,
    director: "T. Krishna",
    cast: ["Rajasekhar", "Vijayashanti"],
    emoji: "🧑‍🌾✊🩸",
    keywords: ["activism", "reform"]
  },
  {
    title: "Falaknuma Das",
    year: 2019,
    director: "Vishwak Sen",
    cast: ["Vishwak Sen", "Prashanthi Charuolingah"],
    emoji: "🏙️🥊🗣️",
    keywords: ["Hyderabad", "gangs"]
  },
  {
    title: "Bhanumathi & Ramakrishna",
    year: 2020,
    director: "Srikanth Nagothi",
    cast: ["Naveen Chandra", "Salony Luthra"],
    emoji: "💼☕💘",
    keywords: ["urban", "age gap"]
  },
  {
    title: "Savaari",
    year: 2020,
    director: "Saahith Mothkuri",
    cast: ["Nandu", "Priyanka Sharma"],
    emoji: "🐴💘🏍️",
    keywords: ["horse", "romance"]
  },
  {
    title: "Raja Vaaru Rani Gaaru",
    year: 2019,
    director: "Ravi Kiran Kola",
    cast: ["Kiran Abbavaram", "Rahasya Gorak"],
    emoji: "🌾🎈💞",
    keywords: ["village", "first love"]
  },
  {
    title: "Ashoka Vanamlo Arjuna Kalyanam",
    year: 2022,
    director: "Vidyasagar Chinta",
    cast: ["Vishwak Sen", "Rukshar Dhillon"],
    emoji: "💍📋😬",
    keywords: ["matchmaking", "pressure"]
  },
  {
    title: "Vellipomakey",
    year: 2017,
    director: "Yakub Ali",
    cast: ["Vishwak Sen", "Nithya Sree"],
    emoji: "💻📱💔",
    keywords: ["online", "love", "loneliness"]
  },
  {
    title: "Hushaaru",
    year: 2018,
    director: "Sree Harsha Konuganti",
    cast: ["Tejus Kancherla", "Tej Kurapati"],
    emoji: "🍻👬😂",
    keywords: ["buddies", "youth"]
  },
  {
    title: "Meeku Maathrame Cheptha",
    year: 2019,
    director: "Shammeer Sultan",
    cast: ["Tharun Bhascker", "Abhinav Gomatam"],
    emoji: "🤐📱😅",
    keywords: ["secret", "wedding"]
  },
  {
    title: "Mithunam",
    year: 2012,
    director: "Tanikella Bharani",
    cast: ["S. P. Balasubrahmanyam", "Lakshmi"],
    emoji: "👴👵🏡",
    keywords: ["elderly", "love", "minimalist"]
  },
  {
    title: "Jayammu Nischayammu Raa",
    year: 2016,
    director: "Shiva Raj Kanumuri",
    cast: ["Sree Vishnu", "Poorna"],
    emoji: "🗂️🏢😊",
    keywords: ["small-town", "job", "romance"]
  },
  {
    title: "Appatlo Okadundevadu",
    year: 2016,
    director: "Sagar K Chandra",
    cast: ["Nara Rohit", "Sree Vishnu"],
    emoji: "🏏🔫⚖️",
    keywords: ["rise", "fall", "revenge"]
  },
  {
    title: "Ek Mini Katha",
    year: 2021,
    director: "Karthik Rapolu",
    cast: ["Santosh Shoban", "Kavya Thapar"],
    emoji: "📏😳💍",
    keywords: ["insecurity", "comedy"]
  },
  {
    title: "Like Share & Subscribe",
    year: 2022,
    director: "Merlapaka Gandhi",
    cast: ["Santosh Shoban", "Faria Abdullah"],
    emoji: "🎥🏞️😂",
    keywords: ["travel vlog", "trouble"]
  },
  {
    title: "Bluff Master",
    year: 2018,
    director: "Gopi Ganesh Pattabhi",
    cast: ["Satyadev", "Nandita Swetha"],
    emoji: "🎭💰🕵️",
    keywords: ["conman", "remake"]
  },
  {
    title: "W/O Ram",
    year: 2018,
    director: "Vijay Yelakanti",
    cast: ["Lakshmi Manchu", "Aadavallu Meeku Johaarlu cameo?"],
    emoji: "🕵️‍♀️🩸🧩",
    keywords: ["noir", "investigation"]
  },
  {
    title: "Kalki (Rajasekhar)",
    year: 2019,
    director: "Prasanth Varma",
    cast: ["Rajasekhar", "Adah Sharma"],
    emoji: "🕵️‍♂️🗡️🌫️",
    keywords: ["retro", "mystery"]
  },
  {
    title: "Gatham",
    year: 2020,
    director: "Kiran Kondamadugula",
    cast: ["Rakesh Galebhe", "Poojitha Kuraparthi"],
    emoji: "🛣️🏠🌀",
    keywords: ["amnesia", "twist"]
  },
  {
    title: "Manu",
    year: 2018,
    director: "Phanindra Narsetti",
    cast: ["Raja Goutham", "Chandini Chowdary"],
    emoji: "🖤🕯️🖼️",
    keywords: ["experimental", "noir"]
  },
  {
    title: "The End",
    year: 2014,
    director: "Shankar Marthand",
    cast: ["Yuva Chandraa", "Pavani Reddy"],
    emoji: "🏠🌪️😱",
    keywords: ["psych horror", "indie"]
  },
  {
    title: "Geethanjali",
    year: 2014,
    director: "Raj Kiran",
    cast: ["Anjali", "Srinivasa Reddy"],
    emoji: "👻😂🏚️",
    keywords: ["horror comedy", "spooks"]
  },
  {
    title: "Uyyala Jampala",
    year: 2013,
    director: "Virinchi Varma",
    cast: ["Raj Tarun", "Avika Gor"],
    emoji: "🌾🐮💘",
    keywords: ["cousins", "village", "love"]
  },
  {
    title: "Andala Rakshasi",
    year: 2012,
    director: "Hanu Raghavapudi",
    cast: ["Navin Chandra", "Lavanya Tripathi"],
    emoji: "🎨📷💔",
    keywords: ["triangle", "poetic"]
  },
  {
    title: "Oka Manasu",
    year: 2016,
    director: "G. V. Rama Raju",
    cast: ["Naga Shaurya", "Niharika Konidela"],
    emoji: "🗳️💘😔",
    keywords: ["idealist", "romance"]
  },
  {
    title: "Oka Kshanam",
    year: 2017,
    director: "Vi Anand",
    cast: ["Allu Sirish", "Surabhi"],
    emoji: "🔁🕰️💑",
    keywords: ["parallel lives", "thriller"]
  },
  {
    title: "Ghazi",
    year: 2017,
    director: "Sankalp Reddy",
    cast: ["Rana Daggubati", "Kay Kay Menon"],
    emoji: "⚓🔱🌊",
    keywords: ["submarine", "war", "bilingual"]
  },
  {
    title: "Falaknuma Das (Hyderabad)",
    year: 2019,
    director: "Vishwak Sen",
    cast: ["Vishwak Sen"],
    emoji: "🏙️🥃🗡️",
    keywords: ["local slang", "gangs"]
  },
  {
    title: "Kittu Unnadu Jagratha",
    year: 2017,
    director: "Vamsi Krishna Naidu",
    cast: ["Raj Tarun", "Anu Emmanuel"],
    emoji: "🐶💰😂",
    keywords: ["kidnap dog", "comedy"]
  },
  {
    title: "Baanam",
    year: 2009,
    director: "Chaitanya Dantuluri",
    cast: ["Nara Rohit", "Vedhika"],
    emoji: "🎯🔫🏙️",
    keywords: ["idealism", "debut"]
  },
  {
    title: "Krishnamma Kalipindi Iddarini",
    year: 2015,
    director: "R. Chandru",
    cast: ["Sudheer Babu", "Nanditha Raj"],
    emoji: "🏫📖💘",
    keywords: ["nostalgia", "love"]
  },
  {
    title: "Golkonda High School",
    year: 2011,
    director: "Mohan Krishna Indraganti",
    cast: ["Sumanth", "Swathi Reddy"],
    emoji: "🏏🏫🏆",
    keywords: ["coach", "team"]
  },
  {
    title: "Oka Oorilo",
    year: 2005,
    director: "Ramesh Varma",
    cast: ["Tarun", "Veda"],
    emoji: "🏞️💘😢",
    keywords: ["runaway", "romance"]
  },
  {
    title: "Krishnamma",
    year: 2023,
    director: "V. V. Gopala Krishna",
    cast: ["Satyadev", "Athira Raj"],
    emoji: "🏞️🩸👬",
    keywords: ["buddies", "crime"]
  },
  {
    title: "Mosagallaku Mosagadu",
    year: 2015,
    director: "Naveen Gandhi",
    cast: ["Sudheer Babu", "Nandini Rai"],
    emoji: "🎭💰🗿",
    keywords: ["con", "idol theft"]
  },
  {
    title: "Anand Obsessive Love (Anand)",
    year: 2004,
    director: "Sekhar Kammula",
    cast: ["Raja", "Kamalinee"],
    emoji: "☕📷💐",
    keywords: ["minimal", "feel good"]
  },
  {
    title: "Dollar Dreams (US Desi)",
    year: 2000,
    director: "Sekhar Kammula",
    cast: ["Ensemble"],
    emoji: "🇺🇸🛄💭",
    keywords: ["immigration", "youth"]
  },
  {
    title: "Yevadu Subramanyam (Alt Title)",
    year: 2015,
    director: "Nag Ashwin",
    cast: ["Nani", "Malavika Nair"],
    emoji: "🗻🧭🌄",
    keywords: ["soul searching"]
  },
  {
    title: "Dollar Ki Maro Vaipu (Godavari vibe)",
    year: 2006,
    director: "Sekhar Kammula",
    cast: ["Sumanth", "Kamalinee"],
    emoji: "🚢🌊🎈",
    keywords: ["river boat", "Hyderabad"]
  },
  {
    title: "Yevade Subramanyam (Himalayas)",
    year: 2015,
    director: "Nag Ashwin",
    cast: ["Nani", "Malavika Nair"],
    emoji: "⛰️🧘🌬️",
    keywords: ["Doodh Kasi", "trek"]
  },
  {
    title: "Kerintha",
    year: 2015,
    director: "Sai Kiran Adivi",
    cast: ["Sumanth Ashwin", "Tejaswi Madivada"],
    emoji: "🎓👫🎉",
    keywords: ["campus", "friendship"]
  },
  {
    title: "Malli Raava (Chapters of Love)",
    year: 2017,
    director: "Gowtam Tinnanuri",
    cast: ["Sumanth", "Akanksha Singh"],
    emoji: "📖💞🕰️",
    keywords: ["three timelines", "romance"]
  },
  {
    title: "Idhi Katha Kaadu",
    year: 1979,
    director: "K. Balachander",
    cast: ["Chiranjeevi", "Saritha"],
    emoji: "🏠👩‍👧‍👦💼",
    keywords: ["family", "responsibility"]
  },
  {
    title: "Maro Charitra",
    year: 1978,
    director: "K. Balachander",
    cast: ["Kamal Haasan", "Saritha"],
    emoji: "🏢🌉💔",
    keywords: ["intercultural", "tragedy"]
  },
  {
    title: "Punnami Nagu",
    year: 1980,
    director: "Vytla Ramakrishna",
    cast: ["Chiranjeevi", "Reshma Roy"],
    emoji: "🌕🐍😱",
    keywords: ["shape-shifter", "horror"]
  },
  {
    title: "Prema",
    year: 1989,
    director: "Suresh Krissna",
    cast: ["Venkatesh", "Revathi"],
    emoji: "🎶💘😭",
    keywords: ["music", "tragedy"]
  },
  {
    title: "Aithe 2.0",
    year: 2018,
    director: "Raja Ram Paida",
    cast: ["Indraneil Sengupta", "Zara Shah"],
    emoji: "💻🔐🕵️",
    keywords: ["cyber", "heist"]
  },
  {
    title: "Ghatotkachudu",
    year: 1995,
    director: "S. V. Krishna Reddy",
    cast: ["Ali", "Satyanarayana"],
    emoji: "🧞‍♂️🍲😂",
    keywords: ["fantasy", "comedy"]
  },
  {
    title: "Yamaleela",
    year: 1994,
    director: "S. V. Krishna Reddy",
    cast: ["Ali", "Indraja"],
    emoji: "📓😈😂",
    keywords: ["mystic book", "Yama", "fun"]
  },
  {
    title: "Priyuraalu",
    year: 2021,
    director: "Chandrasekhar Kanuri",
    cast: ["Prudhvi Medavaram", "Mounika"],
    emoji: "💘💍😵",
    keywords: ["affair", "urban indie"]
  },
  {
    title: "Amrutham Chandamamalo",
    year: 2014,
    director: "Gunnam Gangaraju",
    cast: ["Srinivas Avasarala", "Harsha Vardhan"],
    emoji: "🚀🍽️😂",
    keywords: ["sitcom", "space"]
  },
  {
    title: "Virodhi",
    year: 2011,
    director: "Neelakanta",
    cast: ["Meka Srikanth", "Ajay"],
    emoji: "🌳🔫📢",
    keywords: ["naxal", "journalist"]
  },
  {
    title: "Show",
    year: 2001,
    director: "Neelakanta",
    cast: ["Manjula", "Surya"],
    emoji: "🎭🧠🪞",
    keywords: ["meta", "National Award"]
  },
  {
    title: "Okariki Okaru",
    year: 2003,
    director: "Raja",
    cast: ["Sriram", "Aarthi Chhabria"],
    emoji: "🍂📮💘",
    keywords: ["fate", "letters"]
  },
  {
    title: "Naa Autograph",
    year: 2004,
    director: "S. Gopal Reddy",
    cast: ["Ravi Teja", "Gopika"],
    emoji: "📓🛣️💭",
    keywords: ["nostalgia", "romance"]
  },
  {
    title: "Sehari",
    year: 2022,
    director: "Gnanasagar Dwaraka",
    cast: ["Harsh Kanumilli", "Simran Choudhary"],
    emoji: "💍🕺😅",
    keywords: ["engagement", "chaos"]
  },
  {
    title: "Rang De Basanti (Telugu Dub) — skip",
    year: 2006,
    director: "",
    cast: [],
    emoji: "🚫",
    keywords: ["placeholder"]
  },
  {
    title: "Paper Boy",
    year: 2018,
    director: "Jaya Shankar",
    cast: ["Santosh Sobhan", "Riya Suman"],
    emoji: "🗞️💘🌧️",
    keywords: ["rich-poor", "romance"]
  },
  {
    title: "Ardha Shathabdham",
    year: 2021,
    director: "Rawindra Pulle",
    cast: ["Karthik Rathnam", "Krishna Priya"],
    emoji: "🕊️🩸🏞️",
    keywords: ["caste", "clash"]
  },
  {
    title: "Hrudaya Kaleyam",
    year: 2014,
    director: "Steven Shankar",
    cast: ["Sampoornesh Babu", "Ishika Singh"],
    emoji: "💪🔥😂",
    keywords: ["spoof", "cult"]
  },
  {
    title: "Gamyam (Alt Cut)",
    year: 2008,
    director: "Krish",
    cast: ["Sharwanand", "Naresh"],
    emoji: "🛵🛣️🕊️",
    keywords: ["journey", "lessons"]
  },
  {
    title: "Ee Rojullo",
    year: 2012,
    director: "Maruthi",
    cast: ["Srinivas", "Reshma Rathore"],
    emoji: "📱💬😂",
    keywords: ["low budget", "youth"]
  },
  {
    title: "Bus Stop",
    year: 2012,
    director: "Maruthi",
    cast: ["Prince", "Sri Divya"],
    emoji: "🚌💘📵",
    keywords: ["youth", "romance"]
  },
  {
    title: "Prema Ishq Kaadhal",
    year: 2013,
    director: "Pavan Sadineni",
    cast: ["Harshvardhan Rane", "Sree Vishnu"],
    emoji: "🎧☕💔",
    keywords: ["urban", "anthology"]
  },
  {
    title: "Savari (Alt Spelling)",
    year: 2020,
    director: "Saahith Mothkuri",
    cast: ["Nandu", "Priyanka Sharma"],
    emoji: "🐴🌧️💘",
    keywords: ["horse", "romance"]
  },
  {
    title: "Oka Manasu (Gentle Love)",
    year: 2016,
    director: "G. V. Rama Raju",
    cast: ["Naga Shaurya", "Niharika"],
    emoji: "🗳️🌧️💔",
    keywords: ["ideals", "love"]
  },
  {
    title: "Kanche (War and Love)",
    year: 2015,
    director: "Krish",
    cast: ["Varun Tej", "Pragya Jaiswal"],
    emoji: "🪖⚔️💘",
    keywords: ["WWII", "caste"]
  },
  {
    title: "Gautamiputra Satakarni",
    year: 2017,
    director: "Krish",
    cast: ["Nandamuri Balakrishna", "Shriya Saran"],
    emoji: "👑⚔️🏹",
    keywords: ["Satavahana", "epic"]
  },
  {
    title: "Uppena",
    year: 2021,
    director: "Buchi Babu Sana",
    cast: ["Panja Vaisshnav Tej", "Krithi Shetty"],
    emoji: "🌊💘🩸",
    keywords: ["forbidden love", "tragedy"]
  },
  {
    title: "Rudrangi",
    year: 2023,
    director: "Ajay Samrat",
    cast: ["Jagapathi Babu", "Mamta Mohandas"],
    emoji: "🏜️🗡️👑",
    keywords: ["period", "feudal"]
  },
  {
    title: "Vellaiya Irukkaravan Poi Solla Maatan (Telugu Dub) — skip",
    year: 2015,
    director: "",
    cast: [],
    emoji: "🚫",
    keywords: ["placeholder"]
  },
  {
    title: "Kumari 21F",
    year: 2015,
    director: "Palnati Surya Pratap",
    cast: ["Raj Tarun", "Hebah Patel"],
    emoji: "📷💘🌀",
    keywords: ["trust", "jealousy"]
  },
  {
    title: "Surya vs Surya",
    year: 2015,
    director: "Karthik Ghattamneni",
    cast: ["Nikhil Siddhartha", "Tridha Choudhury"],
    emoji: "🌞🚫🌙",
    keywords: ["rare condition", "romance"]
  },
  {
    title: "Kalyana Vaibhogame",
    year: 2016,
    director: "Nandini Reddy",
    cast: ["Naga Shaurya", "Malavika Nair"],
    emoji: "💍🧪😂",
    keywords: ["marriage pact", "rom-com"]
  },
  {
    title: "Mental Madhilo",
    year: 2017,
    director: "Vivek Athreya",
    cast: ["Sree Vishnu", "Nivetha Pethuraj"],
    emoji: "🧠🤯❤️",
    keywords: ["overthinking", "choices"]
  },
  {
    title: "Sammohanam (Art of Love)",
    year: 2018,
    director: "Mohan Krishna Indraganti",
    cast: ["Sudheer Babu", "Aditi Rao Hydari"],
    emoji: "🎬🎨💞",
    keywords: ["celebrity", "boundaries"]
  },
  {
    title: "HIT: The Second Case",
    year: 2022,
    director: "Sailesh Kolanu",
    cast: ["Adivi Sesh", "Meenakshi Chaudhary"],
    emoji: "🧪🕵️‍♂️🩸",
    keywords: ["serial killer", "investigation"]
  },
  {
    title: "RUN (Hotstar Original)",
    year: 2020,
    director: "Lakad Eeshwar",
    cast: ["Navdeep", "Pujita Ponnada"],
    emoji: "🏃‍♂️🩸🧩",
    keywords: ["mystery", "web film"]
  },
  {
    title: "Ratham",
    year: 2023,
    director: "Charan Tej Uppalapati",
    cast: ["Geetanand", "Chandini Rao"],
    emoji: "🩸🗞️⚖️",
    keywords: ["activism", "justice"]
  },
  {
    title: "Anukoni Athidhi (Netrikann Dub) — skip",
    year: 2021,
    director: "",
    cast: [],
    emoji: "🚫",
    keywords: ["placeholder"]
  },
  {
    title: "Katha",
    year: 2009,
    director: "Srinivas Raga",
    cast: ["Genelia D'Souza", "Arun Adith"],
    emoji: "📖🧠🕵️",
    keywords: ["psychological", "thriller"]
  },
  {
    title: "Oka Romantic Crime Katha",
    year: 2012,
    director: "Sudheer Varma Charan Reddy",
    cast: ["Viswant", "Gayathri"],
    emoji: "💘🕵️‍♂️🩸",
    keywords: ["anthology", "crime"]
  },
  {
    title: "Anaganaga O Dheerudu",
    year: 2011,
    director: "Prakash Kovelamudi",
    cast: ["Siddharth", "Shruti Haasan"],
    emoji: "🐉🗡️🧙‍♀️",
    keywords: ["fantasy", "quest"]
  },
  {
    title: "Yuddham Sharanam",
    year: 2017,
    director: "Krishna Marimuthu",
    cast: ["Naga Chaitanya", "Lavanya Tripathi"],
    emoji: "🛠️🕵️‍♂️💥",
    keywords: ["family", "revenge"]
  },
  {
    title: "Rangabali",
    year: 2023,
    director: "Pawan Basamsetti",
    cast: ["Naga Shaurya", "Yukti Thareja"],
    emoji: "🎆🏛️😂",
    keywords: ["village", "festival"]
  },
  {
    title: "Ninnila Ninnila",
    year: 2021,
    director: "Ani I. V. Sasi",
    cast: ["Ashok Selvan", "Ritu Varma"],
    emoji: "🍝👻💘",
    keywords: ["chef", "melancholy"]
  },
  {
    title: "Check",
    year: 2021,
    director: "Chandra Sekhar Yeleti",
    cast: ["Nithiin", "Rakul Preet Singh"],
    emoji: "♟️⛓️🧠",
    keywords: ["chess", "prison"]
  },
  {
    title: "Oke Oka Jeevitham",
    year: 2022,
    director: "Shree Karthick",
    cast: ["Sharwanand", "Ritu Varma"],
    emoji: "🕰️👦👨",
    keywords: ["time travel", "mother"]
  },
  {
    title: "Sita on the Road",
    year: 2021,
    director: "Praneeth Yaron",
    cast: ["Kalki Koechlin", "Khomotso Manyaka"],
    emoji: "🚗👭🛣️",
    keywords: ["women", "road trip", "indie"]
  },
  {
    title: "Gaali Sampath",
    year: 2021,
    director: "Aneesh Krishna",
    cast: ["Rajendra Prasad", "Sree Vishnu"],
    emoji: "🗣️❌🧗",
    keywords: ["speech disability", "bond"]
  },
  {
    title: "Kanulu Kanulanu Dochayante (Telugu Dub) — skip",
    year: 2020,
    director: "",
    cast: [],
    emoji: "🚫",
    keywords: ["placeholder"]
  },
  {
    title: "Thank You Brother!",
    year: 2021,
    director: "Ramesh Raparthi",
    cast: ["Anasuya Bharadwaj", "Viraj Ashwin"],
    emoji: "🛗👶😱",
    keywords: ["elevator", "thriller"]
  },
  {
    title: "47 Days",
    year: 2020,
    director: "Pradeep Maddali",
    cast: ["Satyadev", "Roshini Prakash"],
    emoji: "⏱️🧩🕵️",
    keywords: ["cop", "mystery"]
  },
  {
    title: "Raja Cheyyi Vesthe",
    year: 2016,
    director: "Pradeep Chilukuri",
    cast: ["Nara Rohit", "Isha Talwar"],
    emoji: "✍️🔫🎯",
    keywords: ["writer", "hit"]
  },
  {
    title: "Yuddham Sharanam (Night Chase)",
    year: 2017,
    director: "Krishna Marimuthu",
    cast: ["Naga Chaitanya", "Lavanya Tripathi"],
    emoji: "🌃🏃‍♂️💥",
    keywords: ["thriller", "family"]
  },
  {
    title: "Anando Brahma",
    year: 2017,
    director: "Mahi V Raghav",
    cast: ["Tapsee Pannu", "Srinivasa Reddy"],
    emoji: "👻😂🏚️",
    keywords: ["reverse horror", "fun"]
  },
  {
    title: "Kanche (Love Beyond Borders)",
    year: 2015,
    director: "Krish",
    cast: ["Varun Tej", "Pragya Jaiswal"],
    emoji: "⛓️💘🪖",
    keywords: ["border wall", "period"]
  }
];
