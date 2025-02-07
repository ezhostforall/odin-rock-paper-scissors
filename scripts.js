document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));

const resultDisplay = document.querySelector('#result');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const getComputerChoice = () => {
    const computerChoiceGenerator = Math.floor(Math.random() * 3);
    let computerChoice = '';
    switch (computerChoiceGenerator) {
        case 0:
            computerChoice = `rock`;
            break;
        case 1:
            computerChoice = `paper`;
            break;
        case 2:
            computerChoice = `scissors`;
            break;
    }
    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
};
const getPlayerChoice = () => {
    const playerChoice = prompt(`Enter your choice: Rock, Paper or Scissors`).toLowerCase();
    console.log(`Player: ${playerChoice}`);
    return playerChoice;
};

let humanScore = 0;
let computerScore = 0;
playerScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;
   

const playRound = (playerChoice, computerChoice) => {
        if (humanScore === 5 || computerScore === 5) {
            humanScore = 0;
            computerScore = 0;
            resultDisplay.textContent = '';
        }

        if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
            computerScore += 1;
            playerScoreDisplay.textContent = humanScore;
            computerScoreDisplay.textContent = computerScore;
            console.log(`Player Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            if (computerScore === 5) {
                console.log(`Computer Wins!`);
                resultDisplay.textContent += ' Computer Wins!';
            } else if (humanScore === 5) {
                console.log(`Player Wins!`);
                resultDisplay.textContent += ' Player Wins!';
            }
        } else if ((computerChoice === 'rock' && playerChoice === 'paper') ||(computerChoice === 'paper' && playerChoice === 'scissors') || (computerChoice === 'scissors' && playerChoice === 'rock')) {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
            humanScore += 1;
            playerScoreDisplay.textContent = humanScore;
            computerScoreDisplay.textContent = computerScore;
            console.log(`Player Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            if (computerScore === 5) {
                console.log(`Computer Wins!`);
                resultDisplay.textContent += ' Computer Wins!';
            } else if (humanScore === 5) {
                console.log(`Player Wins!`);
                resultDisplay.textContent += ' Player Wins!';
            }
        } else if (playerChoice === computerChoice) {
            playerScoreDisplay.textContent = humanScore;
            computerScoreDisplay.textContent = computerScore;
            console.log(`It's a tie! Try again`)
            console.log(`Player Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
        }
};
