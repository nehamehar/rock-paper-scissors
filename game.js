let userScore = 0;
let deviceScore = 0;

const option = document.querySelectorAll(".choices"); // calling all class -choices' values
const msg = document.querySelector("#msg");
const scoreUser = document.querySelector("#You");
const scoreComp = document.querySelector("#Device");

// creating random computer choice(creating diff fun for each thing for modular code)
const genDeivce = () =>{
    const arr = ["Rock", "Paper", "Scissor"] // creating random choice for device we use arrayas we can use index randomly in array
    const randomInx = Math.floor(Math.random() * 3) // for using random index in array we use random method which is in maths and multiply that to num which we want till then, for removing decimal use
    // math.floor
    return arr[randomInx] // returning random value to array to give index
}

// game draw fun
const drawGame = () => {
    msg.innerText = "It's Draw, Play Again."
    msg.style.backgroundColor = "Grey"
};

// show winner (box of the game)
const gameWinner = (userWin, computerChoice, userChoice) => {
    if (userWin){
        scoreUser.innerText = userScore;
        msg.innerText = `Victory! 🎉 Your ${userChoice} crushes ${computerChoice}`
        msg.style.backgroundColor = "green"
        userScore++;
    } else{
        deviceScore++;
        scoreComp.innerText = deviceScore
        msg.innerText = `Oops! You got crushed — ${computerChoice} beats ${userChoice}` // changing inner text in playbox while losing and wining
        msg.style.backgroundColor = "red"
    }
}

// performing all thing
const playGame = (userChoice) => { 
    //console.log("Your choice = " , userChoice);// user choice
    const computerChoice = genDeivce(); // calling comp choice in playgame
    //console.log("Comp choice = " , computerChoice);
    if (userChoice===computerChoice){
        drawGame()
    } else {
        let userWin = true;
        if(userChoice === "Rock") {
            userWin = computerChoice === "Scissor"; // Rock beats Scissor
        } else if (userChoice === "Paper") {
            userWin = computerChoice === "Rock";    // Paper beats Rock
        } else if (userChoice === "Scissor") {
            userWin = computerChoice === "Paper";   // Scissor beats Paper
            }
            gameWinner(userWin, computerChoice, userChoice);
        }
    }


option.forEach((choices) =>{       // selecting each div in choices to print something
choices.addEventListener("click",() => {   // adding event listener for individua; choices div,add event listener in variable to perform click event in div
        const userChoice = choices.getAttribute("id")  //for calling id value through atribute      //  // creating user's choice
        playGame(userChoice) // calling playgame passing value of choiceid to playgame so that it can compare with it
    })
    
})


