const projectList = [
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
        name : "Synergy Staffing Solutions",
        desc : "",
        score : 6,
        thumbnail : "https://i.imgur.com/4xmSjGK.png",
        preview : [],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "PHP"],
        url : "http://synstaffing.co/"
    },
    {
        name : "Troll RPG",
        desc : "",
        score : 5,
        thumbnail : "https://i.imgur.com/kTWLNKL.png",
        preview : [],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/Troll-RPG",
        repo : "https://github.com/CodingDom/Troll-RPG"
    },
    {
        name : "Shell Game",
        desc : "",
        score : 4,
        thumbnail : "https://i.imgur.com/qKPbsH6.png",
        preview : [],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/Shell-Game",
        repo : "https://github.com/CodingDom/Shell-Game"
    },
    {
        name : "Horror Trivia",
        desc : "",
        score : 3,
        thumbnail : "https://i.imgur.com/7nyCBEI.png",
        preview : [],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/TriviaGame",
        repo : "https://github.com/CodingDom/TriviaGame"
    }
]

projectList.sort(function(a, b){return b.score - a.score});