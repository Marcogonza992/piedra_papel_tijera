let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;     
function getHumanChoice() {
    const choice = ['piedra', 'papel', 'tijera'];
    
    do {
        humanChoice = prompt('Elige: piedra, papel o tijera').toLowerCase();
    } while (!choice.includes(humanChoice));
    return humanChoice;
}




function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice= choices[randomIndex];
    return computerChoice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Empate';
    } else if (
        (humanChoice === 'piedra' && computerChoice === 'tijera') ||
        (humanChoice === 'papel' && computerChoice === 'piedra') ||
        (humanChoice === 'tijera' && computerChoice === 'papel') 
    ) {
        humanScore++;
        return `Ganaste! ${humanChoice} vence a ${computerChoice}`;
    } else {
        computerScore++;
        return `Perdiste! ${computerChoice} vence a ${humanChoice}`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    
    if (humanScore > computerScore) {
        console.log(`Ganaste el juego! ${humanScore} a ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Perdiste el juego! ${computerScore} a ${humanScore}`);
    } else {
        console.log(`El juego terminó en empate! ${humanScore} a ${computerScore}`);
    }
}
console.log(playGame());
