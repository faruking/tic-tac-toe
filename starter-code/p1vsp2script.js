// variables
var cpu_score = 0;
var player1_score = 0;
var player2_score = 0;
var o_turn = document.getElementById('o_turn');
var x_turn = document.getElementById('x_turn');
var number_of_x = 0;
var number_of_o = 0;
var lastPositionX = null;
var lastPositionO = null;
var restart_dialog = document.getElementById('restart_dialog');
var winloss_dialog = document.getElementById('winloss_dialog');
var win_status = document.getElementById('win_status');
var x_score_counter = document.getElementById('x_scores');
var o_score_counter = document.getElementById('o_scores');
var ties_score_counter = document.getElementById('ties_scores');
var x_scores = 0;
var o_scores = 0;
var ties_scores = 0;
var arrayTiesX = [];
var arrayTiesO = [];
var repeatedMovesX = 0;
var repeatedMovesO = 0;
var p1 = localStorage.getItem('player_one');
var p2 = localStorage.getItem('player_two');
var x_score_label = document.getElementById('x_score_label');
var o_score_label = document.getElementById('o_score_label');
var x_wins = document.getElementById('x_takes_the_round');
var o_wins = document.getElementById('o_takes_the_round');
var game_tied_dialog = document.getElementById('game_tied_dialog');

var x1_filled = document.getElementById('x1_filled');
var x2_filled = document.getElementById('x2_filled');
var x3_filled = document.getElementById('x3_filled');
var x4_filled = document.getElementById('x4_filled');
var x5_filled = document.getElementById('x5_filled');
var x6_filled = document.getElementById('x6_filled');
var x7_filled = document.getElementById('x7_filled');
var x8_filled = document.getElementById('x8_filled');
var x9_filled = document.getElementById('x9_filled');

var o1_filled = document.getElementById('o1_filled');
var o2_filled = document.getElementById('o2_filled');
var o3_filled = document.getElementById('o3_filled');
var o4_filled = document.getElementById('o4_filled');
var o5_filled = document.getElementById('o5_filled');
var o6_filled = document.getElementById('o6_filled');
var o7_filled = document.getElementById('o7_filled');
var o8_filled = document.getElementById('o8_filled');
var o9_filled = document.getElementById('o9_filled');


var x1_outline = document.getElementById('x1_outline');
var x2_outline = document.getElementById('x2_outline');
var x3_outline = document.getElementById('x3_outline');
var x4_outline = document.getElementById('x4_outline');
var x5_outline = document.getElementById('x5_outline');
var x6_outline = document.getElementById('x6_outline');
var x7_outline = document.getElementById('x7_outline');
var x8_outline = document.getElementById('x8_outline');
var x9_outline = document.getElementById('x9_outline');

var o1_outline = document.getElementById('o1_outline');
var o2_outline = document.getElementById('o2_outline');
var o3_outline = document.getElementById('o3_outline');
var o4_outline = document.getElementById('o4_outline');
var o5_outline = document.getElementById('o5_outline');
var o6_outline = document.getElementById('o6_outline');
var o7_outline = document.getElementById('o7_outline');
var o8_outline = document.getElementById('o8_outline');
var o9_outline = document.getElementById('o9_outline');

var tile1 = document.getElementById('first_tile');
var tile2 = document.getElementById('second_tile');
var tile3 = document.getElementById('third_tile');
var tile4 = document.getElementById('fourth_tile');
var tile5 = document.getElementById('fifth_tile');
var tile6 = document.getElementById('sixth_tile');
var tile7 = document.getElementById('seventh_tile');
var tile8 = document.getElementById('eight_tile');
var tile9 = document.getElementById('ninth_tile');

