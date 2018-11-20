// Possible answers to the game
var brands = [
    "audi",
    "lexus",
    "ferrari",
    "bentley",
    "pagani",
    "ford",
    "subaru",
    "bmw",
    "acura"
];

var guesses = [
    10
];

var guessedLetters = [];

// var guess = //keystroke


// Randomly selects an answer to the game
var word = brands[Math.floor(Math.random() * brands.length)];

// Creates the unanswered game based on the answers word length
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Any keystroke starts the game

window.onkeypress = function gameStart() {
    document.getElementById("test").textContent = answerArray.join(" ");
    document.getElementById("answer").textContent = word;
    document.getElementById("remain").textContent = "Remaining guesses " + guesses--;
    document.onkeyup = function(event) {
    var guessedLetters = event.key;
    console.log(guessedLetters);
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guessedLetters) {
    console.log("Right");}}}}
    // if (word[0] == guessedLetters) {
    //     console.log("Right");
    //     console.log("Wrong");
    // }
    // else if (word[1] == guessedLetters) {
    //     console.log("Right");
    // }
    // else if (word[2] == guessedLetters) {
    //     console.log("Right");
    // }
    // else if (word[3] == guessedLetters) {
    //     console.log("Right");
    // }
    // else if (word[4] == guessedLetters) {
    //     console.log("Right");
    // }
    // else if (word[5] == guessedLetters) {
    //     console.log("Right");
    // }
    // else if (word[6] == guessedLetters) {
    //     console.log("Right");
    //     document.getElementById("test").textContent = answerArray[guessedLetters];
    // }
 





// for (var j = 0; j < word.length; j++) {
//     if (word[j] === guessedLetters) {
//     console.log("Right");}

// document.onkeyup = function(event) {
//     var userGuess = event.key;
     
     
//             for (var j = 0; j < word.length; i++) {
//             if (word[j] === userGuess)
//             console.log("Right");
        
    



//  document.onkeyup = function(event) {
//     var userGuess = event.key;
//     if (userGuess === word[i]) {
//         console.log(userGuess);
//     }
//     }
    // for (var j = 0; j < word.length; i++) {
    //     if (word[j] === userGuess) {
    //         answerArray[j] = userGuess;
    //     }
    // }}
// Takes user inputted keystroke
// window.onkeyup = function(event) {
//     var userGuess = event.key;
//     alert("You pressed " + userGuess);

//   };


// Checks if user's keystroke is in the answer

// If so, the letter appears in the answer and the user's guesses remaining goes down by one

// If not, the user's guesses remaining goes down by one, and incorrect letters displayed

// If user guesses answer before guesses remaining gets to zero, they win and are shown a picture and a fact

// If user does not guess the answer before remaining guesses gets to zero, they are told Game Over


// console.log(word);
// console.log(answerArray);



// Shows
// var remainingLetters = word.length;
