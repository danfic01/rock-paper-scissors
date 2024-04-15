# rock-paper-scissors
Rock Paper Scissors javascript app

Pseudocode 

- Declare a function to get computer selection
  - Generate a random integer between 0-2 and store the value in a variable
  - If 0 computer selection is rock, else if 1 computer selection is paper, else computer selection is scissors

- Declare a function to play a round of RPS.
  - Get user input and store it in a variable
  - While user input is not rock, not paper and not scissors (case insensitive) get user input and reassign variable
  - Call function to get computer selection and store the return value in a variable
  - Check user input against computer selection to determine winner of round
  - Return round winner

- Declare a function to run the game.
  - Declare a variable to track the winner and set its initial value to 0
  - For round in game do the following:
    - Call function to play round and store the return value in a variable
    - If the player wins increment winner by 1, else decrement winner by 1 when computer wins a round
  - If winner variable is greater than 0 player wins, else computer wins. (This structure assumes an odd number of rounds, with an even number of rounds a tie would be possible; winner variable is equal to 0).

  - Call function to run the game
