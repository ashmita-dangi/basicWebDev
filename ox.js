const mainDiv = document.querySelector(".main");
let res = document.querySelector("#reset");
const buttonBox = mainDiv.querySelectorAll(".boxes");
let msg = document.querySelector(".winMsg");
msg.classList.add("hide");
let turnO = true;
let count = 0;//to track draw condition


buttonBox.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
           
            turnO = false;
        } else {
            box.innerHTML = "X";
            
            turnO = true;
        }
        box.disabled = true;
        count++;
       
        let isWinner = checkWinner();

        if(count === 9 && !isWinner ){
           gameDraw();
        } 

    });

});
function gameDraw(){
    msg.classList.remove("hide");
    msg.innerHTML = "GAME DRAW";
}

let winningVal = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
res.addEventListener("click", () => {
    buttonBox.forEach(box => {
        box.disabled = false;
        box.innerHTML = "";
        turnO = true;
        count = 0;
        msg.classList.add("hide");

    });

});
function showWinner(winner) {
    msg.classList.remove("hide");
    msg.innerHTML = `Hurreahhhh!!,Winner is ${winner}`;
    disableAllBtn();


}


function disableAllBtn() {
    for (box of buttonBox) {
        box.disabled = true;
    }
}
function checkWinner() {
    let winnerf = false;
    for (values of winningVal) {
        let pos1 = buttonBox[values[0]].innerHTML;
        let pos2 = buttonBox[values[1]].innerHTML;
        let pos3 = buttonBox[values[2]].innerHTML;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                winnerf = true;
                break;

            }
        }
       
    }
    return winnerf;
}