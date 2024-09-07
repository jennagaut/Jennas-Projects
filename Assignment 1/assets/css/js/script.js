
// this allows you to enter your name so it appears on the screen 
var personName = prompt("Please enter your name", "Guest");

// if the person presses cancel instead of ok, it will still say "guest"

if (personName === null) {
    personName = "Guest"
}

document.getElementById("welcome").innerHTML =
"Welcome " + personName + ",";

//this changes the background color of the header when you mouse over

var headerBackground = document.getElementById ("header");

headerBackground.addEventListener ("mouseover", function () {
    headerBackground.style.backgroundColor = '#273B24';
})

// then this changes the color back to the original when the mouse leaves the box

headerBackground.addEventListener ("mouseout", function () {
    headerBackground.style.backgroundColor = '#384E34';
})

// this does the same thing but with the interests section

var interestsBackground = document.getElementById ("interests");

interestsBackground.addEventListener ("mouseover", function () {
    interestsBackground.style.backgroundColor = '#273B24';
})

interestsBackground.addEventListener ("mouseout", function () {
    interestsBackground.style.backgroundColor = '#384E34';
})

// this makes a typewriter effect in the header when you load the page

var i = 0;
var text = 'Hi, I\'m Jenna Gauthier, here are some facts about me!';
var speed = 50;
var headerButton = document.querySelector (".headerButton");
var headerText = document.getElementById ("headerText");

function typeWriter () {
    headerText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}

document.addEventListener ("DOMContentLoaded", function () {
typeWriter () 
});

// this makes the "welcome guest" phrase change depending on the time of day 

let insertPhrase = document.getElementById("welcome");
var hour = new Date().getHours()

if (hour < 12) {
    insertPhrase.textContent = "Good morning" + ", " + personName;
} else if (hour >= 12 && hour < 17) {
    insertPhrase.textContent = "Good afternoon" + ", " + personName;
} else {
    insertPhrase.textContent = "Good evening" + ", " + personName;
}

