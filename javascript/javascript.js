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
   IF getUserChoice equals to 'Rock' THEN
        RETURN 'Rock'
   IF getUserChoice equals to 'Paper' THEN
        RETURN 'Paper'
   IF getUserChoice equals to 'Scissors' THEN 
        RETURN 'Scissors'
*/

function getHumanChoice() {
    const getUserChoice = prompt('Make a selection: Rock, Paper or Scissors?');
    return (getUserChoice.toLowerCase() === 'rock') ? 'Rock' :
    (getUserChoice.toLowerCase() === 'paper') ? 'Paper' : 'Scissors';
}
