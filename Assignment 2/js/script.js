
/* create an array of answers */

var answers = ["yes!", "no!", "no way!", "absolutely!", "certainly!", "maybe...", "most likely", "don't count on it", "definitley not"];

/* get 'ask' button */

var button = document.getElementById("ask");

/* styling the ask button */

button.addEventListener("mouseover", function(){
        button.style.color = "#FFC248";
    });

button.addEventListener("mouseout", function(){
        button.style.color = "";
    });

/* create a function to generate a random response from the array of answers */

function generate(){
        var randomAnswerIndex = Math.floor(Math.random() * answers.length);
        var randomAnswer = answers[randomAnswerIndex];
        document.querySelector(".answer").textContent = randomAnswer;
    };

/* load the generate function when you press the 'ask' button 
& use if/else statments to generate specific responses */

button.addEventListener("click", function(){

    var textBox = document.getElementById("textBox");
    var answer = document.querySelector(".answer");
    var questionAsked = textBox.value;

/* creating a loop that displays the word "thinking" before the answer is revealed */

    var loading = "thinking";

    for (i = 0; i < 10; i++) {
        setTimeout(function() {
        loading += ".";
        answer.textContent = loading;
        }, i * 300);
    };

    setTimeout(function() {
        if (questionAsked === "") {
            answer.textContent = "please ask a question";
        } else if (questionAsked.length > 35) {
            answer.textContent = "hmm, that might be too complicated for me";
        } else {
            generate();
        }
    }, 10 * 300);
});

/* make the text box go blank after you press the 'ask' button */

function blankText () {
    textBox.value = "";
}

/* load the blankText function when the 'ask' button is pressed */
    
button.addEventListener("click", function () {
    blankText();
});

/* create a 'reset' button function */

function reset(){
    document.querySelector(".answer").textContent = "";
};

var resetButton = document.querySelector(".reset");

/* styling the reset button */

resetButton.addEventListener("mouseover", function(){
    resetButton.style.color = "#FFC248";
});

resetButton.addEventListener("mouseout", function() {
    resetButton.style.color = "";
 })

/* load the reset function every time the 'reset' button is clicked */

resetButton.addEventListener("click", function(){
    reset();
});