var elementArray = [x1_filled, x2_filled, x3_filled, x4_filled, x5_filled, x6_filled, x7_filled, x8_filled, x9_filled, o1_filled, o2_filled, o3_filled, o4_filled, o5_filled, o6_filled, o7_filled, o8_filled, o9_filled];
var xElementArray = [x1_filled, x2_filled, x3_filled, x4_filled, x5_filled, x6_filled, x7_filled, x8_filled, x9_filled];
var oElementArray = [o1_filled, o2_filled, o3_filled, o4_filled, o5_filled, o6_filled, o7_filled, o8_filled, o9_filled];
var xOutlineArray = [x1_outline, x2_outline, x3_outline, x4_outline, x5_outline, x6_outline, x7_outline, x8_outline, x9_outline];
var oOutlineArray = [o1_outline, o2_outline, o3_outline, o4_outline, o5_outline, o6_outline, o7_outline, o8_outline, o9_outline];
var tileArray = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]
//  console.log(numberRounded);
var gameState = ["", "", "", "", "", "", "", "", ""]
var winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
var validMove = [
  [2, 4, 5],
  [1, 3, 4, 5, 6],
  [2, 5, 6],
  [1, 2, 5, 7, 8],
  [1, 2, 3, 4, 6, 7, 8, 9],
  [2, 3, 5, 8, 9],
  [4, 5, 8],
  [4, 5, 6, 7, 9],
  [5, 6, 8]
]

if (p1 == 'X' && p2 == 'PLAYER_TWO_O') {
  x_score_label.innerHTML = 'X(P1)';
  o_score_label.innerHTML = 'O(P2)';
}
else if (p1 == 'O' && p2 == 'PLAYER_TWO_X') {
  x_score_label.innerHTML = 'X (P2)';
  o_score_label.innerHTML = 'O (P1)';
}

