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

    switch (true) {
        // Outcomes if player selects Rock
        case (playerSelection === 'rock' && computerSelection === 'paper') :
            return 0;
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors') :
            return 1;
            break;
        
        // Outcomes if player selects Paper
        case (playerSelection === 'paper' && computerSelection === 'rock') :
            return 1;
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors') :
            return 0;
            break;

        // Outcomes if player selects Scissors
        case (playerSelection === 'scissors' && computerSelection === 'rock') :
            return 0;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper') :
            return 1;
            break;
        
        default : return .5
    }    
}

// Plays five rounds of the game. 
let game = () => {
    let finalScore = 0.0;
    for (let i = 0; i < 5; i++) {
        let score = playRound();
        switch (score) {
            case 0 :
                console.log('You lost this round.');
                break;
            
            case 1 :
                console.log('You won this round.');
                break;
            
            default : 
            console.log ('It was a tie.');
        }
        finalScore += score;
    }
    if (finalScore > 2.5) {
        console.log ('\nFINAL RESULT: You won the game!');
    } else if (finalScore === 2.5) {
        console.log ('\nFINAL RESULT: It was a tie!');
    } else console.log ('\nFINAL RESULT: You lost the GAME.');
}

console.log(game());