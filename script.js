
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
    let HumanChoice = prompt(res +"\t"+ `Human : ${humanScore}  , Computer : ${computerScore}` + "\nRock, Paper or Scissor ?");
    return HumanChoice.toLowerCase();
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
let res="";

function playRound(humanChoice , computerChoice){
    if (humanChoice=="rock"){
        if (computerChoice=="rock"){
            res = "TIE... rock vs rock";
        }else if (computerChoice=="paper"){
            res = "You Lose..! paper beats rock";
            computerScore+=1;
        }else {
            res = "You win..! rock beats scissor";
            humanScore+=1;
        }
    }else if (humanChoice=="paper"){
        if (computerChoice=="paper"){
            res = "TIE... paper vs paper";
        }else if (computerChoice=="scissor"){
            res = "You Lose..! scissor beats paper";
            computerScore+=1;
        }else {
            res = "You win..! paper beats rock";
            humanScore+=1;
        }
    }else {
                if (computerChoice=="scissor"){
            res = "TIE... scissor vs scissor";
        }else if (computerChoice=="rock"){
            res = "You Lose..! rock beats scissor";
            computerScore+=1;
        }else {
            res = "You win..! scissor beats paper";
            humanScore+=1;
        }
    }
    return res;
}
let i=1;
while (true){
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(`Human : ${humanScore}  , Computer : ${computerScore}`);
if (i==5){
    break
}
i+=1;
}
let result;
if (humanScore>computerScore){
    result="YOU WIN!!!!";
}else if (humanScore<computerScore){
    result="YOU Looose!!!!!";
}else{
    result="TIE bruv";
}
alert(result);
console.log(result);

