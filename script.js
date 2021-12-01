'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20
let highScore = 0;

const displayMessage = function (massage){
    document.querySelector('.message').textContent = massage
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no input
    if(!guess){
        displayMessage('This is not a number')
    }

    // when is correct number
    else if (guess === secretNumber) {
        displayMessage('Correct number!!!');
        document.querySelector('body').style.backgroundColor = '#388421';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;

        }
    }

    // when guess is wrong
    else if(guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ?  'Too high ⤵️' : 'Too low ⤴️');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ad1616'
            document.querySelector('.number').style.width = '15rem'
            document.querySelector('.number').textContent = secretNumber;
        }
    }
});

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing again...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})
