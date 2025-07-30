document.addEventListener('DOMContentLoaded', postData);
const data = document.location.search;
const params = new URLSearchParams(data);


// object that maps each character in Mario Kart 8 Deluxe 
// to a object with a small description of them,the name of thier respective image, a background color, and a short clip of them on YouTube
const roster = {
    "Mario": {
        "description": "The classic. Mario is a more all-around type charcter and based off your answers (or lack thereof), you are a real all-around movie fan! Let's-a-go!!!",
        "image": "./images/mario.jpg",
        "bg-color": "background-color: rgb(250, 112, 112)",
        "yt-link": "https://youtu.be/V-LCv-jlgbc?list=TLGGYRJ_ETtya8syMTEwMjAyMw"
    },
    "Luigi": {
        "description": "Ah yes, <i>Mario's brother</i>... In all seriousness, you might be a more casual or all-around movie fan. If you're a big fan of Robin from Batman or Chewbacca, then Lugi is perfect for you!",
        "image": "./images/luigi.jpg",
        "bg-color": "background-color: rgb(115, 251, 115)",
        "yt-link": "https://youtu.be/k7-YZLqc650?list=TLGGKA1816334L4yMTEwMjAyMw"
    },
    "Peach": {
        "description": "Barbie? Right. Aside from the fact that they both wear pink, many fans of Disney princess movies would feel right at home playing as Peach! Just make sure to watch out for Bowser...", 
        "image": "./images/peach.jpg",
        "bg-color": "background-color: rgb(255, 192, 203)",
        "yt-link": "https://youtu.be/DatUe6lj2ZA?list=TLGGXvF0nhhbpkgyMTEwMjAyMw"
    },
    "Daisy": {
        "description": "Even though she might look like a princess who sits in a castle all day, she is also one great adventurer. If you like Disney princess movies but also like action packed movies like <i>Top Gun: Maverick</i>, then Daisy is PERFECT for you!", 
        "image": "./images/daisy.jpg",
        "bg-color": "background-color: rgb(244, 211, 150)",
        "yt-link": "https://youtu.be/gYf08WLnMIw?list=TLGGQNX7-3udRAcyMTEwMjAyMw"
    },
    "Rosalina": {
        "description": "If you like movies that take place in the stars, then Rosalina might be good for you! While playing as her, you can pretend to drive to a galaxy far far away...",
        "image": "./images/rosalina.jpg",
        "bg-color": "background-color: rgb(140, 246, 244)",
        "yt-link": "https://youtu.be/UHFaZAxqjBU?list=TLGGI2r2_-MVMWUyMTEwMjAyMw"
    },
    "Bowser": {
        "description": "I bet you love being the villain... In which case Bowser is perfect. Maybe you think the villain from a certain movie was right all along. Maybe you think Dr. Doofenshmirtz was misunderstood. Regardless, this character would be the best match made in villain history. Maybe you can finally one-up Mario on the track!",
        "image": "./images/bowser.jpg",
        "bg-color": "background-color: rgb(119, 4, 4)",
        "yt-link": "https://youtu.be/poc0UmhOT78?list=TLGGsi3PFF42BM4yMTEwMjAyMw"
    },
    "Yoshi": {
        "description": "You seem to LOVE pets. In which case, Yoshi can be your Mario Kart version of Chewbacca or the donkey from Shrek!",
        "image": "./images/yoshi.jpg",
        "bg-color": "background-color: rgb(11, 139, 11)",
        "yt-link": "https://youtu.be/UlBLzY5l1Tg?list=TLGGAj94uSLZhcYyMTEwMjAyMw"
    }
}

// string inside .get has to be the same as the name attribute in the input element it corresponds to
// each variable holds the value attribute from the input element it corresponds to

const userName = params.get('user-name'); // user name
const amount = params.get('amount'); // how much they love space movies
const genres = params.getAll('genres'); // user's favorite movie genre
const characterType = params.get('character-type'); // user's character type
const barbeinheimer = params.get('barbeinheimer'); // user's preference on Barbie or Oppenheimer movie
const place = params.get('place') // user's favorite place
const actor = params.get('actor') // user's favorite actor

// Final Character
let character;
let image;
let description;


// Conditional Logic
if (amount > 5 && (genres.indexOf('space') > -1 || place == "tatooine" || place == "hogwarts")) {
    character = "Rosalina";
} else if (genres.indexOf("princess") > -1 || barbeinheimer  == "barbie" || actor == "a-joy") {
    if (genres.indexOf('action') > -1) {
        character = "Daisy"
    } else {
        character = "Peach"
    }
} else if (characterType == "pets" && genres.indexOf("wholesome") > -1 || place == "snoopy" || barbeinheimer=="none") {
    character = "Yoshi"
} else if (characterType == "hero" || actor == "c-pratt" || barbeinheimer == "both") {
    character = "Mario"
} else if (characterType == "sidekick" || place == "batcave" || actor == "c-day") {
    character = "Luigi"
} else if (characterType == "villain" || genres.indexOf("action") > -1 || actor == "j-black") {
    character = "Bowser"
} else {
    character = "Mario"
}

//  Sets the image and description based on the chosen character
image = roster[character]["image"]
description = roster[character]["description"]
let video = roster[character]["yt-link"]


if (userName.trim() in roster) {
    character = userName.trim();
    image = roster[character]["image"];
    description = roster[character]["description"] + " Also, the name KINDA matches ngl...";
    video = roster[character]["yt-link"];
} 

// easter eggs
if (character == "Mario") {
    console.log("Lets-a-gooo!");
} else if (character == "Luigi") {
    console.log("Hello, Luigi!")
} else if (character == "Rosalina") {
    console.log("Greetings, princess! How are the stars?")
} else if (character == "Peach") {
    console.log("Greetings, princess!")
} else if (character == "Daisy") {
    console.log("Greetings, princess!")
} else if (character == "Bowser") {
    console.log("ROARRR")
} else if (character == "Yoshi") {
    console.log("Yoshi, Yoshi, YOSHI!!!!")
}

if (amount == 10) {
    description += " On a side note you REALLY seem to love space movies... you have good taste :)";
}

// writing html code to results div in results.html
function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `
        <h1>${userName.trim()}, your chosen character is... ${character}!</h1>
        <a href="${video}" target="_blank"><img src="${image}" alt="text"></img></a>
        <p>${description}</p>
        `;
    const body = document.getElementById('body');
    body.style = roster[character]["bg-color"]

    const headerTitle = document.getElementById('header-title')
    headerTitle.style = "background-color: rgb(0, 0, 0)";

    const backBtn = document.getElementById('back-btn');
    backBtn.style.color = body.style.backgroundColor
}

