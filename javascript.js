const rockImage = document.querySelector("#rock");
const paperImage = document.querySelector("#paper");
const scissorsImage = document.querySelector("#scissors");
const playerScoreSpan = document.querySelector('.playerscore');
const computerScoreSpan = document.querySelector('.computerscore');
const resultSpan = document.querySelector(".result");
const winningScore = 5;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choices = ["rock" , "paper" , "scissor"]
	return choices[Math.floor(Math.random() * choices.length)]
}


function resetScore(){
    if(playerScore==5){
        playerScore=0;
        computerScore=0;
        alert('YOU WINS');
        playerScoreSpan.textContent= '';
        computerScoreSpan.textContent =  '';
        resultSpan.textContent= '';
    }

    else if(computerScore==5){
        playerScore=0;
        computerScore=0;
        alert('COMPUTER WINS');
        playerScoreSpan.textContent='';
        computerScoreSpan.textContent = '';
        resultSpan.textContent = '';
    }
}


function Winner(playerWin){
    if(playerWin){

        playerScore++;

    }
    else{
        computerScore++;
    }
}


rockImage.addEventListener('mouseover', (e) => {
    rockImage.classList.add('playing');
})

paperImage.addEventListener('mouseover', (e) => {
    paperImage.classList.add('playing');
})

scissorsImage.addEventListener('mouseover', (e) => {
    scissorsImage.classList.add('playing');
})

rockImage.addEventListener('mouseout', (e) => {
    rockImage.classList.remove('playing');
})

paperImage.addEventListener('mouseout', (e) => {
    paperImage.classList.remove('playing');
})

scissorsImage.addEventListener('mouseout', (e) => {
    scissorsImage.classList.remove('playing');
})


rockImage.addEventListener('click',(computerChoice)=>{
    computerChoice=getComputerChoice();
    if(computerChoice === 'rock'){
        resultSpan.textContent="Draw!, You & computer chose rock";
    }
    else if (computerChoice === 'paper'){
        resultSpan.textContent= "You lost!, Computer chose paper";
        Winner(0);
    }
    else if (computerChoice === "scissors"){
        resultSpan.textContent = "You won!, Computer chose scissors";
        Winner(1);
    }
    playerScoreSpan.textContent= playerScore;
    computerScoreSpan.textContent = computerScore;
    resetScore();
})

paperImage.addEventListener('click', (computerChoice) => {
    resultSpan.innerText = '';
    computerChoice = getComputerChoice();
        if (computerChoice === 'paper'){ //Draw
            resultSpan.textContent = "Draw!, You & Computer chose paper!"
        }
        else if (computerChoice === 'scissors' ){ // Computer wins
            resultSpan.textContent = "You lost!, Computer chose scissors!"
           Winner(0);
        }
        else if (computerChoice === 'rock'){ // Player wins
            resultSpan.textContent = "You won!, Computer chose rock!";
            Winner(1);
        }
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent =  computerScore;
        resetScore();
});

scissorsImage.addEventListener('click', (computerChoice) => {
    computerChoice = getComputerChoice();
        if (computerChoice === 'scissor'){ //Draw
            resultSpan.textContent = "Draw!, You & Computer chose scissors!"
        }
        else if (computerChoice === 'rock' ){ // Computer wins
            resultSpan.textContent = "You lost!, Computer chose rock!"
           Winner(0);
        }
        else if (computerChoice === 'paper'){ // Player wins
            resultSpan.textContent = "You won!, Computer chose paper!";
            Winner(1);
        }
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent =  computerScore;
        resetScore();
});