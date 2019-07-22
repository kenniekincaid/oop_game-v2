//Treehouse FSJS Techdegree
 //Project 4 - OOP Game App
 //Game.js
//PURPOSE: to create a Game class methods for starting and ending the game, handling interactions,
//...getting a random phrase, checking for a win, and removing a life from the scoreboard.

//Declare the Game class...
class Game {
    constructor(){ //constructor method...does not receive any parameters
        this.missed = 0; //initial value is zero.
        this.phrases = [
            new Phrase('Go the extra mile'),
            new Phrase('Always challenge yourself'),
            new Phrase('Actions speak volumes'), 
            new Phrase('Think for yourself'), 
            new Phrase('Get revenge with success'), 
            new Phrase('Be your unique self'),
            new Phrase('We are what we believe'),
            new Phrase('Never give up'),
            new Phrase('Faith evidences hope'),
            new Phrase('Effort stimulates growth'),
            new Phrase('Take the unbeaten path'),
            new Phrase('Dreams are the genesis'),
            new Phrase('Sunshine after the rain'),
            new Phrase('I love Micah'),
            new Phrase('I love Briceia'),
            new Phrase('A friend like a brother'),
            new Phrase('God is love'),
            new Phrase('Eyes on the prize'),
            new Phrase('Haters are envious fans')
        ];
        this.activePhrase = null; //the phrase object currently in play; initial value of null.
    }

    //Getting Random Phrase: 
    getRandomPhrase() {
        const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length); //checks the complete list of arrays
        return this.phrases[randomPhraseIndex]; //returns random phrases from the phrase index.
    }

    //Starting the game:
    startGame() {
        $('#overlay').hide(); //hides the start screen overlay;
        this.activePhrase = this.getRandomPhrase();  // gets a random phrase
        this.activePhrase.addPhraseToDisplay();
    }
}