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
var questionCount;
var randomQuestionChoice;



function highScores() {
    console.log("hello");
}




function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        // Tests if time has run out
        if (timerCount <= 0) {
            // Clears interval
            clearInterval(timer);
            timerElement.textContent = "0";
            console.log("game over");
            endGameScreen

        }
    }, 1000);
}


// /**
//  * Randomly shuffle an array
//  * https://stackoverflow.com/a/2450976/1293256
//  * @param  {Array} array The array to shuffle
//  * @return {String}      The first item in the shuffled array
//  */
// var shuffle = function (array) {

// 	var currentIndex = array.length;
// 	var temporaryValue, randomIndex;

// 	// While there remain elements to shuffle...
// 	while (0 !== currentIndex) {
// 		// Pick a remaining element...
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		// And swap it with the current element.
// 		temporaryValue = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = temporaryValue;
// 	}

// 	return array;

// };





// function generateQuestion() {
//     var shuffledQuestions = shuffle(quizQuestions);
//     console.log(shuffledQuestions);
//     for (i = 0; i < shuffledQuestions.length; i++) {
        
//         questionText.textContent = shuffledQuestions[i].question;
//         answerA.textContent = shuffledQuestions[i].answers.a;
//         answerB.textContent = shuffledQuestions[i].answers.b;
//         answerC.textContent = shuffledQuestions[i].answers.c;
//         answerD.textContent = shuffledQuestions[i].answers.d;
//         console.log(shuffledQuestions[i].correctAnswer);

        
//         answerA.addEventListener("click", confirmAnswerAndNewQuestion);
//         answerB.addEventListener("click", confirmAnswerAndNewQuestion);
//         answerC.addEventListener("click", confirmAnswerAndNewQuestion);
//         answerD.addEventListener("click", confirmAnswerAndNewQuestion);
//         }

//         function confirmAnswerAndNewQuestion(event) {
            
//             var userChoice = event.target.textContent;
//             if (userChoice != shuffledQuestions[i].correctAnswer) {
//                 timerCount -= 10;
//                 console.log("incorrect");
//                 rightWrong.textContent = "Wrong!"
//             } 
//             else {
//                 console.log("correct");
//                 console.log(shuffledQuestions[i]);
//                 rightWrong.textContent = "Right!"
//                 return;
//             }
//     }
//     // var score = timerElement.textContent;
//     // console.log(score);
//     // clearInterval(timer);
//     // endGameScreen();
    
// }


function generateQuestion() {
    if (questionCount < quizQuestions.length) {
        var randomQuestionChoice = Math.floor(Math.random() * quizQuestions.length);

        questionText.textContent = quizQuestions[randomQuestionChoice].question;
        answerA.textContent = quizQuestions[randomQuestionChoice].answers.a;
        answerB.textContent = quizQuestions[randomQuestionChoice].answers.b;
        answerC.textContent = quizQuestions[randomQuestionChoice].answers.c;
        answerD.textContent = quizQuestions[randomQuestionChoice].answers.d;   
    } 
    else if (questionCount >= quizQuestions.length) {
        var score = timerElement.textContent;
        console.log(score);
        clearInterval(timer);
        endGameScreen();
    }
}


function confirmAnswerAndNewQuestion(event) {
    var userChoice = event.target.textContent;
    if (userChoice != quizQuestions[randomQuestionChoice].correctAnswer) {
        timerCount -= 10;
        console.log("incorrect");
    } 
    else {
        console.log("correct");
        quizQuestions.splice(randomQuestionChoice, 1);
        generateQuestion();
    }
}


function endGameScreen() {
    questionScreen.classList.add("hide");
    if (quizQuestions.length === 0); {
        endScreen.classList.remove("hide");
    console.log("You Cheeky Bastard");
    }
}


// function starts the quiz from the home screen
function startQuiz() {
    startScreen.classList.add("hide");
    questionScreen.classList.remove("hide");
    questionCount = 0;
    startTimer();
    generateQuestion();
}



startButton.addEventListener("click", startQuiz);
highscoresButton.addEventListener("click", highScores);


answerA.addEventListener("click", confirmAnswerAndNewQuestion);
answerB.addEventListener("click", confirmAnswerAndNewQuestion);
answerC.addEventListener("click", confirmAnswerAndNewQuestion);
answerD.addEventListener("click", confirmAnswerAndNewQuestion);




