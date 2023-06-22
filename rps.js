//Establish two players, one is a user and the other is a computer
//Establish a function to get the player's choice, and a function to get the computer's choice (decided randomly)
//Establish a round of rock paper scissors
//Write a function that has the two choices go against each other in a round
//Establish rock beats scissors, scissors beats paper, paper beats rock
//At the end of the round, have a message appear saying whether or not the user won and what the result was
//Write a function that stops after five rounds and announces the winner and score at the end

let p1
let cpu
let p1Score
let cpuScore


const rock="Rock"
const scissors="Scissors"
const paper="Paper"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let cpu = getRandomInt(3);
    if (cpu===0){
        let cpu=rock
        return cpu
    }
    else if (cpu===1){
        let cpu=scissors
        return cpu
    }

    else if (cpu===2){
        let cpu=paper
        return cpu
    }   
}

function getPlayerChoice() {
    let p1 = prompt("Pick your weapon, warrior -- Rock, Paper, or Scissors?");
    return p1
}

getComputerChoice();
getPlayerChoice();




