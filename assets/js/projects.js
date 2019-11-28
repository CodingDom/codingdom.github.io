const oldProjectList = [
    {
        name : "Glam Me",
        desc : "Glam Me is an on-call beauty service that offers licensed technicians to the masses, created by using a MERN Stack.",
        score : 20,
        thumbnail : "https://i.imgur.com/fxXjxfT.png",
        preview : ["https://i.imgur.com/fxXjxfT.png","https://i.imgur.com/K20TzIM.png","https://i.imgur.com/DOyZkbw.png"],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "JQuery", "Node JS", "Express JS", "React JS", "NoSQL", "MongoDB"],
        url : "https://glamme.herokuapp.com/",
        repo : "https://github.com/CodingDom/Glam-Me"
    },
    {
        name : "Code Red",
        desc : "Code Red is a web based app that is a one stop coding/programming resource. Users can search through Youtube, Reddit and Stack Overflow to answer any questions they have in regards to coding.",
        score : 15,
        thumbnail : "https://i.imgur.com/Ift1XO2.png",
        preview : ["https://i.imgur.com/Ift1XO2.png"],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "JQuery", "Node JS", "Express JS", "Express Handlebars", "MySQL"],
        url : "https://rocky-ravine-34618.herokuapp.com/login",
        repo : "https://github.com/CodingDom/Code-Red"
    },
    {
        name : "Synergy Staffing",
        desc : "Synergy Staffing Solutions needed a landing page developed in order to advertise their services to a wider audience.",
        score : 10,
        thumbnail : "https://i.imgur.com/4xmSjGK.png",
        preview : ["https://i.imgur.com/4xmSjGK.png","https://i.imgur.com/ilwxCcK.png","https://i.imgur.com/dwcqEnr.png"],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "JQuery", "PHP"],
        url : "http://synstaffing.co/"
    },
    {
        name : "Treasure Quest",
        desc : "Treasure Quest is a game for hunting hidden treasures along with friends. Take a picture of an object in a park along with some clues to have your friends try and figure out what the hidden treasure is.",
        score : 6.5,
        thumbnail : "https://i.imgur.com/fFuAPHU.png",
        preview : [],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "JQuery", "Firebase", "Game Development"],
        url : "https://codingdom.github.io/Treasure-Quest",
        repo : "https://github.com/CodingDom/Treasure-Quest"
    },
    {
        name : "Lion King Memory Game",
        desc : "This React based web application is meant to test your memorization skills in fun way by checking if you can maintain the order in which you have selected your favorite Lion King characters.",
        score : 6,
        thumbnail : "https://i.imgur.com/4hPCooV.png",
        preview : ["https://i.imgur.com/u5bSRCy.png"],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "Node JS", "React JS", "Game Development"],
        url : "https://codingdom.github.io/Memory-Game",
        repo : "https://github.com/CodingDom/Memory-Game"
    },
    {
        name : "Friend Finder",
        desc : "Friend Finder is a friend matchingmaking web application. After taking a brief survey the user is prompted with their most compatible friend along with how closely matched the two are.",
        score : 5.75,
        thumbnail : "https://i.imgur.com/SJX5bBL.png",
        preview : ["https://i.imgur.com/SJX5bBL.png","https://i.imgur.com/n1kuCMk.png","https://i.imgur.com/zBlNChS.png"],
        tags : ["HTML","CSS", "Materialize","JavaScript", "JQuery", "Node JS", "Express JS"],
        url : "https://dom-friend-finder.herokuapp.com",
        repo : "https://github.com/CodingDom/Friend-Finder"
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
        desc : "The Shell Game is a classic eye coordination/memory game. Users place bets then try to guess which shell has the pearl in it.",
        score : 2.5,
        thumbnail : "https://i.imgur.com/JiZHubR.png",
        preview : ["https://i.imgur.com/JiZHubR.png","https://i.imgur.com/qKPbsH6.png","https://i.imgur.com/dd6KidY.png"],
        tags : ["HTML","CSS","JavaScript", "Game Development"],
        url : "https://codingdom.github.io/Shell-Game",
        repo : "https://github.com/CodingDom/Shell-Game"
    },
    {
        name : "Cookie Eater",
        desc : "Cookie Eater is a DataBase Interface/CRUD application made for storing information on cookie consumption.",
        score : 2.3,
        thumbnail : "https://i.imgur.com/yam0zkd.png",
        preview : ["https://i.imgur.com/yam0zkd.png","https://i.imgur.com/rYf3jv3.png","https://i.imgur.com/rzenpEv.png"],
        tags : ["HTML","CSS", "Bootstrap","JavaScript", "JQuery", "Node JS", "MySQL"],
        url : "https://cookie-eater.herokuapp.com",
        repo : "https://github.com/CodingDom/Cookie-Eater"
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