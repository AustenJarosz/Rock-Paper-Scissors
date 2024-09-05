//computer decision
function getComputerChoice(){
    let choice = ""
    let randNumber = Math.random()
    if(randNumber < 0.33){
        choice = "rock"
    }
    else if (randNumber > 0.66){
        choice = "paper"
        }
        else{
            choice = "scissors"
        }
        console.log(choice);
}

function getHumanChoice(){
    let intExit = 0;
    while(intExit == 0){
    let choice = prompt("Do you want to go with rock, paper, or scissors?");
    choice = choice.toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors" || choice == "1"){
        intExit = 1;
    }
    else{
        alert('invalid choice. Please try again or type "1" to end');
        
    }

}
}

getComputerChoice();
getHumanChoice();