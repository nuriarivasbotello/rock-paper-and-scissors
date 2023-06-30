const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');
const images = document.getElementById('images');
const userPoints = document.getElementById('userPoints');
const pcPoints = document.getElementById('pcPoints');
const result = document.getElementById('result');
const allowedPlays = ['paper', 'rock', 'scissors'];
if (document.body.dataset.mode === 'advanced') {
  allowedPlays.push[('lizard', 'spock')];
}
let userPlay;
let pcPlay;
let userMarker = 0;
let pcMarker = 0;
const gameRules = {
  paper: {
    rock: true,
    scissors: false,
    lizard: false,
    spock: true
  },
  rock: {
    paper: false,
    scissors: true,
    lizard: true,
    spock: false
  },
  scissors: {
    rock: false,
    paper: true,
    lizard: true,
    spock: false
  },
  lizard: {
    rock: false,
    paper: true,
    scissors: false,
    spock: true
  },
  spock: {
    rock: false,
    paper: false,
    scissors: true,
    lizard: true
  }
};

const randomResult = () => {
  let result = '';
  const randomNumber = Math.floor(Math.random() * allowedPlays.length);

  pcPlay = allowedPlays[randomNumber];
  if (pcPlay === userPlay) {
    console.log(
      `Has elegido ${userPlay} y el ordenador ${pcPlay}. Has empatado`
    );
  } else if (gameRules[userPlay][pcPlay]) {
    userMarker++;
    userPoints.textContent = userMarker;

    console.log(`Has elegido ${userPlay} y el ordenador ${pcPlay}. Has ganado`);
  } else {
    pcMarker++;
    pcPoints.textContent = pcMarker;
    console.log(
      `Has elegido ${userPlay} y el ordenador ${pcPlay}. Has perdido`
    );
  }
};

const handleClick = event => {
  userPlay = event.target.dataset.image;
  randomResult();
};
images.addEventListener('click', handleClick);
// paper.addEventListener('click', () => {
//   userPlay = 'paper';
//   randomResult();
// });
// rock.addEventListener('click', () => {
//   userPlay = 'rock';
//   randomResult();
// });
// scissors.addEventListener('click', () => {
//   userPlay = 'scissors';
//   randomResult();
// });
// lizard.addEventListener('click', () => {
//   userPlay = 'lizard';
//   randomResult();
// });
// spock.addEventListener('click', () => {
//   userPlay = 'spock';
//   randomResult();
// });
// const paperFirst = () => {
//   const result = Math.floor(Math.random() * 3);
//   let resultPaper = '';
//  if (result === 0) {
//     console.log(`Has sacado papel y tu rival papel, habéis empatado`);
//   } else if (result === 1) {
//     console.log(`Has sacado papel y tu rival tijeras, has perdido`);
//   } else if (result === 2) {
//     console.log(`Has sacado papel y tu rival piedra, has ganado`);
//   }
// };
// paper.addEventListener('click', paperFirst);
// const rockFirst = () => {
//   const result = Math.floor(Math.random() * 3);
//   let resultPaper = '';
//   if (result === 0) {
//     console.log(`Has sacado piedra y tu rival papel, has perdido`);
//   } else if (result === 1) {
//     console.log(`Has sacado piedra y tu rival tijeras, has ganado`);
//   } else if (result === 2) {
//     console.log(`Has sacado piedra y tu rival piedra, habéis empatado`);
//   }
// };
// rock.addEventListener('click', rockFirst);
// const scissorsFirst = () => {
//   const result = Math.floor(Math.random() * 3);
//   let resultPaper = '';
//   if (result === 0) {
//     console.log(`Has sacado tijeras y tu rival papel, has ganado`);
//   } else if (result === 1) {
//     console.log(`Has sacado tijeras y tu rival tijeras, habéis empatado`);
//   } else if (result === 2) {
//     console.log(`Has sacado tijeras y tu rival piedra, has perdido`);
//   }
// };
// scissors.addEventListener('click', scissorsFirst);

//rock.addEventListener('click', () => {
//console.log(`Has sacado piedra y tu rival`);
//});
//scissors.addEventListener('click', () => {
// console.log(`Has sacado tijeras y tu rival `);
//});

// const boxesElement = document.getElementById('boxes');
// const handleClick = event => {
//   if (event.target.dataset.number === '1') {
//     event.target.textContent = 'Hola';
//   }
// };
// boxesElement.addEventListener('click', handleClick);

if (document.body.dataset.mode === 'simple') {
  console.log('Estás en el modo simple');
} else {
  console.log('Estás en el modo avanzado');
}
