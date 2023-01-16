const questionnaire = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        solution: "3. alerts"
    },{
        question: "The condition in an if / else statement is enclosed within _____.",
        options: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        solution: "3. parentheses"
    },{
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        solution: "4. all of the above"
    },{
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        solution: "3. quotes"
    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        solution: "4. console.log"
    }
]
let timeCount = document.getElementById("time");
let startBtn = document.getElementById("start");
let startScr = document.getElementById("start-screen");
let questions = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let endScr = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");
let submit = document.getElementById("submit");
let initials = document.getElementById("initials");
let feedback = document.getElementById("feedback");

let aTag = document.createElement("a");
let hr = document.createElement("hr");
let pTag = document.createElement("p");
let iTag = document.createElement("i");

aTag.setAttribute("href", "highscores.html");
initials.parentNode.insertBefore(aTag, initials.nextSibling);
aTag.appendChild(submit);
feedback.appendChild(pTag);
pTag.appendChild(iTag);

let score = 0; 
let index = 0;  


// play audio after answer is selected
function playSound(){
    let audioCorrect = new Audio("./assets/sfx/correct.wav");
    let audioIncorrect = new Audio("./assets/sfx/incorrect.wav");
    if (iTag.innerHTML == "Correct!"){
        audioCorrect.play();
    } else {
        audioIncorrect.play();
    }
}


// show if the user answer is correct or wrong 
const renderSolution = (answerType) => {    
    iTag.innerHTML = answerType;
};   
 
  
// let x = setInterval(function() {
//     timeCount.innerHTML = parseInt(timeCount.innerHTML) - 1;
//      // If the count down is finished show the score   
//      if (timeCount.innerHTML < 1) {
//         clearInterval(x); 
//         questions.style.display = "none";            
//         endScr.style.display = "block";           
//     }
// }, 1000);

// show each set question and answers


const renderQuestion = () => {

    let item = questionnaire[index];              

    // Clean-up since we are removing the DOM
    removeClickListener(questions.querySelector('.optBtn'), handleNext);
    
    questions.innerHTML = `
        <h2 id="question-title">${item.question}</h2>
        <div id="choices" class="choices">
        <button class="optBtn">${item.options[0]}</button>
        <button class="optBtn">${item.options[1]}</button>
        <button class="optBtn">${item.options[2]}</button>      
        <button class="optBtn">${item.options[3]}</button>      
        </div>
    `;

    // Re-associate the listener
    let newButtons = document.querySelectorAll('.optBtn');
    
    newButtons.forEach((btn) => {   
        if(btn.innerHTML === item.solution) {
            // btn.style.color = "black";                
            btn.addEventListener("click", function() { 
                feedback.style.display = "block";
                renderSolution("Correct!");            
                score = parseInt(score) + 10;
                localStorage.setItem("score", JSON.stringify(score));                       
                playSound();
                
            });
        }else{
            btn.addEventListener("click", function() {
                timeCount.innerHTML = parseInt(timeCount.innerHTML) - 10;
                feedback.style.display = "block";
                renderSolution("Wrong!");  
                playSound();

            }); 
        }         
        addClickListener(btn, handleNext);                        
                 
    });       
    
}

const addClickListener = (btn, listener) => {
    if (btn) {
        btn.addEventListener('click', listener);
    }
};

const removeClickListener = (btn, listener) => {
if (btn) btn.removeEventListener('click', listener);
};

const handleNext = e => {
    e.preventDefault();        

    if (index < questionnaire.length - 1) {
        index++;
        renderQuestion();
    } else {// in case there are no more questions

        questions.style.display = 'none';
        endScr.style.display = 'block';   
        finalScore.textContent = score;
        var timeNow = timeCount.innerHTML;
        clearInterval(x); 
        timeCount.innerHTML = timeNow;   
               
    }        
};

// add click event to SUMBIT button
submit.addEventListener("click", function(event) {
    event.preventDefault();
          
    let user = {};
    let userName = initials.value.trim();
    user[userName] = score;
    
    // store existing highscores to array
    var storedValues = JSON.parse(localStorage.getItem("topScores"));

    // append current user to array
    if (storedValues === null){
        storedValues = [];
        storedValues.push(user);
        localStorage.setItem("topScores", JSON.stringify(storedValues));  
    }else{
        storedValues.push(user);
        localStorage.setItem("topScores", JSON.stringify(storedValues));  
    }     
    console.log(JSON.parse(localStorage.getItem("topScores")));

    document.location.href = 'highscores.html';        

});


startBtn.addEventListener("click", function() {
    timeCount.innerHTML = "75";    
    startScr.style.display = "none";    
    questions.style.display = "block";   

    renderQuestion();

}); // end of startEventListener


