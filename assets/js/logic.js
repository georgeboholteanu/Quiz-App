var timeCount = document.getElementById("time");
var startBtn = document.getElementById("start");
var startScr = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

var questionare = {
    item1: {
        question: "Commonly used data types DO NOT include:",
        answer: ["strings", "booleans", "alerts", "numbers"],
        solution: "alerts"
    },
    item2:{
        question: "The condition in an if / else statement is enclosed within _____.",
        answer: ["quotes", "curly brackets", "parentheses", "square brackets"],
        solution: "parentheses"
    },
    item3:{
        question: "Arrays in JavaScript can be used to store _____.",
        answer: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        solution: "all of the above"
    },
    item4:{
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer: ["commas", "curly brackets", "quotes", "parentheses"],
        solution: "quotes"
    },
    item5:{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        solution: "console.log"
    }
}


startBtn.addEventListener("click", function() {

    timeCount.innerHTML = "75";
    startScr.style.display = "none";    
    questions.style.display = "block";

    // create questions dinamicaly 

    questionTitle.textContent = questionare.item1.question;

    var answerList = document.createElement("ol");
    questions.appendChild(answerList);

    questionare.item1.answer.forEach(element => {
        var liEl = document.createElement("li");
        var liBtn = document.createElement("button");
        liBtn.textContent = element;
        answerList.appendChild(liEl);
        liEl.appendChild(liBtn);
    });
    
    console.log(questionTitle.innerHTML);    
    
});


// set the timer variable
// define the questions and answers



// on button start clicked 
    //  run a loop through all the questions -- while timer !==0
        // start timer
        // create a container with the question and answers
        // create a button for each answer
        // for each button answer have an action and score assigned to it
        // if correct answer is picked 
                // create a new span confirming result 
                // store result to localStorage
                // go to next question
        // else 
            // create a new span confirming result
            //  reducing 10 from timer variable 
            //  store result to localStorage
            //  go to next question
        
        // all done introduce you initials in to a field
        // store initials to localStorage

    // else 
        // quizz ends showing a message
        // create the html of the high score with JS from LocalStorage
