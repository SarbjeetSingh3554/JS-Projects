let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField'); // Fixed typo: 'Field' instead of 'Feild'
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1; // Tracks current attempt number (starts at 1)
let playGame = true; // Unified variable name spelling

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) { // Fixed typo: 'validateGuess'
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number >= 1');
    } else if (guess > 100) {
        alert('Please enter a number <= 100');
    } else {
        prevGuess.push(guess);
        
        // Always display the current guess and check it first
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is higher than ${guess}`);
        checkGameOver(); // Look to see if that was their last turn
    } else {
        displayMessage(`Number is lower than ${guess}`);
        checkGameOver(); // Look to see if that was their last turn
    }
}

// Extracted game-over logic here to cleanly check after a wrong answer
function checkGameOver() {
    if (numGuess > 10) { 
        displayMessage(`Game over. The random number was ${randomNumber}`);
        endGame();
    }
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    // Maximum 10 turns, so remaining turns is 11 - numGuess
    remaining.innerHTML = `${11 - numGuess}`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" style="cursor:pointer; background:#212121; color:#fff; padding:10px; border-radius:5px; text-align:center;">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `10`; 
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}