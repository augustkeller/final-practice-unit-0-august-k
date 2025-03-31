//Tic Tac Toe

const input = require('readline-sync');

let ticTacToeGrid = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
 ];
let rowOne = ticTacToeGrid[0];
let rowTwo = ticTacToeGrid[1];
let rowThree = ticTacToeGrid[2];
//I built a multi-dimensional array (Building Arrays - 4) to represent the Tic-Tac-Toe grid.
//I assigned each nested array a variable name for use later.

let playerName = input.question('What is your name? ');
//I am using the readline-sync module (Values, Data Types, and Operations - 4) to collect input from users.

console.log(`Hello ${playerName},
Welcome to Tic-Tac-Toe!`);
//I am using string interpolation (Stringing Characters Together - 5) to embed variables directly into strings.
//I am using template literals to write strings that span multiple lines without requiring explicit escape characters like \n.

console.log(`${playerName}: Turn One!`);

do {
    tunrOneRow = input.question('Pick a row (1, 2, or 3). ');
} while (!(tunrOneRow === "1" || tunrOneRow === "2" || tunrOneRow === "3"));
console.log("Row selected.");

do {
    turnOneColumn = input.question('Pick a column (1, 2, or 3). ');
} while (!(turnOneColumn === "1" || turnOneColumn === "2" || turnOneColumn === "3"));
console.log("Column selected.");
//I am using the do-while loop (Working With Loops - 3) to ensure that user inputs are within the 1-3 grid parameters.

let tunrOneRowNum = (Number(tunrOneRow) - 1);
let turnOneColumnNum = (Number(turnOneColumn) - 1);
//I am using the Number function (Values, Data Types, and Operations - 3) to convert string user inputs to number values. 
//I am subtracting 1 from each user input to convert their answers to index values.

ticTacToeGrid[tunrOneRowNum][turnOneColumnNum] = "X";
//I am using dynamic indexing (Using Arrays - 1) to use variables instead of hard-coded indexes. 
//I can now assign user input to a specific spot on the Tic Tac Toe grid.
 
console.log(rowOne);
console.log(rowTwo);
console.log(rowThree);
//Use console logs to test your outputs and ensure your code works as expected.

console.log("Computer: Turn One!");

if (rowOne[0] === "_") {
    rowOne[0] = "O";
  } else {
    if (rowOne[1] === "_") {
    rowOne[1] = "O";
  } else {
    if (rowOne[2] === "_") {
    rowOne[2] = "O";
  } else {
    if (rowTwo[0] === "_") {
    rowTwo[0] = "O";
  } else {
    if (rowTwo[1] === "_") {
    rowTwo[1] = "O";
  } else {
    if (rowTwo[2] === "_") {
    rowTwo[2] = "O";
  } else {
    if (rowThree[0] === "_") {
    rowThree[0] = "O";
  } else {
    if (rowThree[1] === "_") {
    rowThree[1] = "O";
  } else {
    if (rowThree[2] === "_") {
    rowThree[2] = "O";
  } else {
    console.log("You win.");
  };
  };
  };
  };
  };
  };
  };
  }
  }
//I am using an if else statement (Control Structures and Logic - 1) to add a computer's turn while ensuring not to override the user's input.
//I know this is not the most concise or readable way to do this. But it is the only way I could think of and it does work.
//I tried using for...of loops and regular for loops, but I couldn't figure out how to make it work.

console.log(rowOne);
console.log(rowTwo);
console.log(rowThree);
//Use console logs to test your outputs and ensure your code works as expected.

//To complete this game, I would need to find ways to:
//1. Accept more user input while checking that they don't override a previously selected spot on the Tic Tac Toe grid.
//  For this, I tried nesting a second user turn within another do while loop (where the outer do while loop checks if the selected spot is "_"), but I couldn't make it work.
//2. Check if anyone got 3 in a row after each turn.