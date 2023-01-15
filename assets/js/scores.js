let highscores = document.getElementById("highscores");
let highscoresList = document.getElementById("highscores");
let clearHighscores = document.getElementById("clear");


// reading local stored values and adding them to highscoresList
const renderHighscores = () => {
    let resultsFound = JSON.parse(localStorage.getItem("topScores"));
    console.log(resultsFound);

    if (resultsFound) {
        resultsFound.forEach(element => {
            let liEl = document.createElement("li");
            liEl.textContent = (Object.keys(element) + " - " + Object.values(element));
            highscoresList.appendChild(liEl);  
        });
          
    }else{
        console.log("No users found!"); 
        return           
    }    
}

// clear highscores list
clearHighscores = addEventListener("click", () => {    
    localStorage.clear();
    highscores.innerHTML = "";
});

renderHighscores();
