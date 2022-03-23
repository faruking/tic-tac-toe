 // variables

 var cpu_score = 0;
 var player1_score = 0;
 var player2_score = 0;
 var o_turn = document.getElementById('o_turn');
 var x_turn = document.getElementById('x_turn');
 var number_of_x = 0;
 var number_of_o = 0;
 var lastPosition = null;
 var restart_dialog = document.getElementById('restart_dialog');
 var winloss_dialog = document.getElementById('winloss_dialog');
 var win_status = document.getElementById('win_status');
 //homepage variables




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

 var elementArray = [x1_filled, x2_filled, x3_filled, x4_filled, x5_filled, x6_filled, x7_filled, x8_filled, x9_filled, o1_filled, o2_filled, o3_filled, o4_filled, o5_filled, o6_filled, o7_filled, o8_filled, o9_filled];
 var xElementArray = [x1_filled, x2_filled, x3_filled, x4_filled, x5_filled, x6_filled, x7_filled, x8_filled, x9_filled];
 var oElementArray = [o1_filled, o2_filled, o3_filled, o4_filled, o5_filled, o6_filled, o7_filled, o8_filled, o9_filled];

 // functions

//Other functions
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
 function onMouseClick(x, image, o, o_outline,) {
   var score = document.getElementById('cpu_scores');
   var x_filled = document.getElementById(x);
   var x_outline = document.getElementById(image);
   var o_outline = document.getElementById(o_outline);
   var o_filled = document.getElementById(o);

   // If it's x's turn
   if (x_turn.style.display != 'none') {
     // If it does not contain O or X already
     if (o_filled.style.display == 'none' && x_filled.style.display == 'none' && number_of_x < 3) {
       console.log(lastPosition + 'lastposition');
       // making sure a tile is moved from it's initial position to a NEW point
       if (lastPosition == x_filled.id) {
         console.log("true");
       }
       else {
         
         //making sure X is not more than three on the board
         if (number_of_x < 4) {
           var index = x_filled.id;
           var ind = index[1];
           if (lastPosition != null) {
             var indexOfLastPosition = lastPosition[1];
            switch (indexOfLastPosition) {
                 case '1': if (ind == '2' || ind == '4' || ind == '5') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                   console.log('it works');
                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '2': if (ind == '1' || ind == '3' || ind == '5' || ind == '4' || ind == '6') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                   console.log('it works');

                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '3': if (ind == '2' || ind == '6' || ind == '5') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '4': if (ind == '1' || ind == '5' || ind == '7' || ind == '2' || ind == '8') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                   console.log('it works');

                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '5': if (ind == '1' || ind == '4' || ind == '9' || ind == '6' || ind == '2' || ind == '8' || ind == '3' || ind == '7') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                   console.log('it works');

                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '6': if (ind == '3' || ind == '9' || ind == '5' || ind == '2' || ind == '8') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '7': if (ind == '8' || ind == '4' || ind == '5') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '8': if (ind == '7' || ind == '9' || ind == '5' || ind == '4' || ind == '6') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 case '9': if (ind == '6' || ind == '8' || ind == '5') {
                   validMovesforX(x_filled, x_outline, o_filled, o_outline);
                   win();
                 }
                 else {
                   // TODO
                   console.log(lastPosition); 
                   revertMove(indexOfLastPosition);
                   
                 };
                   break
                 default: console.log('error with valid moves');
               }
             }
           else {
             number_of_x += 1;
             x_turn.style.display = 'none';
             o_turn.style.display = 'block';

             x_filled.style.display = 'block';
             x_outline.style.display = 'none';
             o_filled.style.display = 'none';
             o_outline.style.display = 'none';
           }
           // console.log(ind + 'index');
         }
       }
     }
     else if (x_filled.style.display == 'block' && number_of_x == 3) {
       lastPosition = x_filled.id;
       // validMovesforX(lastPosition);
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
     // If it does not contain X or O already    
     if (x_filled.style.display == 'none' && o_filled.style.display == 'none' && number_of_o < 3) {
       console.log(lastPosition);
       // making sure a tile is moved from it's initial position to a NEW point
       if (lastPosition == o_filled.id) {
         console.log("true");
       }
       else {
         number_of_o += 1;
         if (number_of_o < 4) {
           x_turn.style.display = '';
           o_turn.style.display = 'none';

           x_filled.style.display = 'none';
           x_outline.style.display = 'none';
           o_filled.style.display = 'block';
           o_outline.style.display = 'none';
         }
       }

     }
     else if (o_filled.style.display == 'block' && number_of_o == 3) {
       lastPosition = o_filled.id;
       console.log(lastPosition);
       o_filled.style.display = 'none';
       number_of_o -= 1;
     }
   }
   cpu_score += 1;
   score.innerHTML = cpu_score;
 }
 function restart() {
   close_dialog();
   for (x = 0; x < elementArray.length; x++) {
     elementArray[x].style.display = 'none';
   }

   var score = document.getElementById('cpu_scores');
   cpu_score = 0;
   player1_score = 0;
   player2_score = 0;
   number_of_o = 0;
   number_of_x = 0;
   lastPosition = null;
   x_turn.style.display = 'block';
   o_turn.style.display = 'none';
   score.innerHTML = cpu_score;

 }
 function validMovesforX(x_filled, x_outline, o_filled, o_outline) {
   number_of_x += 1;
   x_turn.style.display = 'none';
   o_turn.style.display = 'block';

   x_filled.style.display = 'block';
   x_outline.style.display = 'none';
   o_filled.style.display = 'none';
   o_outline.style.display = 'none';

 }
 function validMovesforO(x_filled, x_outline, o_filled, o_outline) {
   x_turn.style.display = 'block';
   o_turn.style.display = 'none';

   x_filled.style.display = 'none';
   x_outline.style.display = 'none';
   o_filled.style.display = 'block';
   o_outline.style.display = 'none';

 }
 function win() {
   var array = [];
   for (x = 0; x < xElementArray.length; x++) {
     
     var display = xElementArray[x].style.display;
      array.push(display);
     
   }
   console.log(array);
     if(
       (array[0] == 'block' && array[1] == 'block' && array[2] == 'block') 
     || (array[3] == 'block' && array[4] == 'block' && array[5] == 'block')
     || (array[6] == 'block' && array[7] == 'block' && array[8] == 'block')
     || (array[0] == 'block' && array[3] == 'block' && array[6] == 'block')
     || (array[1] == 'block' && array[4] == 'block' && array[7] == 'block')
     || (array[2] == 'block' && array[5] == 'block' && array[8] == 'block')
     || (array[0] == 'block' && array[4] == 'block' && array[8] == 'block')
     || (array[2] == 'block' && array[4] == 'block' && array[6] == 'block')
  ){
    console.log(player_two);
    switch(player_two){
     
      case 'PLAYER_TWO_X': win_status.innerHTML = 'PLAYER 2 WINS!'; 
      winloss_dialog.style.display = 'flex';
      break;
      case 'PLAYER_TWO_O': win_status.innerHTML = 'PLAYER 1 WINS!'; 
      winloss_dialog.style.display = 'flex';
      break; 
      case 'CPU_X': win_status.innerHTML = 'OH NO, YOU LOST...'; 
      winloss_dialog.style.display = 'flex';
      break;
      case 'CPU_O': win_status.innerHTML = 'YOU WIN!'; 
      winloss_dialog.style.display = 'flex';
      break;
      default: console.log('error with win function');
    }
     

   }
 }
 function display_dialog() {
   restart_dialog.style.display = 'flex';
 }
 function close_dialog() {
   restart_dialog.style.display = 'none';
 }
 function close_winloss_dialog(){
   winloss_dialog.style.display = 'none';
   resume();
 }
 function resume() {
   for (x = 0; x < elementArray.length; x++) {
     elementArray[x].style.display = 'none';
   }

   var score = document.getElementById('cpu_scores');
   // cpu_score = 0;
   // player1_score = 0;
   // player2_score = 0;
   number_of_o = 0;
   number_of_x = 0;
   lastPosition = null;
   x_turn.style.display = 'block';
   o_turn.style.display = 'none';
   score.innerHTML = cpu_score;

 }
 function quit(){
   window.location = 'index.html';
 }
 function revertMove(indexOfLastPosition){
   alert('invalid move!');
   switch(indexOfLastPosition){
     case '1':x1_filled.style.display = 'block';
             number_of_x+=1;
     break;
     case '2':x2_filled.style.display = 'block';
             number_of_x+=1;
     break;
     case '3':x3_filled.style.display = 'block';
             number_of_x+=1;
     break;
     case '4':x4_filled.style.display = 'block';
             number_of_x+=1;
     break;
     case '5':x5_filled.style.display = 'block';
             number_of_x+=1;
     break;   
     case '6':x6_filled.style.display = 'block';
             number_of_x+=1;
     break;  
     case '7':x7_filled.style.display = 'block';
             number_of_x+=1;
     break;   
     case '8':x8_filled.style.display = 'block';
             number_of_x+=1;
     break;
     case '9':x9_filled.style.display = 'block';
             number_of_x+=1;
     break;
   }
   
 }
