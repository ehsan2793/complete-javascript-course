'use strict';
let secret_number = Math.trunc(Math.random() * 20) + 1;
console.log(secret_number);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = ' ❌ No Number ';
    }
    if (score !== 1) {
        if (guess === secret_number) {

            document.querySelector('.number').textContent = secret_number;
            document.querySelector('body').style.backgroundColor = '#18b041';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.again').style.backgroundColor = "hsl(0deg 61% 53%)"
            document.querySelector('.again').style.borderRadius = "20px"
            document.querySelector('.again').style.color = "white"
            document.querySelector('.message').textContent = ' 🎉 Correct Number ';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        else {
            let message = '';
            guess > secret_number
                ? (message = ' Too High  ')
                : (message = ' Too Low  ');
            document.querySelector('.message').textContent = message;
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = '👎 You Lost  ';
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secret_number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.again').style.backgroundColor = 'white'
    document.querySelector('.message').textContent = ' Start guessing... ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
});
