const display = document.querySelector('.container'); //declare a variable to store output to be displayed to user

// declare separate variables to store player and computer scores to update and track them independently
let playerScore = 0;
let compScore = 0;

// add a listener to check when the user clicks on the page
document.addEventListener('click', (event) => {
  
    let target = event.target; // declare a variable to store the element clicked by the user
    playRound(target.id); // pass the id of the clicked element as an argument to set player choice

});

// declare a function to reset varaibles to origin state
function resetGame() {
    playerScore = 0;
    compScore = 0;
}

// declare a function to get the computer selection
function getCompSelection() {
    let compSelection = '';
    const randInt = Math.floor(Math.random()*3); //declare a variable to store a random integer between 0-2
    
    // use the random integer to determine the computer's choice
    switch (randInt) {
        case 0:
            return compSelection = 'rock';
            break;
        case 1:
            return compSelection = 'paper';
            break;
        case 2:
            return compSelection = 'scissors';
            break;
    }
}


// declare a function to play a round of rock paper scissors 
function playRound (userInput) {
    let playerSelection = userInput;
    let compSelection = getCompSelection();
    
    // compare player and computer selection to determine the winner of the round 
    switch(playerSelection) {
      
        case 'rock':
            if (compSelection === 'scissors') {
                playerScore++;
            }
            else if (compSelection === 'paper') {
                compScore++;
            }
            break;
      
        case 'paper':
            if (compSelection === 'rock') {
                playerScore++;
            }
            else if (compSelection === 'scissors') {
                compScore++;
            }
            break;
      
        case 'scissors':
            if (compSelection === 'paper') {
                playerScore++;
            }
            else if (compSelection === 'rock') {
                compScore++;
            }
            break;
    }
  
    // check for a winner and display the output to the user
    if (playerScore >= 5) {
        display.textContent = `PLAYER: ${playerScore} | ${playerSelection.toUpperCase()}  <<< WINNER <<< ${compSelection.toUpperCase()} | ${compScore} :COMPUTER`;
        resetGame();
    }
    else if (compScore >= 5) {
        display.textContent = `PLAYER: ${playerScore} | ${playerSelection.toUpperCase()} >>> WINNER >>> ${compSelection.toUpperCase()} | ${compScore} :COMPUTER`;
        resetGame();
    }
    else {
        display.textContent = `PLAYER: ${playerScore} | ${playerSelection.toUpperCase()}  |  ${compSelection.toUpperCase()} | ${compScore} :COMPUTER`
    }
  
}