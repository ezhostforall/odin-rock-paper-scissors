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

const playRound = (playerChoice, computerChoice) => {
        if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
            computerScore += 1;
            console.log(`Player Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
        } else if ((computerChoice === 'rock' && playerChoice === 'paper') ||(computerChoice === 'paper' && playerChoice === 'scissors') || (computerChoice === 'scissors' && playerChoice === 'rock')) {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
            humanScore += 1;
            console.log(`Player Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
        } else if (playerChoice === computerChoice) {
            console.log(`It's a tie! Try again`)
            console.log(`Player Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
        }
};

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection);
        console.log(i+1); 
    }
    console.log(`Final Player Score: ${humanScore}`);
    console.log(`Final Computer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log(`Player Wins`);
    } else if (computerScore > humanScore) {
        console.log(`Computer Wins`);
    } else {
        console.log(`It's a draw`);
    }
}


playGame();
