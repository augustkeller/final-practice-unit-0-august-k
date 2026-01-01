//Gameplay Setup
const input = require('readline-sync');

let isGameOver = false;

let ticTacToeGrid = [
  "_", "_", "_",
  "_", "_", "_",
  "_", "_", "_"
 ];

//Player 1 Functions
function playerOneSelection() {
  do {
      spotSelection = input.question('Pick a spot (1 thru 9). ');
  } while (!(spotSelection === "1" || spotSelection === "2" || spotSelection === "3" || spotSelection === "4" || spotSelection === "5" || spotSelection === "6" || spotSelection === "7" || spotSelection === "8" || spotSelection === "9"));
  console.log("Spot selected.");

  let spotSelectionNum = (Number(spotSelection) - 1);

  if (ticTacToeGrid[spotSelectionNum] !== "_") {
      console.log("Spot Unavailable. Please select an available spot.");
      return playerOneSelection();
  } else {
  ticTacToeGrid[spotSelectionNum] = "X";
  }
};

function playerOneTurn(num) {
let turnAnnouncement = `${playerOneName}: Turn ${num}!`
let stars = "*"
console.log(stars.repeat(turnAnnouncement.length))
console.log(turnAnnouncement)
console.log(stars.repeat(turnAnnouncement.length))
playerOneSelection()
console.log(ticTacToeGrid);
};

//Player 2 Functions
function playerTwoSelection() {
do {
    rowSelection = input.question('Pick a row (1, 2, or 3). ');
} while (!(rowSelection === "1" || rowSelection === "2" || rowSelection === "3"));
console.log("Row selected.");

do {
    columnSelection = input.question('Pick a column (1, 2, or 3). ');
} while (!(columnSelection === "1" || columnSelection === "2" || columnSelection === "3"));
console.log("Column selected.");

let rowSelectionNum = (Number(rowSelection) - 1);
let columnSelectionNum = (Number(columnSelection) - 1);

if (ticTacToeGrid[rowSelectionNum][columnSelectionNum] !== "_") {
    console.log("Spot Unavailable. Please select an available spot.");
    return playerTwoSelection();
} else {
ticTacToeGrid[rowSelectionNum][columnSelectionNum] = "O";
}
};

function playerTwoTurn(num) {
let turnAnnouncement = `${opponentName}: Turn ${num}!`
let stars = "*"
console.log(stars.repeat(turnAnnouncement.length))
console.log(turnAnnouncement)
console.log(stars.repeat(turnAnnouncement.length))
playerTwoSelection()
console.log(ticTacToeGrid);;
};

//Computer Functions
function computerSelection () {
let randomRow = Math.floor(Math.random() * 3);
let randomColumn = Math.floor(Math.random() * 3);

  if (ticTacToeGrid[randomRow][randomColumn] !== "_") {
      computerSelection()
    } else {
      ticTacToeGrid[randomRow][randomColumn] = "O";
  }
}

function computerTurn(num) {
let turnAnnouncement = `Computer: Turn ${num}!`
let stars = "*"
console.log(stars.repeat(turnAnnouncement.length))
console.log(turnAnnouncement)
console.log(stars.repeat(turnAnnouncement.length))
computerSelection()
console.log(ticTacToeGrid);
};

//Validate Win
function winValidation() {
    if ((ticTacToeGrid[0][0] === "X" && ticTacToeGrid[0][1] === "X" && ticTacToeGrid[0][2] === "X") ||
        (ticTacToeGrid[1][0] === "X" && ticTacToeGrid[1][1] === "X" && ticTacToeGrid[1][2] === "X") ||
        (ticTacToeGrid[2][0] === "X" && ticTacToeGrid[2][1] === "X" && ticTacToeGrid[2][2] === "X") ||
        (ticTacToeGrid[0][0] === "X" && ticTacToeGrid[1][0] === "X" && ticTacToeGrid[2][0] === "X") ||
        (ticTacToeGrid[0][1] === "X" && ticTacToeGrid[1][1] === "X" && ticTacToeGrid[2][1] === "X") ||
        (ticTacToeGrid[0][2] === "X" && ticTacToeGrid[1][2] === "X" && ticTacToeGrid[2][2] === "X") ||
        (ticTacToeGrid[0][0] === "X" && ticTacToeGrid[1][1] === "X" && ticTacToeGrid[2][2] === "X") ||
        (ticTacToeGrid[0][2] === "X" && ticTacToeGrid[1][1] === "X" && ticTacToeGrid[2][0] === "X")) {
            isGameOver = true;
            console.log(`${playerOneName.toUpperCase()} WINS!!`);
    }
    else if ((ticTacToeGrid[0][0] === "O" && ticTacToeGrid[0][1] === "O" && ticTacToeGrid[0][2] === "O") ||
        (ticTacToeGrid[1][0] === "O" && ticTacToeGrid[1][1] === "O" && ticTacToeGrid[1][2] === "O") ||
        (ticTacToeGrid[2][0] === "O" && ticTacToeGrid[2][1] === "O" && ticTacToeGrid[2][2] === "O") ||
        (ticTacToeGrid[0][0] === "O" && ticTacToeGrid[1][0] === "O" && ticTacToeGrid[2][0] === "O") ||
        (ticTacToeGrid[0][1] === "O" && ticTacToeGrid[1][1] === "O" && ticTacToeGrid[2][1] === "O") ||
        (ticTacToeGrid[0][2] === "O" && ticTacToeGrid[1][2] === "O" && ticTacToeGrid[2][2] === "O") ||
        (ticTacToeGrid[0][0] === "O" && ticTacToeGrid[1][1] === "O" && ticTacToeGrid[2][2] === "O") ||
        (ticTacToeGrid[0][2] === "O" && ticTacToeGrid[1][1] === "O" && ticTacToeGrid[2][0] === "O")) {
            isGameOver = true;
            console.log(`${opponentName.toUpperCase()} WINS!!`);
    }
    else if (!(ticTacToeGrid.includes("_"))) {
        isGameOver = true;
        console.log("TIE!");
    }
}

//Intro
do {
    playerAmount = input.question('Select number of players (1 or 2). ');
} while (!(playerAmount === "1" || playerAmount === "2"));

//1-Player Game
if (playerAmount === "1") {
playerOneName = input.question('What is your name? ');
opponentName = "Computer";

console.log(`Hello ${playerOneName},
Welcome to Tic-Tac-Toe!`);

function onePlayerGame(num) {
    playerOneTurn(num);
    winValidation();
    if (isGameOver === true) {
        return
    }
    computerTurn(num);
    winValidation();
    if (isGameOver === false) {
        onePlayerGame(++num)
    }
}

onePlayerGame(1);
}

//2-Player Game
if (playerAmount === "2") {
playerOneName = input.question(`First player's name? `);
opponentName = input.question(`Second player's name? `);

console.log(`Hello ${playerOneName} and ${opponentName},
Welcome to Tic-Tac-Toe!`);

function twoPlayerGame(num) {
    playerOneTurn(num);
    winValidation();
    if (isGameOver === true) {
        return
    }
    playerTwoTurn(num);
    winValidation();
    if (isGameOver === false) {
        twoPlayerGame(++num)
    }
}

twoPlayerGame(1);
}