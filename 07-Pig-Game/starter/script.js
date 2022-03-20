'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');
const new_button = document.querySelector('.btn--new');
const roll_button = document.querySelector('.btn--roll');
const hold_button = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = () => {
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();
const add_score_switch_player = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
};
// dice.toggleAttribute('hidden')

roll_button.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const diceNumber = Math.trunc(Math.random() * 6) + 1;

        // 2. Display the dice
        dice.classList.remove('hidden');
        dice.src = `dice-${diceNumber}.png`;

        //3. check if the dice 1 : if ture switch to next player
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            add_score_switch_player();
        }
    }
});

hold_button.addEventListener('click', function () {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    if (scores[activePlayer] >= 100) {
        currentScore = 0;
        dice.classList.add('hidden');
        playing = false;
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
    } else {
        add_score_switch_player();
    }
});
new_button.addEventListener('click', init);
