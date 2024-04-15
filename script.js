
// Declare a function to get computer selection
function get_computer_selection() {
    
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

// test get_computer_selection() returns expected outcome
console.log(get_computer_selection());