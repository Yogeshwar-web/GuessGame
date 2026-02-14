let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)
function checkGuess(){
    let userGuess = parseInt(userInput.value);
    if(userGuess > randomNumber){
        gameResult.textContent = "Your guess is too high";
        gameResult.style.backgroundColor = "red";
    }
    else if(userGuess < randomNumber){
        gameResult.textContent = "Your guess is too low";
        gameResult.style.backgroundColor = "red";
    }
    else{
        gameResult.textContent = "Congratulations! You guessed the number";
        gameResult.style.backgroundColor = "green";
    }
}