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
    const randomNumberGenerator = Math.floor(Math.random() * 3) + 1;
    return (randomNumberGenerator === 1) ? 'Rock' : 
    (randomNumberGenerator === 2) ? 'Paper' : 'Scissors';
}
