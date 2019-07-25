// Treehouse FSJS Techdegree
//Project 4 - OOP Game App
// app.js
//FILE PURPOSE: Create a new instance of the `Game` class and add event listeners 
// for the start button and onscreen keyboard buttons


// Created instance of the of the game class.
const game = new Game();

//Added click event listener to the Start Button and called startGame.
$("#btn__reset").on('click', () => game.startGame()); //get element by id and add click event.
//startGame method called on game variable.

//Added click to start button automatically whenever the 'ENTER' key is pressed.
// $('#overlay').keypress((event) => {
//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     if(keycode == 13){
//         game.startGame();
//         event.stopPropagation();
//         return false;
//     }
// });

//User mouse 'click' creates onscreen keyboard functionality.
$(".key").on('click', (e) => game.handleInteraction($(e.target).text()));

//EXTRA CREDIT! User keyboard creates onscreen keyboard functionality.
$('body').on('keyup', (e) => {
    const keycode = (event.keyCode ? event.keyCode : event.which); //variable containing boolean value... program doesn't like event.keyCode sometimes.
    if($('#overlay').is(":visible")) {
        if(keycode == 13){ //the enter key is the 13th key; if the enter key is pressed...
            game.startGame(); //the overlay will count it the same as the button being clicked and game will start.
            event.stopPropagation(); //this will stop the key up from stacking events on all subsequent events
            return false;
        }
    } else { //otherwise..
        game.handleInteraction(e.key);//events will take place when user interacts by clicking keys. 
    }
});

  




