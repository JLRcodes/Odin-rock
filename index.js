console.log("Hi");

const options = ["rock", "paper", "scissors"];

//Generates random choice of rock, paper, scissors
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log("Computer chose: " + choice)
    return choice;
}

//Fix a bug that returns a tie as a loss
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

// Checks who has won the game. Player or Computer
/* function checkWinner(playerSelection, computerSelection) {
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
 */

// Plays a round and gives us a result 
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result === "Tie"){
        return "It's a Tie!";
    }
    else if(result === "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//Let's player choose the input into game
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput === false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice === null){ //No answer, prompt stays
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower; 
        }
    }
}

// Plays 5 games in a row
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;  
      console.log("Welcome")    
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(); 
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------------------");
        if(checkWinner(playerSelection, computerSelection) === "Player"){
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) === "Computer"){
            scoreComputer++;
        }
    }

    //Winner is declared
    console.log("Game Over")
    if(scorePlayer > scoreComputer) {
        console.log("Player is the winner");
    }
    else if (scorePlayer < scoreComputer) {
        console.log("Computer is the winner");
    }
    else{
        console.log("We have a tie!");
    }
}

game();


/* const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection)); */




