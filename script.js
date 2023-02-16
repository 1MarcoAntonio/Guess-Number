'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number!';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

const messageElement = (message) => { // function for substitute the old message repetition
  document.querySelector('.message').textContent = message;
};

const scoreMessage = (message) => {
  document.querySelector('.score').textContent = message
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  scoreMessage(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  messageElement('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...'
})


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // dealing with zero imput from the imput element.
  // if are no imputs
  if (!guess) {//if guess = false do this, 
    messageElement('No number!');
    //document.querySelector('.message').textContent = 'No number!'

    // if player wins 
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //document.querySelector('.message').textContent = 'correct Number!';
    messageElement('correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when guess is diferent, you just need to check if guess is diferent than secretNumber.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // ternary operator for especifie if the guess is higher or lower than secretNumber!!
      messageElement(guess > secretNumber ? 'too high!' : 'too low!');
      //document.querySelector('.message').textContent = guess > secretNumber ? 'too high!' : 'too low!'
      score--;
      scoreMessage(score);
    } else {
      messageElement('you lose!!');
      document.querySelector('body').style.backgroundColor = 'red';

      // old version of message :document.querySelector('.message').textContent = 'you lose!!'; 
      score--;
      scoreMessage(score);
    }
  }
});

    //old version of decision code!!!
    //when guess is too high
/* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose!!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lose!!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } */
