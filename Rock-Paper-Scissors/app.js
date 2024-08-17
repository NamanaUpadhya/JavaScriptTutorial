let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was a draw!!")
    msg.innerText = "Game was a Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        console.log("You win!!");
        console.log(userScore);

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        console.log("You loss!!");
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    //generate computer choice
   const compChoice =  genCompChoice();
   console.log("Comp choice = ", compChoice);


   if(userChoice === compChoice){
    //Draw
    drawGame();
   }
   else{
    let userWin= true;
    if(userChoice === "rock"){
        //scissors,paper
        userWin = compChoice === "paper"? false : true;
    }
    else if(userChoice === "paper"){
        //rock,scissors
        userWin = compChoice === "scissors"? false : true; 
    }
    else{
        //rock,paper
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id"); 
        // console.log(choiceId+" was clicked");
        playGame(userChoice);
    });
});