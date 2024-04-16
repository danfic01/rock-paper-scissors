// run the game
console.log(runGame());

// Declare a function to get computer selection
function getComputerSelection() {
    
    // Generate a random integer between 0-2 and store the value in a variable
    const randInt = Math.floor(Math.random()*3);
    
    // Determine computer selection
    if (randInt === 0) {
        //if 0 computer selection is rock
        return "rock";
    }
    else if (randInt === 1) {
        // else if 1 computer selection is paper
        return "paper";
    }
    else {
        // else (2) computer selection is scissors
        return "scissors";
    }
}

// Declare a function to play a round of RPS
function playRound() {
    // Get user input and store it in a variable
    let userInput = prompt('CHOOSE ONE: ROCK | PAPER | SCISSORS ').toLowerCase(); // store user input as lower case

    // While user input is not rock, not paper and not scissors (case insensitive) get user input and reassign variable
    while (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors') {
        userInput = prompt('PLEASE ENTER ONLY ROCK PAPER OR SCISSORS').toLowerCase();
    }

    // Call function to get computer selection and store the return value in a variable
    let computerSelection = getComputerSelection();
    // test getComputerSelection() returns expected outcome
    console.log('COMPUTER: ' + computerSelection);
    console.log('PLAYER: ' + userInput);

    // Check user input against computer selection to determine winner of round
    switch (userInput){
        
        // define outcomes when user chooses rock
        case 'rock':
            if(computerSelection === 'scissors') {
                return 'player';
            }
            else if (computerSelection === 'paper'){
                return 'computer';
            }
            else {
                return 'tie';
            }
            break;
        
        // define outcomes when user chooses paper
        case 'paper':
            if(computerSelection === 'rock') {
                return 'player';
            }
            else if (computerSelection === 'scissors'){
                return 'computer';
            }
            else {
                return 'tie';
            }
            break;
        
        // define outcomes when user chooses scissors
        case 'scissors':
            if(computerSelection === 'paper') {
                return 'player';
            }
            else if (computerSelection === 'rock'){
                return 'computer';
            }
            else {
                return 'tie';
            }
            break;
        
        default:
            console.log('algorithmic error');
        }
}

// Declare a function to run the game
function runGame() {
    // Declare a variable to track who is winning and set its initial value to 0
    let score = 0;

    // Declare a variable to set number of rounds in game
    const rounds = 5;

    // For round in game do the following:
    for(let i = 1; i <= rounds; i++) {
        
        // log the number of the round
        console.log('ROUND: ' + i);
        // Call function to play round and store the return value in a variable
        let roundWinner = playRound();
        
        
        switch (roundWinner) {
            // When the player wins increment score by 1
            case 'player':
                score++;
                break;
            // When the computer wins decrement score by 1
            case 'computer':
                score--;
                break;
            // When there is a tie do nothing
            case 'tie':
                break;

            default:
                console.log('error');
        }
    }

    // If score variable is greater than 0 player wins 
    if (score > 0) {
        return 'CONGRATULATIONS! YOU WON!';
    }
    // Else if score is less than 0 the computer wins
    else if (score < 0) {
        return 'SORRY YOU LOST!';
    }
    // Else the game is a tie 
    else {
        return 'IT\'S A TIE!'
    }
}