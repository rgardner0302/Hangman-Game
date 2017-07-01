// /*----Random Words-------*/



var words = ["alabma", "utah", "byu", "notre-dame", "michigan", "ohio-state", "florida", "washington-state"];
 

var word = words[Math.floor(Math.random() * words.length)];

/* set up Anser Array */

var answerArray = [];
  for (var i = 0; i < word.length; i ++) {
    answerArray[i] = "_";
  }

var word = document.getElementById('blank').innerHTML = answerArray.join(" ");

  // Letters  Guessed 

//   onkeyup function() {

//     for (var i = 0; i < randWord.length; i++) {
//     if (randWord[i] === pushed) { 
//         blankWord[i] = pushed + " "; 
//         PrintPage(); 
//     }
// }
//   }

  // var lettersGuessed = word.length

  // while (remainingLetters > 0) {
    // var word = document.getElementById('lettersGuessed').innerHTML = answerArray.join(" ");

//     var guess = prompt("Guess a letter or click cancel to quit");
//     if('guess' === null) {

//       break
//     } else if (guess.length !== 1) {

//       alert('please enter a single letter');
//     } else {
//       for (var j = 0; j<word.length; i++) {
    
//         if(word[j] === guess) {

//           answerArray[j] = lettersGuessed;
//           remainingLetters--;
//         }
 
//   }
// }
// }

// for (var i = 0; i < randWord.length; i++) {
//     if (randWord[i] === pushed) { //3
//         blankWord[i] = pushed + " "; //4
//         PrintPage(); //5
//     }
// }





// function PrintPage() {//Prints out updated stats on screen
//   document.getElementById("blank").innerHTML = blankWord.join("");
//   document.getElementById("wins").innerHTML = wins;
//   document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
//   document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
//   document.getElementById("image").innerHTML = image;
// }





// $ ( document ).ready(function()) {

//   var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_"]

//   var word ;              // Selected word
//   var guess ;             // Geuss
//   var geusses = [ ];      // Stored geusses
//   var lives ;             // Lives
//   var counter ;           // Count correct geusses
//   var space; 


//  console.log(letters);

//   for (var i = 0; i <length 1; i ++;  {
//     var letterBtn = $('<button>');
//     b.addClass('letter-button letter letter-button-color' );
  
//   }
// }
// }
// var++d
// var b = $('<button>');ichigan','byu','utah','notre dame','ohio state', 'mississippi', 'alabama'];

// function random() {

//  var randWord = words[Math.floor(Math.random() * words.length)];
//  console.log(word);
// }

// random(words);

// var blankWord = new Array(randWord.length); //1
// for (var i = 0; i < randWord.length; i++) { //2
//   blankWord[i] = "_ ";
// }

// }

// var answerArray = [];
// 	for (var i = 0; i < word.length; i++) {

//     answerArray[i] = "_";

//   }

//   function myFunction() {

//     var answerArray = [i];
// 	for (var i = 0; i < word.length; i++) {

//     answerArray[i] = "_";


// 	document.getElementById("wins").innerHTML;
// }


//   var remainingLetters = word.length;

//  // prompt("did this work?");


// function myFunction() {


// 	document.getElementById("wins").innerHTML = "Hello World";
// }


