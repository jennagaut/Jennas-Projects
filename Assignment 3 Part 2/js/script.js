// changing color of the title

// create an array of colors
var colors = ["#C3E8BD","#FFC9B9", "#E2DCFF", "#FFB784"];

var currentIndex = 0;

// create function to change color of title starting at current index, adding one each time
function changeTextColor() {
    var textElement = document.getElementById('title');
    textElement.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// change color every 5000 milliseconds
setInterval(changeTextColor, 5000);

// fish tank and context

// create variable that represents canvas element
var tankCanvas = document.getElementById("tank");

// get the context
var tankContext = tankCanvas.getContext('2d');

// store images

var image1 = new Image(); // built in function to place images
image1.onload = function() { // tried using the on.load function for the website
};
image1.src = "photos/bluefish.png";

var image2 = new Image();
image2.onload = function() {
};
image2.src = "photos/pinkfish.png";

var image3 = new Image();
image3.onload = function() {
};
image3.src = "photos/orangefish.png";

var bubbleImage = new Image();
bubbleImage.onload = function() {
};
bubbleImage.src = "photos/bubble.png";

var coralImage = new Image();
coralImage.onload = function() {
};
coralImage.src = "photos/coral.png";

// specify different positions & speeds for each variable

// width of canvas, position on the y axis, how fast it goes

var blueFish = { x: tankCanvas.width, y: 100, speed: 0.5 };
var pinkFish = { x: tankCanvas.width, y: 400, speed: 0.75 };
var orangeFish = { x: tankCanvas.width, y: 225, speed: 1 };

// position on the y axis, height of canvas, how fast it goes

var bubble1 = { x: 100, y: tankCanvas.height, speed: 0.5 };
var bubble2 = { x: 400, y: tankCanvas.height, speed: 0.3 };
var bubble3 = { x: 600, y: tankCanvas.height, speed: 0.7};
var bubble4 = { x: 125, y: tankCanvas.height, speed: 0.7 };
var bubble5 = { x: 625, y: tankCanvas.height, speed: 0.5};

var coral1 = { x: 100, y: 275 };
var coral2 = {x: 350, y: 275 };

// function to draw the fish & not draw fish if button is clicked

// use true and false to draw/not draw fish
var catchClicked = false;

function drawFish() {

    // clear canvas
    tankContext.clearRect(0, 0, tankCanvas.width, tankCanvas.height);

    // draw fish if button is not clicked
    if (!catchClicked) {
        tankContext.drawImage(image1, blueFish.x, blueFish.y, 100, 50);
        tankContext.drawImage(image2, pinkFish.x, pinkFish.y, 100, 50);
        tankContext.drawImage(image3, orangeFish.x, orangeFish.y, 75, 50);
    } 

    // drawing bubbles
    tankContext.drawImage(bubbleImage, bubble1.x, bubble1.y, 50, 50);

    tankContext.drawImage(bubbleImage, bubble2.x, bubble2.y, 25, 25);

    tankContext.drawImage(bubbleImage, bubble3.x, bubble3.y, 45, 45);

    tankContext.drawImage(bubbleImage, bubble4.x, bubble4.y, 25, 25);

    tankContext.drawImage(bubbleImage, bubble5.x, bubble5.y, 15, 15);

    // drawing corals
    tankContext.drawImage(coralImage, coral1.x, coral1.y, 300, 300);

    tankContext.drawImage(coralImage, coral2.x, coral2.y, 300, 300);

};

// creating a button that removes the fish & adds a 'catch count'

var catchFish = document.getElementById("catch");
var catchCount = document.getElementById("catchCount");

// attach to button
catchFish.addEventListener("click", function (){

    // don't draw fish if button is clicked
    catchClicked = true;

    // display text when clicked
    catchCount.textContent = "Catch Count: 3"
});

// function to animate fish

function animate() {

    // blue fish position & speed
    blueFish.x += blueFish.speed;
    if (blueFish.x > tankCanvas.width) { // fish moves left to right
        blueFish.x = -80; // makes sure fish goes across whole canvas before repeating
    }

    // pink fish position & speed
    pinkFish.x -= pinkFish.speed;
    if (pinkFish.x < -100) { // fish moves right to left
        pinkFish.x = tankCanvas.width;
    }

    // orange fish position & speed
    orangeFish.x -= orangeFish.speed;
    if (orangeFish.x < -80) { // fish moves right to left
        orangeFish.x = tankCanvas.width;
    }

    // bubble 1 position & speed
    bubble1.y -= bubble1.speed;
    if (bubble1.y < -80) {
        bubble1.y = tankCanvas.height;
    }

    bubble2.y -= bubble2.speed;
    if (bubble2.y < -80) {
        bubble2.y = tankCanvas.height;
    }

    bubble3.y -= bubble3.speed;
    if (bubble3.y < -80) {
        bubble3.y = tankCanvas.height;
    }

    bubble4.y -= bubble4.speed;
    if (bubble4.y < -80) {
        bubble4.y = tankCanvas.height;
    }

    bubble5.y -= bubble5.speed;
    if (bubble5.y < -80) {
        bubble5.y = tankCanvas.height;
    }

    // call the functions to start animation
    drawFish();
    requestAnimationFrame(animate);

};

animate();

// creating a button that displays random fun facts every time its clicked

// create array
let information = ["There are over 30,000 species of fish!", "Fish sleep with their eyes open!", "Some fish are able to change colors in order to camouflage", "Fish have great memories!", "Sharks are the only fish that have eyelids", "Most fish can't swim backwards"];

//attach it to button
button.addEventListener("click", function() {

    // using the length of the array, use math random&floor to generate random index #
    var randomInfo = information[Math.floor(information.length * Math.random())];

    // changing the text content to the random info variable
    document.getElementById("information").textContent = randomInfo; 
});

/* tried to make a release button, not sure why it didnt work

var releaseButton = document.getElementById("release");

function releaseFish() {

    blueFish.x = tankCanvas.width;
    pinkFish.x = tankCanvas.width;
    orangeFish.x = tankCanvas.width;

    drawFish();
};

releaseButton.addEventListener("click", function() {
    releaseFish();
});
*/