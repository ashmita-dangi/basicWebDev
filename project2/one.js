// let stone = document.getElementById("stone");
// let paper = document.getElementById("paper");
// let scissor = document.getElementById("scissor");
let msg = document.getElementById("play");
let mainDiv = document.querySelector(".container");
let imgChoice = document.querySelectorAll(".images");//this will work as an array now

let reset = document.querySelector("#reset");

let userScore = 0;
let botScore = 0;

let botCount = document.querySelector("#bs");
let userCount = document.querySelector("#us");

genCompChoice = () => {
    let choiceArr = ["stone", "paper", "scissor"];
    let ab = Math.floor(Math.random() * 3);
    return choiceArr[ab];
}


imgChoice.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log("users choice", userChoice);
        //generate bot's choice
        let compChoice = genCompChoice();
        let botC = document.querySelector("#botC");
        botC.innerHTML = `computer's Choice:--${compChoice}`;
        if (userChoice === compChoice) {
            msg.innerHTML = "DRAW";
        } else if (userChoice === "paper" && compChoice === "scissor") {
            msg.innerHTML = "LOSE";
            botScore++;
        } else if (userChoice === "paper" && compChoice === "stone") {
            msg.innerHTML = "WIN";
            userScore++;
        } else if (userChoice === "stone" && compChoice === "paper") {
            msg.innerHTML = "LOSE";
            botScore++;
        } else if (userChoice === "stone" && compChoice === "scissor") {
            msg.innerHTML = "WIN";
            userScore++;
        } else if (userChoice === "scissor" && compChoice === "stone") {
            msg.innerHTML = "LOSE";
            botScore++;
        }
        else {
            msg.innerHTML = "WIN";
            userScore++;
        }

        userCount.innerHTML = userScore;
        botCount.innerHTML = botScore;
        
        });
        reset.addEventListener("click",()=>{
            userCount.innerHTML = 0;
        botCount.innerHTML = 0;
        userScore =0;
        botScore=0;
        
    });


});
