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

let humanScore = 0;
let computerScore = 0;


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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    checkForWinner(humanChoice, computerChoice);
    
}

function checkForWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw, both of you chose ${humanChoice}`);
    }

    else if (humanChoice === 'rock') {
        switch(computerChoice) {
            case 'paper':
                computerScore++;
                console.log('You Lose! Paper beats Rock');
                break;
            case 'scissors':
                humanScore++;
                console.log('You Win! Rock beats Scissors');
                break;
        }
    }

    else if (humanChoice === 'paper') {
        switch(computerChoice) {
            case 'scissors':
                computerScore++;
                console.log('You Lose! Scissors beats Paper');
                break;
            case 'rock':
                humanScore++;
                console.log('You Win! Paper beats Rock')
                break;
        }
    }

    else if (humanChoice === 'scissors') {
        switch(computerChoice) {
            case 'rock':
                computerScore++;
                console.log('You Lose! Rock beats Scissors');
                break;
            case 'paper':
                computerScore++;
                console.log('You Win! Scissors beats Paper')
        }
    }

}

playRound(humanSelection, computerSelection);