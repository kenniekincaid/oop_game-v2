// Treehouse FSJS Techdegree
//Project 4 - OOP Game App
// app.js
//FILE PURPOSE: Create a new instance of the `Game` class and add event listeners 
// for the start button and onscreen keyboard buttons


//Created instance of the of the game class.
const game = new Game();

//Adds functionality to the Start Game button.
$("#btn__reset").on('click', () => game.startGame()); //get element by id and add click event.
//startGame method called on game variable.

//EXTRA CREDIT: Keyboard to onscreen keyboard functionality.
$(".key").on('click', (e) => game.handleInteraction($(e.target).text()));

//EXTRA EXTRA CREDIT: Enter key starts game!
$('body').on('keyup', (e) => {
    const keycode = (event.keyCode ? event.keyCode : event.which); //variable containing boolean value... program doesn't like event.keyCode sometimes.
    if($('#overlay').is(":visible")) {
        if(keycode == 13){ //the enter key is the 13th key; if the enter key is pressed...
            game.startGame(); //game will start b/c the Enter key counts as a button click.
            event.stopPropagation(); //stops subsequent events from stacking up Enter keypress.
            return false;
        }
    } else {
        game.handleInteraction(e.key);//otherwise, events occur with user interaction. 
    }
});

  




