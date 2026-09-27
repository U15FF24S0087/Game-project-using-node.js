const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function promptForGuess() {
  rl.question('Guess a number between 1 and 100: ', (answer) => {
    const guess = Number(answer);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log('Please enter a whole number between 1 and 100.');
      promptForGuess();
      return;
    }

    attempts += 1;

    if (guess < target) {
      console.log('Too low.');
      promptForGuess();
    } else if (guess > target) {
      console.log('Too high.');
      promptForGuess();
    } else {
      console.log(`Correct! You guessed it in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}.`);
      rl.close();
    }
  });
}

promptForGuess();