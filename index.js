console.log("Hi");

const options = ["rock", "paper", "scissors"];

//Generates random choice of rock, paper, scissors
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log("Computer chose: " + choice)
    return choice;
}

// Checks who has won the game. Player or Computer
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Tie!";
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}


// Plays a round and gives us a result 
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result === "Tie") {
        return "It's a Tie!";
    }
    else if(result === "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));