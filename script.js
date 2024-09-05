//computer decision
function getComputerChoice(){
    let choice = ""
    let randNumber = Math.random()
    if(randNumber < 0.33){
        choice = "Rock"
    }
    else if (randNumber > 0.66){
        choice = "Paper"
        }
        else{
            choice = "Scissors"
        }
        console.log(choice);
}

getComputerChoice();