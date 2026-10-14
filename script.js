
//check if linked with html
//console.log("Hello World");

function getComputerChoice(){
    let dec = Math.ceil(Math.random()*3);
    if (dec == 1){
        return "Rock"
    }else if(dec == 2){
        return "Paper"
    }else{
        return "Scissor"
    };
}

//console.log(getComputerChoice())

function getHumanChoice(){
    let HumanChoice = prompt("Rock, Paper or Scissor ?");
    return HumanChoice;
}

//console.log(getHumanChoice());