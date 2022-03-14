// Function randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
let computerPlay = () => {
    let answer = Math.floor(Math.random() * 3);
    let choice = ['rock', 'paper', 'scissors'];
    return choice[answer];
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = prompt('What is your choice, Rock, Paper or Scissors?: ').toLowerCase();
    //let playerSelection = playerSelectionTemp.toLowerCase()
    computerSelection = computerPlay();

    // Outcomes if player selects Rock
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 0
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 1
    } 
    
    // Outcomes if player selects Paper
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 1
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 0

    // Outcomes if player selects Scissors
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 0
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 1
    
    } else {
        return .5
    }
}

// Plays five rounds of the game. 
let game = () => {
    let finalScore = 0.0;
    for (let i = 0; i < 5; i++) {
        let score = playRound();
        if (score === 1) {console.log ('You won this round.')}
        else if (score === 0) {console.log ('You lost this round.')}
        else {console.log ('It was a tie.')} 
        finalScore += score;
    }
    if (finalScore > 2.5) {console.log ('FINAL RESULT: You won the game!')} 
    else if (finalScore === 2.5) {console.log ('FINAL RESULT: It was a tie!')} 
    else (console.log ('FINAL RESULT: You lost the GAME.'))
}

console.log(game());