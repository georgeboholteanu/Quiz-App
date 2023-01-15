var questionnaire = [
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
var timeCount = document.getElementById("time");
var startBtn = document.getElementById("start");
var startScr = document.getElementById("start-screen");
var questions = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

var endScr = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var submit = document.getElementById("submit");
var initials = document.getElementById("initials");
var aTag = document.createElement("a");


aTag.setAttribute("href", "highscores.html");
initials.parentNode.insertBefore(aTag, initials.nextSibling);
aTag.appendChild(submit);

// show if the user answer is correct or wrong 
const renderSolution = (answerType) =>{
    var divTag = document.createElement("div");
    var pTag = document.createElement("p");
    var iTag = document.createElement("i");

    questions.appendChild(divTag);
    divTag.appendChild(pTag);
    pTag.appendChild(iTag);
    iTag.innerHTML = answerType;
}   


startBtn.addEventListener("click", function() {
    timeCount.innerHTML = "75";    
    startScr.style.display = "none";    
    questions.style.display = "block";  

    questionTitle.textContent = "Question 1";   

    var score = 0; 
    var index = 0;    
      
    var x = setInterval(function() {
        timeCount.innerHTML = parseInt(timeCount.innerHTML) - 1;
         // If the count down is finished show the score   
         if (timeCount.innerHTML < 1) {
            clearInterval(x); 
            questions.style.display = "none";            
            endScr.style.display = "block";           
        }
    }, 1000);

    // show each set question and answers
    const renderQuestion = () => {

        var item = questionnaire[index];              

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
        var newButtons = document.querySelectorAll('.optBtn');
        
        newButtons.forEach((btn) => {   
            if(btn.innerHTML === item.solution) {
                // btn.style.color = "black";                
                btn.addEventListener("click", function() {  
                    renderSolution("Correct!");            
                    score = parseInt(score) + 10;
                    localStorage.setItem("score", JSON.stringify(score));                       

                });
            }else{
                btn.addEventListener("click", function() {
                    timeCount.innerHTML = parseInt(timeCount.innerHTML) - 10;
                    renderSolution("Wrong!");  
                   
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

    renderQuestion();

}); // end of startEventListener
