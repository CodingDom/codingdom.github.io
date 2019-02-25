const projectList = [
    {
        name : "Synergy Staffing",
        desc : "",
        score : 10,
        thumbnail : "https://i.imgur.com/4xmSjGK.png",
        preview : ["https://i.imgur.com/4xmSjGK.png","https://i.imgur.com/ilwxCcK.png","https://i.imgur.com/dwcqEnr.png"],
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
        desc : "Troll RPG is a basic fighting/strategy game based on a war between four tribes. The goal is to conquer the other tribes by defeating their toughest warriors. If attacks aren't planned accordingly then your tribe may wind up on the losing end.",
        score : 5.5,
        thumbnail : "https://i.imgur.com/kTWLNKL.png",
        preview : ["https://i.imgur.com/2bskYBL.png","https://i.imgur.com/kTWLNKL.png","https://i.imgur.com/7zeUF4U.png"],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/Troll-RPG",
        repo : "https://github.com/CodingDom/Troll-RPG"
    },
    {
        name : "Shell Game",
        desc : "",
        score : 2.5,
        thumbnail : "https://i.imgur.com/JiZHubR.png",
        preview : ["https://i.imgur.com/JiZHubR.png","https://i.imgur.com/qKPbsH6.png","https://i.imgur.com/dd6KidY.png"],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/Shell-Game",
        repo : "https://github.com/CodingDom/Shell-Game"
    },
    {
        name : "Horror Trivia",
        desc : `Horror Trivia is a quiz game based on classic horror film series such as "Child's Play". Each question has a set time limit of 30 seconds, along with thriller sound effects and a creepy ambience to set the mood. Once all of the questions are answered, the user is then prompted with their score along with a special surprise at the end for failures..`,
        score : 2.25,
        thumbnail : "https://i.imgur.com/7nyCBEI.png",
        preview : ["https://i.imgur.com/wXqqZY5.png","https://i.imgur.com/sgY15bJ.png","https://i.imgur.com/M7FnMah.png"],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/TriviaGame",
        repo : "https://github.com/CodingDom/TriviaGame"
    },
    {
        name : "Guess The Classic",
        desc : "Guess The Classic is a hangman game based on Michael Jackon's musical catalog. Each round uses a Michael Jackson song from the game's file storage. Upon winning a round, the correctly guessed song will play while displaying it's cover art. The game utilizes an html canvas in order to create the hangman doll's body part for each incorrect guess. Once the body is fully formed, the player loses.",
        score : 2,
        thumbnail : "https://i.imgur.com/e32Kgu3.png",
        preview : [],
        tags : ["HTML", "CSS", "JavaScript", "Game Development"],
        repo : "https://github.com/CodingDom/Word-Guess-Game"
    },
    {
        name : "Bamazon",
        desc : "Bamazon is a command-line application based on amazon's functionality. This tool is uses a MySql and Node Js in order to make purchases, add products, restock inventory, and track sales",
        score : 0.25,
        thumbnail : "https://i.imgur.com/HRKjTbV.png",
        preview : [],
        tags : ["JavaScript", "Node JS", "MySQL", "Command Line Application"],
        repo : "https://github.com/CodingDom/CLI-Amazon"
    },
    {
        name : "Constructor Word Guess Game",
        desc : "Constructor Word Guess is a word guess game built within a command line application. There are a variety of categories to choose from. Along with plenty of words to be guessed for each one.",
        score : 0.2,
        thumbnail : "https://i.imgur.com/II4lg2i.png",
        preview : [],
        tags : ["JavaScript", "Node JS", "Command Line Application", "Game Development"],
        repo : "https://github.com/CodingDom/Contructor-Word-Guess"
    },
    {
        name : "Liri Bot",
        desc : "Liri Bot is a command-line application with a variety of features. This tool is used to perform multiple searches on a variety of interests for entertainment purposes.",
        score : 0,
        thumbnail : "https://i.imgur.com/PgDM9Ze.png",
        preview : [],
        tags : ["JavaScript", "Node JS", "Command Line Application"],
        repo : "https://github.com/CodingDom/Liri-Bot"
    }
]

projectList.sort(function(a, b){return b.score - a.score});