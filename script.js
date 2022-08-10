var timeEl = document.querySelector(".timer-text");
var secondsLeft = 60;
var questionEl = document.getElementById("questions");
// var answerEl = document.getElementById("answers");
var buttonEl1 = document.getElementById("button1");
var buttonEl2 = document.getElementById("button2");
var buttonEl3 = document.getElementById("button3");
var buttonEl4 = document.getElementById("button4");
var losePoints = 0;

var startBtn = document.querySelector(".start-button");
var questions = [
    {
        question: "What is Javascript?",
        answers1: "A scripting language.",
        answers2: "A social media site.",
        answers3: "An HTML tag.",
        answers4: "A CSS design feature.",
        correctAnswer: "A scripting language.",
    },
    {
        question: "What is HTML?",
        answers1: "a1",
        answers2: "a2",
        answers3: "a3",
        answers4: "a4",
        correctAnswer: "a1",
    },
    {
        question: "what is Javascript?",
        answers1: "a1",
        answers2: "a2",
        answers3: "a3",
        answers4: "a4",
        correctAnswer: "a1",
    },
]
console.log(questions[0].answers);

startBtn.addEventListener("click", function () {
    var timer = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining ";
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
    startQuiz()
})

// buttonEl1.textContent = questions[0].answers1;

function startQuiz() {
    console.log(questions[0].answers1);
   

    // console.log(answers);
    for (var i = 0; i < questions.length; i++){
    if (questionEl.textContent = questions[0].question);
    buttonEl1.textContent = questions[0].answers1;
    buttonEl2.textContent = questions[0].answers2;
    buttonEl3.textContent = questions[0].answers3;
    buttonEl4.textContent = questions[0].answers4;
    // answerEl.textContent = questions[0].answers;
       // if (answers2 || answers3 || answers4){
        // losePoints = 
    if (questionEl.textContent = questions[1].question);
            buttonEl1.textContent = questions[0].answers1;
            buttonEl2.textContent = questions[0].answers2;
            buttonEl3.textContent = questions[0].answers3;
            buttonEl4.textContent = questions[0].answers4;   

    }    
}
function renderquestion(){

}

    // loop through the answrrs array and display those answers 
    //asnwers have to be input elements or  buttons so we can record them. after we get those elements we want some way to check for the right answer,and display right or wrong. display score at end.
    //

    // loop over the answers. we have buttons created in the html already. need to write if else statement : if the answer1 equals correct answer then add 5 points, else subtract 5 seconds time. Next : move to next question.
    // need to find way to keep score and display at end. create element starting at 0 and add 5 if click correct answer 


