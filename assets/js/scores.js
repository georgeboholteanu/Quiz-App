var resultsFound = JSON.parse(localStorage.getItem("highscores"));
var highscoresList = document.getElementById("highscores");
var clearHighscores = document.getElementById("clear");


// reading local stored values and adding them to highscoresList
const renderHighscores = () => {

    if (resultsFound !== null) {
        resultsFound.forEach(element => {
            let liEl = document.createElement("li");
            liEl.textContent = (Object.keys(element) + " - " + Object.values(element));
            highscoresList.appendChild(liEl);  
        });
          
    }else{
        console.log("No users found!");    
    }  
    
}
clearHighscores = addEventListener("click", () => {    
    localStorage.clear();
    highscores.innerHTML = "";
});

renderHighscores();
