// iniciar minhas variáveis
// Preciso criar o empate, quando ele ocorre?
//Quando todos os squares != '' e gameOver = false. 

let board = ['', '', '', '', '', '', '', '', '', '']
let playerTime = 0;
let gameOver = false;

let symbols = ['o', 'x'];
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function handleMove(position) {

  if (gameOver) {
    return;
  };

  if (board[position] == '') {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if (gameOver == false) {

      playerTime = (playerTime == 0) ? 1 : 0;
    }

    return gameOver;
  };
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != '') {

      return true;

    };
  };

  return false;
}

function restart() {
  board = ['', '', '', '', '', '', '', '', '', '']
  playerTime = 0;
  gameOver = false;

  reset();
}

function draw() {
  if (board[0] != '' &&
    board[1] != '' &&
    board[2] != '' &&
    board[3] != '' &&
    board[4] != '' &&
    board[5] != '' &&
    board[6] != '' &&
    board[7] != '' && gameOver == false) {
    return true;
  }

  return false;
}