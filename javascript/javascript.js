function getComputerChoice() {
    const randomNumberGenerator = Math.floor(Math.random() * 3) + 1; //Random Number between 1 and 3
    return (randomNumberGenerator === 1) ? 'Rock' : 
    (randomNumberGenerator === 2) ? 'Paper' : 'Scissors'; 
}

function getHumanChoice() {
    return prompt('Make a selection: Rock, Paper or Scissors?');
}

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

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.ScissorsBtn');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})
