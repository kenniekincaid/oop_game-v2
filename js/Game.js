//Treehouse FSJS Techdegree
 //Project 4 - OOP Game App
 //Game.js
//PURPOSE: to create a Game class methods for starting and ending the game, handling interactions,
//...getting a random phrase, checking for a win, and removing a life from the scoreboard.

//Declare the Game class...

//const game = new Game();

class Game {
    constructor(){ //constructor method...does not receive any parameters
        this.missed = 0; //initial value is zero.
        this.phrases = ['Do more than is required', 'We are what we believe', 'Courage is to think for yourself', 'The best revenge is success', 'Everything starts with a dream']; //initialized to an emptry array.
        this.activePhrase = `null`; //the phrase currently in play; initial value of `null`.
    }
    getRandomPhrase () { //Selects a random phrase from the phrases property.
        const phraseIndex = Math.floor(Math.random() * this.phrases.length); //checks the complete list of arrays
        return phraseIndex; //returns array from phrase index.
    }
} // Codes are working up to this point. Committed to GitHub!


