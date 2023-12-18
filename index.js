let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector("#msg");


let turnO = true;

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

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
         if(turnO){
            box.innerHTML = "O";
            turnO = false;
         }
         else{
            box.innerHTML = "X";
            turnO = true;
         }

         box.disabled = true;

         checkWinner();
    })
})

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }

}

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = ""
    }

}

const showWinner = (winner)=>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();

}

const checkWinner = ()=>{
    for( let pattern of winPatterns){
      
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }


    }
}

const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);