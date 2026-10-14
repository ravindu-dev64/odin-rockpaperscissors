
//check if linked with html
//console.log("Hello World");

function getComputerChoice(){
    let dec = Math.ceil(Math.random()*3);
    if (dec == 1){
        return "rock"
    }else if(dec == 2){
        return "paper"
    }else{
        return "scissor"
    };
}

//console.log(getComputerChoice())

function getHumanChoice(){
    let HumanChoice = prompt("Rock, Paper or Scissor ?");
    return HumanChoice.toLowerCase();
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
let res;

function playRound(humanChoice , computerChoice){
    if (humanChoice=="rock"){
        if (computerChoice=="rock"){
            res = "TIE... rock vs rock";
        }else if (computerChoice=="paper"){
            res = "You Lose..! paper beats rock";
        }else {
            res = "You win..! rock beats scissor";
        }
    }else if (humanChoice=="paper"){
        if (computerChoice=="paper"){
            res = "TIE... paper vs paper";
        }else if (computerChoice=="scissor"){
            res = "You Lose..! scissor beats paper";
        }else {
            res = "You win..! paper beats rock";
        }
    }else {
                if (computerChoice=="scissor"){
            res = "TIE... scissor vs scissor";
        }else if (computerChoice=="rock"){
            res = "You Lose..! rock beats scissor";
        }else {
            res = "You win..! scissor beats paper";
        }
    }
    return res;
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
