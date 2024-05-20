const resultElement=document.getElementById("computer");
const userElement=document.getElementById("user");
const winElement=document.getElementById("win");

function generateComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function updateDisplay(user, computer, win){
    userElement.textContent = user;
    resultElement.textContent = computer;
    winElement.textContent=win;

}

function victoryElement(user, computer){
    if ((user==="paper"&&computer==="rock")||(user==="scissors"&&computer==="paper")||(user==="rock"&&computer==="scissors")){
        return ("You win")
    }
    else if(user===computer){
        return("The game is drawn")
    }
    else{
        return ("Computer Wins")
    }
}

function rock(){
    userChoice = "rock";
    const computerChoice = generateComputerChoice();
    const winChoice= victoryElement(userChoice,computerChoice);
    updateDisplay(userChoice, computerChoice, winChoice);
}

function paper(){
    userChoice = "paper";
    const computerChoice = generateComputerChoice();
    const winChoice= victoryElement(userChoice,computerChoice);
    updateDisplay(userChoice, computerChoice, winChoice);
}

function scissors(){
    userChoice = "scissors";
    const computerChoice = generateComputerChoice();
    const winChoice= victoryElement(userChoice,computerChoice);
    updateDisplay(userChoice, computerChoice, winChoice);
}