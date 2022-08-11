var timeEl = document.querySelector(".timer-text");
var secondsLeft = 60;
var questionEl = document.getElementById("questions-text");
var button = document.querySelector("button");


var losePoints = 0;

var startBtn = document.querySelector(".start-button");
var questions = [
    {
        question: "What is Javascript?",
       answers: [
        "A scripting language.",
        "A social media site.",
        "A Google font.",
        "A music application.",
       ],
       correctAnswer: "A scripting language.",
        
    },
    {
        question: "Where in the HTML do we link Javascript?",
        answers: [ "On the first line",
        "At the bottom",
        "We do not link it on HTML",
        "Before the CSS link.",
    ],
    correctAnswer: "At the bottom",
    },
    {
        question: "Where do we see console.log appear?",
       answers: [ "On the CSS.",
        "On the HTML sheet.",
        "In the console of the website.",
        "Nowhere",
    ],
    
    correctAnswer: "In the console of the website.",
},
]
console.log(questions[0].answers);

startBtn.addEventListener("click", function () {
    var timer = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining ";
        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("Game Over!!");
        }
    }, 1000);
    startQuiz()
})
let questionIndex = 0;

function startQuiz() {
    renderQuestion()
  }
        
function renderQuestion(){
    var currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;
    answers.innerHTML = "";
    for (let index=0;index<currentQuestion.answers.length; index++){
        var button = document.createElement("button");
        button.textContent = currentQuestion.answers[index];
        button.addEventListener("click", function (){ userAnswer (currentQuestion.answers[index]) });
        answers.appendChild(button); 
    }
  
}
function userAnswer(correctAnswer){
    var currentAnswer = questions[questionIndex].correctAnswer;
    if (correctAnswer===currentAnswer){
    console.log("correct");
    }else {
    console.log("incorrect");
    questionIndex++;
    renderQuestion();
    secondsLeft -=15;
    }
}

