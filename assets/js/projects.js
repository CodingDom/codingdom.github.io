const projectList = [
    {
        name : "Synergy Staffing Solutions",
        desc : "",
        score : 10,
        thumbnail : "https://i.imgur.com/4xmSjGK.png",
        preview : [],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "JQuery", "PHP"],
        url : "http://synstaffing.co/"
    },
    {
        name : "Treasure Quest",
        desc : "",
        score : 6,
        thumbnail : "https://i.imgur.com/fFuAPHU.png",
        preview : [],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "JQuery", "Firebase", "Game Development"],
        url : "https://codingdom.github.io/Treasure-Quest",
        repo : "https://github.com/CodingDom/Treasure-Quest"
    },
    {
        name : "Troll RPG",
        desc : "",
        score : 5.5,
        thumbnail : "https://i.imgur.com/kTWLNKL.png",
        preview : [],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/Troll-RPG",
        repo : "https://github.com/CodingDom/Troll-RPG"
    },
    {
        name : "Shell Game",
        desc : "",
        score : 2.5,
        thumbnail : "https://i.imgur.com/qKPbsH6.png",
        preview : [],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/Shell-Game",
        repo : "https://github.com/CodingDom/Shell-Game"
    },
    {
        name : "Horror Trivia",
        desc : "",
        score : 2.25,
        thumbnail : "https://i.imgur.com/7nyCBEI.png",
        preview : [],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/TriviaGame",
        repo : "https://github.com/CodingDom/TriviaGame"
    },
    {
        name : "Guess The Classic",
        desc : "",
        score : 2,
        thumbnail : "https://i.imgur.com/e32Kgu3.png",
        preview : [],
        tags : ["HTML", "CSS", "JavaScript", "Game Development"],
        repo : "https://github.com/CodingDom/Word-Guess-Game"
    },
    {
        name : "Bamazon",
        desc : "",
        score : 0.25,
        thumbnail : "https://i.imgur.com/HRKjTbV.png",
        preview : [],
        tags : ["JavaScript", "Node JS", "MySQL", "Command Line Application"],
        repo : "https://github.com/CodingDom/CLI-Amazon"
    },
    {
        name : "Constructor Word Guess Game",
        desc : "",
        score : 0.2,
        thumbnail : "https://i.imgur.com/II4lg2i.png",
        preview : [],
        tags : ["JavaScript", "Node JS", "Command Line Application", "Game Development"],
        repo : "https://github.com/CodingDom/Contructor-Word-Guess"
    },
    {
        name : "Liri Bot",
        desc : "",
        score : 0,
        thumbnail : "https://i.imgur.com/PgDM9Ze.png",
        preview : [],
        tags : ["JavaScript", "Node JS", "Command Line Application"],
        repo : "https://github.com/CodingDom/Liri-Bot"
    }
]

projectList.sort(function(a, b){return b.score - a.score});