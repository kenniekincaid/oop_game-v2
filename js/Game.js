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
            new Phrase('Challenge yourself'),
            new Phrase('Actions speak volumes'), 
            new Phrase('Think for yourself'), 
            new Phrase('The best revenge is success'), 
            new Phrase('Be your unique self'),
            new Phrase('We are what we believe'),
            new Phrase('Never give up'),
            new Phrase('Faith evidences hope'),
            new Phrase('Effort stimulates growth'),
            new Phrase('Take the unbeaten path'),
            new Phrase('Dreams are the genesis'),
            new Phrase('Sunshine comes after the rain'),
            new Phrase('Be true to yourself'),
            new Phrase('Dare to be different'),
            new Phrase('Good company leads to good character'),
            new Phrase('God is the epitome of love'),
            new Phrase('All eyes on the prize'),
            new Phrase('Your haters are your fans'),
            new Phrase('Water is thinner than blood')
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
    } //Codes are working up to this point!


//USER INTERACTION:
    handleInteraction(event) {
       let letter  = $(event.target).text();

       $(event.target).prop("disabled", true);

        if(this.activePhrase.checkLetter(letter)) {
            $(event.target).addClass("chosen");
            this.activePhrase.showMatchedLetter(letter);
                if(this.checkForWin()) {
                    this.gameOver();
                }
        } else {
            $(event.target).addClass("wrong");
            this.removeLife();
    
        }
    }

    removeLife() {
        const $lives = $('#scoreboard li img');
        const $livesLost = $lives[this.missed];

        $livesLost.attr("src", "images/lostHeart.png");
            this.missed += 1;
        
        if(this.missed === 5) {
            this.gaveOver();
        }
    }

    checkForWin() {
        return $('phrase.ul.hide').length === 0; //Boolean to test if true for win or false for lose.
    }

    gameOver() {
        let $overlay = $('#overlay');
        const $gameOver = $('#game-over-message');
        
        $overlay.show().removeClass("start"); //removes the start class so the lose or win classes can be appended

        if(this.missed === 5) {
            $overlay.addclass("lose");
            $gameOver.text("TRY AGAIN! You lose.");
        } else {
            $overlay.removeClass("lose").addClass("win");
            $gameOver.text("CONGRATS WINNER!")
        }
    }

    resetGameboard() {
        const $keypad = $('#qwerty .key');
        $('#scoreboard li').prop("src", 'images/liveHeart.png').removeClass("lost");

        $overlay.removeClass("lose").removeClass("win");
        $keypad.removeClass("chosen").removeClass("wrong").prop("disabled", false);
    }

}