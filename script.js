'use strict';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// const section1 = document.querySelector('.player--0');
// console.log(section1);

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEl.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');

  diceEl.classList.add('hidden');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Rolling dice functionality.
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1. if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;

      // player0EL.classList.toggle('player--active');
      // player1EL.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// btnNew.addEventListener('click', init);
// // currentScore = 0;
// // playing = true;
// // scores[0] = 0;
// // scores[1] = 0;
// // activePlayer = 0;
// score0EL.textContent = 0;
// score1EL.textContent = 0;
// current0EL.textContent = 0;
// current1EL.textContent = 0;
// player0EL.classList.remove('player--winner');
// player1EL.classList.remove('player--winner');
// player0EL.classList.add('player--active');
// player1EL.classList.remove('player--active');

// My solution/////////////////////////////////////////
// btnNew.addEventListener('click', function () {
//   currentScore = 0;
//   current0EL.textContent = 0;
//   current1EL.textContent = 0;
//   document.getElementById('score--0').textContent = 0;
//   document.getElementById('score--1').textContent = 0;
//   diceEl.classList.add('hidden');
//   scores[0] = 0;
//   scores[1] = 0;

//   if (player0EL.classList.contains('player--winner')) {
//     player0EL.classList.remove('player--winner');
//     player0EL.classList.add('player--active');
//   }

//   if (player1EL.classList.contains('player--winner')) {
//     player1EL.classList.remove('player--winner');
//     player0EL.classList.add('player--active');
//   }
// });

// ////////////////////////////////////////////////////////////////////////////////////

// btnRoll.addEventListener('click', function () {
//   currentScore2 += dice;
//   current1EL.textContent = currentScore2;
// });

// ქვემოთ ჩემი არის
// let gatherNumber = 0;

// btnRoll.addEventListener('click', function () {
//   const randomNumber = Math.trunc(Math.random() * 6 + 1);

//   if (randomNumber === 1) {
//     document.querySelector('.current-score').textContent = randomNumber;
//   } else if (randomNumber === 2) {
//     diceEl.classList.remove('hidden');
//     diceEl.setAttribute('src', 'dice-2.png');
//     document.querySelector('.current-score').textContent = randomNumber;
//     gatherNumber = gatherNumber + 2;
//     console.log(gatherNumber);
//   } else if (randomNumber === 3) {
//     diceEl.classList.remove('hidden');
//     diceEl.setAttribute('src', 'dice-3.png');
//     document.querySelector('.current-score').textContent = randomNumber;
//     gatherNumber = gatherNumber + 3;
//     console.log(gatherNumber);
//   } else if (randomNumber === 4) {
//     diceEl.classList.remove('hidden');
//     diceEl.setAttribute('src', 'dice-4.png');
//     document.querySelector('.current-score').textContent = randomNumber;
//     gatherNumber = gatherNumber + 4;
//     console.log(gatherNumber);
//   } else if (randomNumber === 5) {
//     diceEl.classList.remove('hidden');
//     diceEl.setAttribute('src', 'dice-5.png');
//     document.querySelector('.current-score').textContent = randomNumber;
//     gatherNumber = gatherNumber + 5;
//     console.log(gatherNumber);
//   } else if (randomNumber === 6) {
//     diceEl.classList.remove('hidden');
//     diceEl.setAttribute('src', 'dice-6.png');
//     document.querySelector('.current-score').textContent = randomNumber;
//     gatherNumber = gatherNumber + 6;
//     console.log(gatherNumber);
//   }
// });

// btnHold.addEventListener('click', function () {
//   document.querySelector('.score').textContent = gatherNumber;
// });
