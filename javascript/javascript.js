function getComputerChoice() {
    const randomNumberGenerator = Math.floor(Math.random() * 3) + 1; //Random Number between 1 and 3
    return (randomNumberGenerator === 1) ? 'Rock' : 
    (randomNumberGenerator === 2) ? 'Paper' : 'Scissors'; 
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    return checkForWinner(humanChoice, computerChoice);

}

let increaseHumanScore = (function(humanScore) {
    return function() {
        return ++humanScore;
    }
}(0));

let increaseComputerScore = (function(computerScore) {
    return function() {
        return ++computerScore;
    }
}(0));

function checkGameEnd(player, score) {
    if (player === 'human' && score === 5) {
        announceWinner.textContent = `The winner is: Player!`;
    } 
    else if (player === 'computer' && score === 5) {
        announceWinner.textContent = `The winner is: Computer!`
    }

}
function score(roundWinner) {
    switch (roundWinner) {
        case 'human':
            const tempHumanScore = increaseHumanScore()
            playerScore.textContent = `Player Score: ${tempHumanScore}`;
            checkGameEnd('human', tempHumanScore);
            break;
        case 'computer':
            const tempComputerScore = increaseComputerScore();
            computerScore.textContent = `Computer Score: ${tempComputerScore}`;
            checkGameEnd('computer', tempComputerScore);
            break;
    }
}

function checkForWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = `Result: Draw! You both chose ${humanChoice}`;
        return 'Draw';
    }

    else if (humanChoice === 'rock') {
        switch (computerChoice) {
            case 'paper':
                resultDiv.textContent = 'Result: Computer wins! Paper beats Rock!';
                score('computer');
                break;
            case 'scissors':
                resultDiv.textContent = 'Result: You win! Rock beats Scissors';
                score('human');
                break;
        }
    }

    else if (humanChoice === 'paper') {
        switch (computerChoice) {
            case 'scissors':
                resultDiv.textContent = 'Result: Computer wins! Scissors beats Paper!';
                score('computer');
                break;
            case 'rock':
                resultDiv.textContent = 'Result: You win! Paper beats Rock!';
                score('human');
                break;
        }
    }

    else if (humanChoice === 'scissors') {
        switch (computerChoice) {
            case 'rock':
                resultDiv.textContent = 'Result: Computer wins! Rock beats Scissors!';
                score('computer');
                break;
            case 'paper':
                resultDiv.textContent = 'Result: You win! Scissors beats Paper';
                score('human');
                break;
        }
    }

}

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.ScissorsBtn');
const resultDiv = document.querySelector('.resultDiv');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const announceWinner = document.querySelector('.announceWinner');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})
