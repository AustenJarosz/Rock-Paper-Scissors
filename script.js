//computer decision
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randNumber = Math.random()
    if(randNumber < 0.33){
        return "rock";
    }
    else if (randNumber > 0.66){
        return "paper";
        }
        else{
            return "scissors";
        }
}

function getHumanChoice(){
    let choice = "";
    let intExit = 0;
    while(intExit == 0){
    choice = prompt("Do you want to go with rock, paper, or scissors?");
    choice = choice.toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors" || choice == "q"){
        intExit = 1;
    }
    else{
        alert('invalid choice. Please try again or type "q" to end');
    }
}
    return choice;
}

function updateHumanScore(){
humanScore++;
console.log("Human score: " + humanScore);
}

function updateComputerScore(){
computerScore++;
console.log("Computer score: " + computerScore);
}

function playRound(humanChoice, computerChoice){
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a draw!";
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            result = "You win! " + humanChoice + " beats " + computerChoice;
        updateHumanScore();
    } else {
        result = "You lose! " + computerChoice + " beats " + humanChoice;
        updateComputerScore();
    }
    alert(result);
}

while (humanScore < 5 && computerScore < 5) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    if (humanChoice === "q") {  // Check if the user quit
        alert("You quit the game.");
        break;
    }
    playRound(humanChoice, computerChoice);
}

// Announce the winner
if (humanScore === 5) {
    alert("Congratulations! You won the game.");
} else if (computerScore === 5) {
    alert("Sorry, the computer won the game.");
}