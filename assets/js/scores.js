//score.js will read data from localStorage and display it as a list

let highscores = document.getElementById("highscores");
let highscoresList = document.getElementById("highscores");
let clearHighscores = document.getElementById("clear");
let goBack = document.getElementById("goBack");


let resultsFound = JSON.parse(localStorage.getItem("topScores"));

aTag = document.querySelector(".wrapper a");
aTag.removeAttribute("href");
aTag.setAttribute("id", "goback");


// reading local stored values and adding them to highscoresList
if (resultsFound) {
    resultsFound.forEach(element => {
        let liEl = document.createElement("li");
        liEl.textContent = (Object.keys(element) + " - " + Object.values(element));
        highscoresList.appendChild(liEl);  
    });
        
}


// clear highscores list
clearHighscores = addEventListener("click", () => {    
    localStorage.clear();
    highscores.innerHTML = "";    
    console.log(JSON.parse(localStorage.getItem("topScores")));
    
});


// go back to main page
aTag = addEventListener("click", () => {
    localStorage.setItem('topScores', JSON.stringify(resultsFound));
    document.location.href = 'index.html';

});

