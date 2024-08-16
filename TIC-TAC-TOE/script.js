let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX , playerO
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = ()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            box.classList.add("xColor");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("oColor");
            turnO = true;
        }
        
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () =>{
        msg.innerText = "No Winner , Game is a Draw!!!";
        msgContainer.classList.remove("hide");
        disableBoxes();

};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) =>{
    msg.innerText = `Congratualtions, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = ()=>{
    count++;
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log("Winner!!",pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
        
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);