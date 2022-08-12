var timeEl = document.querySelector(".timer-text");
var secondsLeft = 60;
var questionEl = document.getElementById("questions-text");
var button = document.querySelector("button");
var score = 0;

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
        "At the bottom, under the body",
        "We do not link it on HTML",
        "Before the CSS link.",
    ],
    correctAnswer: "At the bottom, under the body",
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
{
    question: "Which tag do we use to tag Javascript on HTML?",
   answers: [ "<j></j>",
    "<javascript></javascript>",
    "<java></java>",
    "<script></script>",
],

correctAnswer: "<script></script>",
},
]
console.log(questions[0].answers);

startBtn.addEventListener("click", function () {
    var timer = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining ";
        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("Time's Up! Game Over!!");
        }
    }, 1000);
    startQuiz()
})
var questionIndex = 0;

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
   console.log(currentAnswer);
   console.log(correctAnswer);
    if (correctAnswer===currentAnswer){
        console.log("correct");
        score++;
    } else {
        console.log("incorrect");
        secondsLeft-=15;
    }
    questionIndex++;
    if (questionIndex> questions.length){
// function for ending game and ending score display
    }
    else{
    renderQuestion();
    }
}


