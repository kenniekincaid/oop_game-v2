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
    checkForWin() {
        const playerLetters = $('.hide').length;     
       
        if (playerLetters == 0) { // if player selected all letters in the phrase
            return true;
        }
        return false;
    }

    removeLife() {
        const $lives = $('img'); //assigned heart image to lives variable
        const $livesLost = $lives[this.missed]; //assigned this missed to lives lost
        $livesLost.src = "images/lostHeart.png"; //added source to lives lost
            
        this.missed ++; //Adding a missed life heart to the game.
        
        if(this.missed === 5) { //game lost if all 5 missed hearts are added.
            this.gameOver(false);
        }
    }

    gameOver(gameWon) {
        let $overlay = $('#overlay'); 
        const $gameOver = $('#game-over-message');
        $overlay.show().removeClass("start"); //removes the start class so the lose or win classes can be appended

        if (gameWon == true) {
            $overlay.removeClass("start").addClass("win");
            $gameOver.empty().text("YOU WON!")
        } else {
            $overlay.removeClass("start").addClass("lose");
            $gameOver.empty().text("TRY AGAIN!");
        }
        // this.activePhrase = "";

        $(".key").attr("disabled", false).removeClass("chosen").removeClass("wrong"); //reset letters
        $("tries .img").attr("src", "images/liveHeart.png"); //reset lives
    
        this.resetGame();
    }

    handleInteraction(letter) { //Use my variables.... // needs to be able to use .key for extra credit part.
        let button = $(`.key:contains(${letter})`);
        button.attr("disabled", true);
        if (!this.activePhrase.checkLetter(letter)) {
            button.addClass("wrong");
            this.removeLife();
        } else {
            button.addClass("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        }
    }

    resetGame() {
        this.activePhrase = null;
            $(".key").attr("disabled", false).removeClass("chosen").removeClass("wrong"); //reset letters
            $("tries .img").attr("src", "images/liveHeart.png"); //reset lives
    }
}