
 // Get DOM elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper1');
const scissorsBtn = document.getElementById('scissors');
const userScoreElem = document.getElementById('user-score');
const compScoreElem = document.getElementById('comp-score');
const msgElem = document.getElementById('msg');

// Initialize scores
let userScore = 0;
let compScore = 0;

// Function to generate computer's choice
function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine winner
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'It\'s a tie!';
    } else if ((userChoice === 'rock' && compChoice === 'scissors') ||
               (userChoice === 'paper' && compChoice === 'rock') ||
               (userChoice === 'scissors' && compChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Function to update scores and message
function updateScore(userChoice, compChoice, winner) {
    if (winner === 'You win!') {
        userScore++;
    } else if (winner === 'Computer wins!') {
        compScore++;
    }

    userScoreElem.textContent = userScore;
    compScoreElem.textContent = compScore;
    msgElem.textContent = `${winner} You chose ${userChoice} and computer chose ${compChoice}.`;
}

// Event listeners for user's choices
rockBtn.addEventListener('click', function () {
    const compChoice = getCompChoice();
    const winner = determineWinner('rock', compChoice);
    updateScore('rock', compChoice, winner);
});

paperBtn.addEventListener('click', function () {
    const compChoice = getCompChoice();
    const winner = determineWinner('paper', compChoice);
    updateScore('paper', compChoice, winner);
});

scissorsBtn.addEventListener('click', function () {
    const compChoice = getCompChoice();
    const winner = determineWinner('scissors', compChoice);
    updateScore('scissors', compChoice, winner);
});
