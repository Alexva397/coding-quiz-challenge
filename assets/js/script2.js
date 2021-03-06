var highscoresButton = document.getElementById("highscores-button");
var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("countdown");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("question-screen");
var endScreen = document.getElementById("end-screen");
var timesUp = document.getElementById("time-is-up");
var highscoreScreen = document.getElementById("highscore-screen");
var questionText = document.getElementById("question-text");
var answerA = document.getElementById("answer-choice-a");
var answerB = document.getElementById("answer-choice-b");
var answerC = document.getElementById("answer-choice-c");
var answerD = document.getElementById("answer-choice-d");
var rightWrong = document.getElementById("right-wrong");
var tryAgain = document.getElementById("restart");
var scoreElement = document.getElementById("score");
var initalsInput = document.getElementById("initials");
var submitScoreButton = document.getElementById("submit-score")
var quizQuestions = [
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        answers: {
            a: "JavaScript variable names must begin with a letter or the underscore character.",
            b: "JavaScript variable names are case sensitive.",
            c: "Both of the above",
            d: "None of the above"
        },
        correctAnswer: "Both of the above"
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        answers: {
            a: "local variable",
            b: "global variable",
            c: "Both of the above",
            d: "None of the above"
        },
        correctAnswer: "global variable"
    },
    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        answers: {
            a: "concat()",
            b: "push()",
            c: "join()",
            d: "splice()"
        },
        correctAnswer: "join()"
    },
    {
        question: "CSS is the language we use to...",
        answers: {
            a: "Structure a webpage.",
            b: "Style a webpage.",
            c: "Program the behavior of a webpage.",
            d: "All of the above"
        },
        correctAnswer: "Style a webpage."
    },
    {
        question: "The basic structure of an HTML document is made up of...",
        answers: {
            a: "Elements",
            b: "Attributes",
            c: "Tags",
            d: "Functions"
        },
        correctAnswer: "Elements"
    },
    {
        question: "What special character is used to identify an ID?",
        answers: {
            a: "$",
            b: "!",
            c: "#",
            d: "*"
        },
        correctAnswer: "#"
    },
    {
        question: "What is the correct syntax for linking a external JavaScript file called script.js?",
        answers: {
            a: "<script ref='script.js'>",
            b: "<script href='script.js'>",
            c: "<script link='script.js'>",
            d: "<script src='script.js'>"
        },
        correctAnswer: "<script src='script.js'>"
    },
];
var timer;
var timerCount = 50;
var questionCount;
var randomQuestionChoice;
var score;
var allHighScores = [];
var storedHighScores;

function getHighscores() {
    var storedHighscores = JSON.parse(localStorage.getItem("userScore"));
    if (storedHighscores.length > 0) {
       allHighScores = storedHighScores;
     }
};


// Start quiz upon button click
function startQuiz() {
    // hide start screen
    startScreen.classList.add("hide");
    // show quiz content screen
    questionScreen.classList.remove("hide"); 
    questionCount = 0;
    startTimer();
    generateQuestion();
}

// Timer
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        // conditional to check if time has run out
        if (timerCount <= 0) {
            // Clears interval
            clearInterval(timer);
            timerElement.textContent = "0";
            console.log("game over");
            endGameScreen();

        }
    }, 1000);
}




// Function to generate each new question and call end screen function
function generateQuestion() {
    rightWrong.textContent = "";
    if (questionCount < quizQuestions.length) {
        randomQuestionChoice = Math.floor(Math.random() * quizQuestions.length);

        questionText.textContent = quizQuestions[randomQuestionChoice].question;
        answerA.textContent = quizQuestions[randomQuestionChoice].answers.a;
        answerB.textContent = quizQuestions[randomQuestionChoice].answers.b;
        answerC.textContent = quizQuestions[randomQuestionChoice].answers.c;
        answerD.textContent = quizQuestions[randomQuestionChoice].answers.d;
    } 
    else if (questionCount >= quizQuestions.length) {
        window.score = timerElement.textContent;
        console.log(score);
        clearInterval(timer);
        endGameScreen();
    }
}


// Function to check user input right/wrong and generate next question
function confirmAnswerAndNewQuestion(event) {
    var userChoice = event.target.textContent;
    if (userChoice != quizQuestions[randomQuestionChoice].correctAnswer) {
        timerCount -= 10;
        console.log("incorrect");
        rightWrong.textContent = "Wrong!";
    } 
    else {
        console.log("correct");
        quizQuestions.splice(randomQuestionChoice, 1);
        console.log(quizQuestions.length);
        rightWrong.textContent = "Right!";
        generateQuestion();
    }
    
}

// Function for the end of game screen and stores user input
function endGameScreen() {
    questionScreen.classList.add("hide");
    if (quizQuestions.length === 0) {
        endScreen.classList.remove("hide");
        scoreElement.textContent = ("Score: " + score);
        submitScoreButton.addEventListener("click", function(event) {
            event.preventDefault();
            var userScore = {
                initials: initalsInput.value.trim(),
                score: score.textContent
            };
        allHighScores.push(userScore);
        localStorage.setItem("userScore", JSON.stringify(allHighScores));
        endScreen.classList.add("hide");
        highscoresScreen();
        });
        
    } else {
        timesUp.classList.remove("hide");
        console.log("times up");
        tryAgain.addEventListener("click", function() {
            location.reload();
        })
    }
}

// Highscores screen, displayed after user input or upon button click
function highscoresScreen() {
    highscoreScreen.classList.remove("hide");
    getHighscores();

};



// Navigates to highscores screen
highscoresButton.addEventListener("click", function(event) {
    event.preventDefault();
    startScreen.classList.add("hide");
    highscoresScreen();
});

// Event listeners for various buttons within quiz
startButton.addEventListener("click", startQuiz);

answerA.addEventListener("click", confirmAnswerAndNewQuestion);
answerB.addEventListener("click", confirmAnswerAndNewQuestion);
answerC.addEventListener("click", confirmAnswerAndNewQuestion);
answerD.addEventListener("click", confirmAnswerAndNewQuestion);


// undefined @ endscreen
// try again button @ times up screen
// right displaying when correct answer selected
// storing local object, not taking score input
//  times up screen wont reset timer

// What if the try again button refreashed browser??
