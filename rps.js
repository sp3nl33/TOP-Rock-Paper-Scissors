//Establish two players, one is a user and the other is a computer
//Establish a function to get the player's choice, and a function to get the computer's choice (decided randomly)
//Establish a round of rock paper scissors
//Write a function that has the two choices go against each other in a round
//Establish rock beats scissors, scissors beats paper, paper beats rock
//At the end of the round, have a message appear saying whether or not the user won and what the result was
//Write a function that stops after five rounds and announces the winner and score at the end


let p1Score=0
let cpuScore=0


const rock='rock'
const scissors='scissors'
const paper='paper'


//Choice functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerSelection = getRandomInt(3);
    if (computerSelection===0){
        let computerSelection="rock"
        return computerSelection   
    }
    else if (computerSelection===1){
        let computerSelection="scissors"
        return computerSelection   
    }

    else if (computerSelection===2){
        let computerSelection="paper"
        return computerSelection   
        
    }
}

function getPlayerChoice() {
    let pChoice = prompt("Pick your weapon, warrior -- Rock, Paper, or Scissors?");
    let playerSelection=pChoice.toLocaleLowerCase()
    String(playerSelection)
    return playerSelection
}
//

//Win and lose functions
//function rockWin() {
//    alert("Player chose rock and computer chose scissors! You win this round!")
//   p1Score++
//}

//function scissorsWin() {
//   alert("Player chose scissors and computer chose paper! You win this round!")
//    p1Score++
//}

//function paperWin() {
//    alert("Player chose paper and computer chose rock! You win this round!")
//    p1Score++
//}

//function rockLose() {
//    alert("Player chose rock and computer chose paper! You lose this round...")
//    cpuScore++
//}

//function scissorsLose() {
//    alert("Player chose scissors and computer chose rock! You lose this round...")
//    cpuScore++
//}

//function paperLose() {
//    alert("Player chose paper and computer chose scissors! You lose this round...")
//    cpuScore++
//}

//function drawRound() {
//    alert("Player and computer chose the same weapon! It's a draw.")
//    p1Score++
//    cpuScore++
//}
//

//Round play function
function playRound(playerSelection, computerSelection) {
    if (playerSelection==="rock" && computerSelection==="scissors") {
        console.log("Player chose rock and computer chose scissors! You win this round!");
        p1Score++
    }
    else if (playerSelection==="scissors" && computerSelection==="paper") {
        console.log("Player chose scissors and computer chose paper! You win this round!");
        p1Score++
    }
    else if (playerSelection==="paper" && computerSelection==="rock") {
        console.log("Player chose paper and computer chose rock! You win this round!");
        p1Score++
    }
    else if (playerSelection==="rock" && computerSelection==="paper") {
        console.log("Player chose rock and computer chose paper! You lose this round...");
        cpuScore++
    }
    else if (playerSelection==="scissors" && computerSelection==="rock") {
        console.log("Player chose scissors and computer chose rock! You lose this round...");
        cpuScore++
    }
    else if (playerSelection==="paper" && computerSelection==="scissors") {
        console.log("Player chose paper and computer chose scissors! You lose this round...");
        cpuScore++
    }
    else if(playerSelection===computerSelection) {
        console.log("Player and computer chose the same weapon! It's a draw.");
        p1Score++
        cpuScore++
    }
    else{
        alert("error")
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function game() {
    playRound(getPlayerChoice(), getComputerChoice()); 
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    if (cpuScore>p1Score) {
        alert(`You lose! Final score: CPU: ${cpuScore} to P1: ${p1Score}`)
    }
    else if (p1Score>cpuScore) {
        alert(`You win! Final score: P1: ${p1Score} to CPU: ${cpuScore}`)
    }
    else {
        alert("UNREAL! It's a tie!")
    }
}

game()



