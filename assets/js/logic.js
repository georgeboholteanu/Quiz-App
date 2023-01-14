var timeCount = document.getElementById("time");
var startBtn = document.getElementById("start");
var startScr = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var reply = document.createElement("p");
var replyIt = document.createElement("i");
var hr = document.createElement("hr");
replyIt.style.color = "grey";

var questionare = {
    item1: {
        question: "Commonly used data types DO NOT include:",
        answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        solution: "3. alerts"
    },
    item2:{
        question: "The condition in an if / else statement is enclosed within _____.",
        answer: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        solution: "3. parentheses"
    },
    item3:{
        question: "Arrays in JavaScript can be used to store _____.",
        answer: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        solution: "4. all of the above"
    },
    item4:{
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer: ["1. commas", "1. curly brackets", "3. quotes", "4. parentheses"],
        solution: "3. quotes"
    },
    item5:{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        solution: "4. console.log"
    }
}


startBtn.addEventListener("click", function() {

    timeCount.innerHTML = "75";
    startScr.style.display = "none";    
    questions.style.display = "block";

    // create questions dinamicaly 
    // var items = Object.keys(questionare);   

        questionTitle.textContent = questionare.item1.question;

        questionare.item1.answer.forEach(element => {
            var btn = document.createElement("button");           
            btn.textContent = element;
            choices.appendChild(btn);

            btn.addEventListener("click", function() {
                //show result
                if (element === questionare.item1.solution) { 
                    choices.appendChild(hr)    
                    reply.appendChild(replyIt); 
                    choices.appendChild(reply);               
                    replyIt.textContent = "Correct!";                               
                }else {
                    choices.appendChild(hr)
                    reply.appendChild(replyIt);
                    choices.appendChild(reply);  
                    replyIt.textContent = "Wrong!";
                }
            });          
       
    });

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
