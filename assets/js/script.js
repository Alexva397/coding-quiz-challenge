var highscoresButton = document.getElementById("highscores-button");
var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("countdown");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("question-screen");
var questionText = document.getElementById("question-text");
var answerA = document.getElementById("answer-choice-a");
var answerB = document.getElementById("answer-choice-b");
var answerC = document.getElementById("answer-choice-c");
var answerD = document.getElementById("answer-choice-d");
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
var completedQuestions = [];
var questionCount;
var highscores = [];

function highScores() {
    console.log("hello");
}

function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            console.log("game over");

        }
    }, 1000);
}



// function endGameScreen() {
//     var endText = document.createElement()


// }

function generateQuestion() {

    function checkAndRemoveQuestion() {
        for (i = 0; i < quizQuestions.length; i++) {
            if (randomQuestionChoice === quizQuestions[i]) {
                console.log(quizQuestions);
                quizQuestions.splice(quizQuestions[i], i);
                console.log(quizQuestions);
                console.log(quizQuestions.length);
                generateQuestion();
            }
        }
    }

    if (questionCount < quizQuestions.length) {
        var randomQuestionChoice = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];

        questionText.textContent = randomQuestionChoice.question;
        answerA.textContent = randomQuestionChoice.answers.a;
        answerB.textContent = randomQuestionChoice.answers.b;
        answerC.textContent = randomQuestionChoice.answers.c;
        answerD.textContent = randomQuestionChoice.answers.d;
        console.log(randomQuestionChoice);
    } else {
        // endGameScreen();
        return;
    }
        answerA.addEventListener("click", function (event) {
            event.preventDefault();
            if (answerA.textContent.trim() === randomQuestionChoice.correctAnswer) {
                console.log("correct");
                checkAndRemoveQuestion();
            } else {
                timerCount -= 10;
                console.log("incorrect");
            }
        });
        answerB.addEventListener("click", function (event) {
            event.preventDefault();
            if (answerB.textContent.trim() === randomQuestionChoice.correctAnswer) {
                console.log("correct");
                checkAndRemoveQuestion();
            } else {
                timerCount -= 10;
                console.log("incorrect");
            }
        });
        answerC.addEventListener("click", function (event) {
            event.preventDefault();
            if (answerC.textContent.trim() === randomQuestionChoice.correctAnswer) {
                console.log("correct");
                checkAndRemoveQuestion();
            } else {
                timerCount -= 10;
                console.log("incorrect");
            }
        });
        answerD.addEventListener("click", function (event) {
            event.preventDefault();
            if (answerD.textContent.trim() === randomQuestionChoice.correctAnswer) {
                console.log("correct");
                checkAndRemoveQuestion();
            } else {
                timerCount -= 10;
                console.log("incorrect");
            }
        });

    }



    

    // function starts the quiz from the home screen
    function startQuiz() {
        startScreen.classList.add("hide");
        questionScreen.classList.remove("hide");
        // var gameEnd = false;
        questionCount = 0;
        startTimer();
        generateQuestion();
        // if (gameEnd === true) {
        //     endGameScreen();

        // }

    }



    startButton.addEventListener("click", startQuiz);
    highscoresButton.addEventListener("click", highScores);