// functions
function onHover(elementId, x_filled, x_outline, o_filled, o_outline) {
  var element = document.getElementById(elementId);
  var x_filled = document.getElementById(x_filled);
  var x_outline = document.getElementById(x_outline);
  var o_filled = document.getElementById(o_filled);
  var o_outline = document.getElementById(o_outline);
  // console.log(o_outline)

  // if it's x's turn
  if (x_turn.style.display != 'none') {
    var display = x_turn.style.display;
    // Checking if it had not already been clicked
    if (x_filled.style.display == 'none' & o_filled.style.display == 'none') {
      x_outline.style.display = 'block';
    }
  }
  // If it's o's turn
  else {
    if (x_filled.style.display == 'none' & o_filled.style.display == 'none') {
      o_outline.style.display = 'block';
      x_outline.style.display = 'none';
    }

  }
}
function onMouseOut(image, o_outline) {
  var x_outline = document.getElementById(image);
  var o_outline = document.getElementById(o_outline);
  x_outline.style.display = 'none';
  o_outline.style.display = 'none';

}
// logicfor when a tile is clicked
function onMouseClick(x, image, o, o_outline,) {
  var x_filled = document.getElementById(x);
  var x_outline = document.getElementById(image);
  var o_outline = document.getElementById(o_outline);
  var o_filled = document.getElementById(o);

  // If it's x's turn
  if (x_turn.style.display != 'none') {
    console.log(number_of_x + 'x');
    // If it does not contain O or X already
    if (o_filled.style.display == 'none' && x_filled.style.display == 'none' && number_of_x < 3) {
      // making sure a tile is moved from it's initial position to a NEW point
      if (lastPositionX == x_filled.id) {
        // console.log("true");
      }
      else {
        //making sure X is not more than three on the board
        if (number_of_x < 4) {
          var index = x_filled.id;
          var ind = index[1];

          if (lastPositionX != null) {
            var indexOfLastPosition = lastPositionX[1];
            console.log(indexOfLastPosition + 'index of last position');
            const validMovement = validMove[indexOfLastPosition - 1];
            console.log(validMovement + 'validMovement');
            console.log(ind + 'ind');
            for (let x = 0; x < validMovement.length; x++) {
              if (ind == validMovement[x]) {
                validMovesforX(x_filled, x_outline, o_filled, o_outline);
                win();
                ties(ind);
                return;
              }
            }
            revertMove(indexOfLastPosition, 'X');
          }
          else {
            number_of_x += 1;
            x_turn.style.display = 'none';
            o_turn.style.display = 'block';

            x_filled.style.display = 'block';
            x_outline.style.display = 'none';
            o_filled.style.display = 'none';
            o_outline.style.display = 'none';
            win();
          }
        }
      }
    }
    else if (x_filled.style.display == 'block' && number_of_x == 3) {
      lastPositionX = x_filled.id;
      // making sure moves are valid
      x_filled.style.display = 'none';
      number_of_x -= 1;
    }
    else {
      console.log(number_of_x)
    }
  }
  //If it's O's turn
  else {
    console.log(number_of_o);
    // If it does not contain X or O already    
    if (x_filled.style.display == 'none' && o_filled.style.display == 'none' && number_of_o < 3) {
      // making sure a tile is moved from it's initial position to a NEW point
      if (lastPositionO == o_filled.id) {
        console.log("true");
      }
      else {
        if (number_of_o < 4) {
          var index = o_filled.id;
          var ind = index[1];

          if (lastPositionO != null) {
            var indexOfLastPosition = lastPositionO[1];
            console.log(indexOfLastPosition + 'index of last position');
            const validMovement = validMove[indexOfLastPosition - 1];
            console.log(validMovement + 'validMovement');
            console.log(ind + 'ind');
            for (let x = 0; x < validMovement.length; x++) {
              if (ind == validMovement[x]) {
                validMovesforO(x_filled, x_outline, o_filled, o_outline);
                winO();
                tiesO(ind);
                return;
              }
            }
            revertMove(indexOfLastPosition, 'O');
          }
          else {
            number_of_o += 1;
            x_turn.style.display = 'block';
            o_turn.style.display = 'none';

            x_filled.style.display = 'none';
            x_outline.style.display = 'none';
            o_filled.style.display = 'block';
            o_outline.style.display = 'none';
            winO();
          }
        }
      }
    }
    else if (o_filled.style.display == 'block' && number_of_o == 3) {
      console.log('reached here');
      lastPositionO = o_filled.id;
      console.log(lastPositionO);
      o_filled.style.display = 'none';
      number_of_o -= 1;
    }
  }
}
// logic for restarting the game
function restart() {
  close_dialog();
  for (x = 0; x < elementArray.length; x++) {
    elementArray[x].style.display = 'none';
  }
  for (x = 0; x < oOutlineArray.length; x++) {
    oOutlineArray[x].style.display = 'none';
  }
  for (x = 0; x < xOutlineArray.length; x++) {
    xOutlineArray[x].style.display = 'none';
  }
  for (x = 0; x < tileArray.length; x++) {
    tileArray[x].style.backgroundColor = '';
    tileArray[x].style.background = '';
  } 
  var score = document.getElementById('o_scores');
  cpu_score = 0;
  player1_score = 0;
  player2_score = 0;
  number_of_o = 0;
  number_of_x = 0;
  arrayTiesO = [];
  arrayTiesX = [];
  repeatedMovesX = 0;
  lastPositionX = null;
  lastPositionO = null;
  x_turn.style.display = 'block';
  o_turn.style.display = 'none';
  score.innerHTML = cpu_score;
}
// ensuring only valid moves are made
function validMovesforX(x_filled, x_outline, o_filled, o_outline) {
  number_of_x += 1;
  x_turn.style.display = 'none';
  o_turn.style.display = 'block';

  x_filled.style.display = 'block';
  x_outline.style.display = 'none';
  o_filled.style.display = 'none';
  o_outline.style.display = 'none';
}
// function for ensuring only valid moves are made
function validMovesforO(x_filled, x_outline, o_filled, o_outline) {
  number_of_o += 1;
  x_turn.style.display = 'block';
  o_turn.style.display = 'none';

  x_filled.style.display = 'none';
  x_outline.style.display = 'none';
  o_filled.style.display = 'block';
  o_outline.style.display = 'none';
}
// logic for winning a round
function win() {
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = xElementArray[winCondition[0]].style.display;
    let b = xElementArray[winCondition[1]].style.display;
    let c = xElementArray[winCondition[2]].style.display;
    if (a === 'none' || b === 'none' || c === 'none') {
      continue;
    }
    if (a === b && b === c) {
      var p2 = localStorage.getItem('player_two');
      switch (p2) {
        case 'PLAYER_TWO_X': 
          xElementArray[winCondition[0]].style.display = 'none';
          xElementArray[winCondition[1]].style.display = 'none';
          xElementArray[winCondition[2]].style.display = 'none';
          xOutlineArray[winCondition[0]].style.display = 'block';
          xOutlineArray[winCondition[1]].style.display = 'block';
          xOutlineArray[winCondition[2]].style.display = 'block';
          tileArray[winCondition[0]].style.backgroundColor = '#31C3BD';
          tileArray[winCondition[1]].style.backgroundColor = '#31C3BD';
          tileArray[winCondition[2]].style.backgroundColor = '#31C3BD';
          win_status.innerHTML = 'PLAYER 2 WINS!';
          winloss_dialog.style.display = 'flex';
          x_wins.style.display = 'flex';
          o_wins.style.display = 'none';
          break;
        case 'PLAYER_TWO_O':
          xElementArray[winCondition[0]].style.display = 'none';
          xElementArray[winCondition[1]].style.display = 'none';
          xElementArray[winCondition[2]].style.display = 'none';
          xOutlineArray[winCondition[0]].style.display = 'block';
          xOutlineArray[winCondition[1]].style.display = 'block';
          xOutlineArray[winCondition[2]].style.display = 'block';
          tileArray[winCondition[0]].style.backgroundColor = '#31C3BD';
          tileArray[winCondition[1]].style.backgroundColor = '#31C3BD';
          tileArray[winCondition[2]].style.backgroundColor = '#31C3BD';  
          win_status.innerHTML = 'PLAYER 1 WINS!';
          winloss_dialog.style.display = 'flex';
          x_wins.style.display = 'flex';
          o_wins.style.display = 'none';
          break;
        default: console.log('error with win function');
      }
      x_scores += 1;
      x_score_counter.innerHTML = x_scores;
      break
    }
  }
}
// win o
function winO() {

  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = oElementArray[winCondition[0]].style.display;
    let b = oElementArray[winCondition[1]].style.display;
    let c = oElementArray[winCondition[2]].style.display;
    if (a === 'none' || b === 'none' || c === 'none') {
      continue;
    }
    if (a === b && b === c) {
      var p2 = localStorage.getItem('player_two');
      switch (p2) {

        case 'PLAYER_TWO_X': 
        oElementArray[winCondition[0]].style.display = 'none';
        oElementArray[winCondition[1]].style.display = 'none';
        oElementArray[winCondition[2]].style.display = 'none';
        oOutlineArray[winCondition[0]].style.display = 'block';
        oOutlineArray[winCondition[1]].style.display = 'block';
        oOutlineArray[winCondition[2]].style.display = 'block';
        tileArray[winCondition[0]].style.backgroundColor = '#F2B137';
        tileArray[winCondition[1]].style.backgroundColor = '#F2B137';
        tileArray[winCondition[2]].style.backgroundColor = '#F2B137';
          win_status.innerHTML = 'PLAYER 1 WINS!';
          winloss_dialog.style.display = 'flex';
          x_wins.style.display = 'none';
          o_wins.style.display = 'flex';
          break;
        case 'PLAYER_TWO_O': 
        oElementArray[winCondition[0]].style.display = 'none';
        oElementArray[winCondition[1]].style.display = 'none';
        oElementArray[winCondition[2]].style.display = 'none';
        oOutlineArray[winCondition[0]].style.display = 'block';
        oOutlineArray[winCondition[1]].style.display = 'block';
        oOutlineArray[winCondition[2]].style.display = 'block';
        tileArray[winCondition[0]].style.backgroundColor = '#F2B137';
        tileArray[winCondition[1]].style.backgroundColor = '#F2B137';
        tileArray[winCondition[2]].style.backgroundColor = '#F2B137';
          win_status.innerHTML = 'PLAYER 2 WINS!';
          winloss_dialog.style.display = 'flex';
          x_wins.style.display = 'none';
          o_wins.style.display = 'flex';
          break;
        default: console.log('error with win function');
      }
      o_scores += 1;
      o_score_counter.innerHTML = o_scores;
      break
    }
  }
}
// opening te dialog for restart
function display_dialog() {
  restart_dialog.style.display = 'flex';
}
// closing the dialog for restart
function close_dialog() {
  restart_dialog.style.display = 'none';
}
// closes the dialog for win/loss
function close_winloss_dialog() {
  winloss_dialog.style.display = 'none';
  resume();
}
function close_game_tied_dialog() {
  game_tied_dialog.style.display = 'none';
  resume();
}
// resumes the game for another round
function resume() {
  for (x = 0; x < elementArray.length; x++) {
    elementArray[x].style.display = 'none';
  }
  for (x = 0; x < oOutlineArray.length; x++) {
    oOutlineArray[x].style.display = 'none';
  }
  for (x = 0; x < xOutlineArray.length; x++) {
    xOutlineArray[x].style.display = 'none';
  }
  for (x = 0; x < tileArray.length; x++) {
    tileArray[x].style.backgroundColor = '';
    tileArray[x].style.background = '';
  } 
  number_of_o = 0;
  number_of_x = 0;
  lastPositionX = null;
  lastPositionO = null;
  repeatedMovesX = 0;
  arrayTiesX = [];
  arrayTiesO = [];
  ties_scores = 0;
  x_turn.style.display = 'block';
  o_turn.style.display = 'none';
}
// quitting the game
function quit() {
  window.location = 'index.html';
}
// when an invalid move is made, the last move is reverted
function revertMove(indexOfLastPosition, currentPlayer) {
  alert('invalid move!');
  switch (currentPlayer) {
    case 'X': xElementArray[indexOfLastPosition - 1].style.display = 'block';
      number_of_x += 1;
      break;
    case 'O': oElementArray[indexOfLastPosition - 1].style.display = 'block';
      number_of_o += 1;
      break;
    default: console.log('error reverting move');
  }
}
// changing the board state based on the current player
function nextTurn() {
  if (x_turn.style.display == 'none') {
    x_turn.style.display = 'block';
    o_turn.style.display = 'none';
  }
  else {
    x_turn.style.display = 'none';
    o_turn.style.display = 'block';
  }
}
function ties(currentPosition) {
  var indexOfLastPosition = lastPositionX[1];
  var joinedString = indexOfLastPosition + currentPosition;
  console.log(arrayTiesX);

  arrayTiesX.push(joinedString);
  if (arrayTiesX.length > 1) {
    var firstString = arrayTiesX[arrayTiesX.length - 1];
    var secondString = arrayTiesX[arrayTiesX.length - 2]
    var reversedString = reverseString(secondString);
    if (firstString == reversedString) {
      repeatedMovesX += 1;
    }
    else {
      repeatedMovesX = 0;
      repeatedMovesO = 0;
      arrayTiesX = [];
      arrayTiesO = [];
    }
    if (repeatedMovesX == 4) {
      ties_scores += 1;
      ties_score_counter.innerHTML = ties_scores;
      console.log('tied');
      game_tied_dialog.style.display = 'flex';
    }
  }
}
function tiesO(currentPosition) {
  var indexOfLastPosition = lastPositionO[1];
  var joinedString = indexOfLastPosition + currentPosition;
  console.log(arrayTiesO);

  arrayTiesO.push(joinedString);
  if (arrayTiesO.length > 1) {
    var firstString = arrayTiesO[arrayTiesO.length - 1];
    var secondString = arrayTiesO[arrayTiesO.length - 2]
    var reversedString = reverseString(secondString);
    if (firstString == reversedString) {
      repeatedMovesO += 1;
      console.log(repeatedMovesO);
    }
    else {
      console.log('nnnnn');
      repeatedMovesO = 0;
      repeatedMovesX = 0;
      arrayTiesX = [];
      arrayTiesO = [];
    }
    if (repeatedMovesO == 4) {
      ties_scores += 1;
      ties_score_counter.innerHTML = ties_scores;
      console.log('tied');
      game_tied_dialog.style.display = 'flex';
    }
  }
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
