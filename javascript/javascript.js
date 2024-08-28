/* I need to create a function getComputerChoice that randomly returns one of 
   three string values: 
   'Rock', 'Paper', 'Scissors'.

   Has no GUI
   There is no input
   The expected Output is a random string between 'Rock', 'Paper', 'Scissors';

   CREATE variable randomNumberGenerator and SET it to a random number between 1 & 3.
   IF randomNumberGenerator is 1 THEN
        RETURN 'Rock'
   IF randomNumberGenerator is 2 THEN
        RETURN 'Paper'
   IF randomNumberGenerator is 3 THEN
        RETURN 'Scissors'

*/

function getComputerChoice() {
    const randomNumberGenerator = Math.floor(Math.random() * 3) + 1; //Random Number between 1 and 3
    return (randomNumberGenerator === 1) ? 'Rock' : 
    (randomNumberGenerator === 2) ? 'Paper' : 'Scissors'; 
}

/* Create a function getHumanChoice that returns the user's choice between
   'Rock', 'Paper', 'Scissors'.

   No GUI
   Input is from user
   Desired output is returning one of either 'Rock', 'Paper', 'Scissors' 
   depending on the user's choice.

   CREATE variable getUserChoice and GET user input.
   Return getUserChoice
*/

function getHumanChoice() {
    return prompt('Make a selection: Rock, Paper or Scissors?');
}




/*
 Create a function playRound that takes in a humanChoice and Computer choice as 
 possible arguments and plays a round, incrementing the round winner's score and 
 displaying a message to the console that declares the winner.

 No GUI
 Input for humanChoice will be taken from User, and randomised for computerChoice.
 The desired output is the winner's score to be increased and a message to be 
 logged to the console that declares who the winner is. 

 CREATE a variable getHumanChoice and GET humanChoice 
 CREATE a variable getComputerChoice and GET computerChoice

 CREATE playRound THEN
    OBTAIN case-insensitive Human and Computer choice
    IF humanChoice AND computerChoice are EQUAL THEN
        DISPLAY 'Draw'
    IF HumanChoice  is 'Rock' THEN
        IF computerChoice is 'Paper' THEN
            INCREMENT computerScore
            DISPLAY 'You Lose! Paper beats Rock'
        ELSE 
            INCREMENT humanScore
            DISPLAY 'You Win! Rock beats Paper'
    IF HumanChoice  is 'Paper' THEN
        IF computerChoice is 'Scissors' THEN
            INCREMENT computerScore
            DISPLAY 'You Lose! Scissors beats Paper'
        ELSE 
            INCREMENT humanScore
            DISPLAY 'You Win! Paper beats Rock'
    IF humanChoice is 'Scissors' THEN
        IF computerChoice is 'Rock' THEN
            INCREMENT computerScore
            DISPLAY 'You Lose! Rock beats Scissors'
        ELSE 
            INCREMENT humanScore
            DISPLAY 'You Win! Scissors beats Paper' 
*/



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    return checkForWinner(humanChoice, computerChoice);

}

function checkForWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw, both of you chose ${humanChoice}`);
        return 'Draw';
    }

    else if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'paper':
                console.log('You Lose! Paper beats Rock');
                return 'computer';
            case 'scissors':
                console.log('You Win! Rock beats Scissors');
                return 'human';
        }
    }

    else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'scissors':
                console.log('You Lose! Scissors beats Paper');
                return 'computer';
            case 'rock':
                console.log('You Win! Paper beats Rock')
                return 'human';
        }
    }

    else if (humanChoice === 'scissors') {
        switch (computerChoice) {
            case 'rock':
                console.log('You Lose! Rock beats Scissors');
                return 'computer';
            case 'paper':
                console.log('You Win! Scissors beats Paper');
                return 'human';
        }
    }

}

/*
We have to create a function called playGame, that calls playRound 5 times and then
declares a winner at the end and keeps track of humanScore and computerScore

Input is none
No GUI
Desired output is a function that calls playRound 5 times, keeps track of human and 
computer scores and ultimately declares a winner at the end

CREATE variable isGameOver and SET it to false
WHILE isGameOver is NOT TRUE 
    CALL playRound
    IF computerScore or humanScore EQUAL to 5 
        SET isGameOver to TRUE
        DISPLAY winner
ENDWHILE

*/

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    let roundResult;
    let isGameContinued = true;

    while (isGameContinued) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        roundResult = playRound(humanSelection, computerSelection);
        switch (roundResult) {
            case 'human':
                humanScore++;
                break;
            case 'computer':
                computerScore++;
                break;
            default:
                break;
        }
        if (computerScore === 3 || humanScore === 3) {
            isGameContinued = false; 
        }
    }

    (humanScore === 3) ? console.log('Player Wins!') : console.log('Computer Wins!');
}

playGame();