

let numOfPlayerWins = 0;
let numOfComputerWins = 0; 



function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];
    return computerChoice = choices[Math.floor(Math.random() * choices.length)];
}


function getPlayerChoice() {

    let selection = prompt("rock, paper or scissors?");
    let selected;
    if (selection.toLowerCase() === "rock") {
        selected = "rock";
        return selected;


    } else if (selection.toLowerCase() === "paper") {
        selected = "paper";
        return selected;

    } else if (selection.toLowerCase() === "scissors") {
        selected = "scissors";
        return selected;
    } else {
        return;
    }
}


//const computerSelection = getComputerChoice();






function playRound(playerSelection) {

    let roundMessage;
    let computerSelection = getComputerChoice();
    


    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
        roundMessage = "It's a tie! You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
        console.log(roundMessage);
        console.log("Score: Player - " + numOfPlayerWins + ", Computer - " + numOfComputerWins);

    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        roundMessage = "You win! " + playerSelection + " beats " + computerSelection + ".";
        numOfPlayerWins += 1;
        console.log(roundMessage);
        console.log("Score: Player - " + numOfPlayerWins + ", Computer - " + numOfComputerWins);

    } else {

        roundMessage = "You lose! The computer chose " + computerSelection + " and you chose " + playerSelection + " and " + computerSelection + " beats " + playerSelection + ".";
        numOfComputerWins += 1;
        console.log(roundMessage);
        console.log("Score: Player - " + numOfPlayerWins + ", Computer - " + numOfComputerWins);

    }
}

function game () {

    let gameMessage;
    for (let i = 1; i <= 5; i++) {

        gameMessage = "Round " + i + "!";
        console.log(gameMessage);
        playRound(getPlayerChoice());

    }

}



/*
function game() {

    let playerWinCount = 0;
    let computerWinCount = 0;


    for (let i = 1; i <= 5; i++) {


        playRound(playerSelection, computerSelection);



        if (playRound(playerSelection, computerSelection) === "It's a tie!") {
            playerWinCount + 0;
            computerWinCount + 0;
        }

        if (playRound(playerSelection, computerSelection) === "You win!") {
            playerWinCount + 1;
            computerWinCount + 0;
        }

        if (playRound(playerSelection, computerSelection) === "You lose!") {
            playerWinCount + 0;
            computerWinCount + 1;
        }


    }


    let gameMessage;


    if (playerWinCount > computerWinCount) {
        gameMessage = "you won best of 5 games!";
        return gameMessage;
    }

    else if (playerWinCount = computerWinCount) {
        gameMessage = "you lost best of 5 games!";
        return gameMessage;
    }

    else {
        gameMessage = "It has ended with a tie!";
        return gameMessage;
    }
}
*/
