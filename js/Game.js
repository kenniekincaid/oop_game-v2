//Treehouse FSJS Techdegree
 //Project 4 - OOP Game App
 //Game.js
//PURPOSE: to create a Game class methods for starting and ending the game, handling interactions,
//...getting a random phrase, checking for a win, and removing a life from the scoreboard.

//Declare the Game class...
class Game {
    constructor(){ //constructor method...does not receive any parameters
        this.missed = 0; //initial value is zero.
        this.phrases = [new Phrase('Go the extra mile'),
            new Phrase('Do more than is required'),
            new Phrase('Actions speak louder than words'), 
            new Phrase('Courage is thinking for yourself'), 
            new Phrase('The best revenge is success'), 
            new Phrase('Everything starts with a dream'),
            new Phrase('Be your own unique self'),
            new Phrase('We are what we believe'),
            new Phrase('Look up and never give up'),
            new Phrase('Faith gives evidence to hope'),
            new Phrase('Challenges stimulate growth'),
            new Phrase('You exist because you are needed'),
            new Phrase('Everything starts with a dream')]
        this.activePhrase = null; //the phrase object currently in play; initial value of null.
    }

    //Getting Random Phrase: 
    getRandomPhrase() {
        const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length); //checks the complete list of arrays
        return randomPhraseIndex; //returns random phrases from the phrase index.
    };



}