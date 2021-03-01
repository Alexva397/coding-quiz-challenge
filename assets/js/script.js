var highscoresButton = document.getElementById("highscores-button");
var startButton = document.getElementById("start-button");
var timerElement = document.getElementById("countdown");
var quizQuestions = [
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        answers: {
            a: "JavaScript variable names must begin with a letter or the underscore character.",
            b: "JavaScript variable names are case sensitive.",
            c: "Both of the above",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
        answers: {
            a: "local variable",
            b: "global variable",
            c: "Both of the above",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        answers: {
            a: "concat()",
            b: "push()",
            c: "join()",
            d: "splice()"
        },
        correctAnswer: "c"
    },
    {
        question: "CSS is the language we use to...",
        answers: {
            a: "Structure a webpage.",
            b: "Style a webpage.",
            c: "Program the behavior of a webpage.",
            d: "All of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "The basic structure of an HTML document is made up of...",
        answers: {
            a: "Elements",
            b: "Attributes",
            c: "Tags",
            d: "Functions"
        },
        correctAnswer: "a"
    },
    {
        question: "What special character is used to identify an ID?",
        answers: {
            a: "$",
            b: "!",
            c: "#",
            d: "*"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax for linking a external JavaScript file called script.js?",
        answers: {
            a: "<script ref='script.js'>",
            b: "<script href='script.js'>",
            c: "<script link='script.js'>",
            d: "<script src='script.js'>"
        },
        correctAnswer: "d"
    },
];
var timer;
var timerCount = 50;
var completedQuestions = [];

function highScores() {
    console.log("hello");
}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
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




function randomQuestion() {
   var randomQuestionChoice = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
   console.log(randomQuestionChoice);
}
// function starts starts the quiz from the home screen
function startQuiz() {
    randomQuestion();
    startTimer();
}




startButton.addEventListener("click", startQuiz);


highscoresButton.addEventListener("click", highScores);