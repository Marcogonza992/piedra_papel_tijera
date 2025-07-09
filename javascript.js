let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;    
let i =0; 

const btn =document.querySelector('#btn');
const btn2 =document.querySelector('#btn2');
const btn3 =document.querySelector('#btn3');

btn.addEventListener("click",function(e){
    humanChoice = 'papel';
    getComputerChoice();
    playGame();
    i++;
});
btn2.addEventListener("click",function(e){
    humanChoice = 'piedra' ;
    getComputerChoice();
    playGame();
    i++;
});
btn3.addEventListener("click",function(e){
    humanChoice = 'tijera';
    getComputerChoice();
    playGame();
    i++;
    
});



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

    
    const result = playRound(humanChoice, computerChoice);
    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = result;
     if (i === 5) {
       resultDiv.textContent = "";
        if (humanScore > computerScore) {
            const resulscore = document.querySelector('#score');
            resulscore.textContent = "Ganaste el juego! " + humanScore + " a " + computerScore;
        } else if (computerScore > humanScore) {
            const resulscore = document.querySelector('#score');
            resulscore.textContent = "Perdiste el juego! " + computerScore + " a " + humanScore;
        } else {
            const resulscore = document.querySelector('#score');
            resulscore.textContent = "El juego termina en empate! " + humanScore + " a " + computerScore;
        }
     }
}


