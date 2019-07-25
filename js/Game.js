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
            new Phrase('Always go the extra mile'),
            new Phrase('Accept risks and challenges'),
            new Phrase('Actions speak volumes'), 
            new Phrase('Think for yourself'), 
            new Phrase('The best revenge is success'), 
            new Phrase('Be your unique self'),
            new Phrase('We are what we believe'),
            new Phrase('Never give up'),
            new Phrase('Faith evidences hope'),
            new Phrase('Effort stimulates growth'),
            new Phrase('Take the unbeaten path'),
            new Phrase('Dare to dream'),
            new Phrase('Sunshine comes after the rain'),
            new Phrase('Be true to yourself'),
            new Phrase('Dare to be different'),
            new Phrase('Bad company corrupts good character'),
            new Phrase('The definition of love is God'),
            new Phrase('All eyes on the prize'),
            new Phrase('Your haters are your biggest fans'),
            new Phrase('Live life to the fullest'),
            new Phrase('Live laugh love'),
            new Phrase('Be kind to yourself'),
            new Phrase('Laughter is the best medicine'),
            new Phrase('Tears cleanse the soul'),
            new Phrase('Boldly face your fears'),
            new Phrase('Nothing is impossible with Christ'),
            new Phrase('We are our biggest enemy'),
            new Phrase('Imagine it and do it'),
            new Phrase('Blood is thicker than water')
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

    removeLife() { // Assigned lost heart image to a variable. Image e to be added with each missed letter
        const $lives = $('img'); //assigned heart image to lives variable
        const $livesLost = $lives[this.missed];
        // $livesLost.src = images.lostHeart.png;
        $livesLost.src = $("src", "images/lostHeart.png")

        this.missed ++; //Adding a missed life
        
        if(this.missed === 5) { //game lost if all 5 missed hearts are added.
            this.gameOver(false);
            this.removeLife();
        }
    }

    gameOver(gameWon) {
        const $overlay = $('#overlay'); 
        const $gameOver = $('#game-over-message');
        $overlay.show().removeClass("start"); //removes the start class so the lose or win classes can be appended

        if (gameWon == true) {
            $overlay.removeClass("start").addClass("win");
            $gameOver.empty().text("YOU WON!")
        } else {
            $overlay.removeClass("start").addClass("lose");
            $gameOver.empty().text("TRY AGAIN!");
        } 
        this.resetGame(new Game);
    }

    handleInteraction(letter) { //Use my variables.... // needs to be able to use .key for extra credit part.
        const button = $(`.key:contains(${letter})`); //keyboard buttons
        button.attr("disabled", true);
        if (!this.activePhrase.checkLetter(letter)) {//If the letter chosen by the user does not match the active phrase
            button.addClass("wrong"); //apply css styling for .wrong to the key.
            this.removeLife(); // and a life is removed.
        } else {
            this.activePhrase.showMatchedLetter(letter); //otherwise, the matched letter is shown and...
            button.addClass("chosen"); //css styling for .chosen is applied to the key.            
            if(this.checkForWin()) {
                this.gameOver(true); //the Winning message overlay will show.
            }
        }
    }

    resetGame() { //Reset the gameboard between games. "Start Game" button will load a new game.
        //Reset Active Phrase.
        this.activePhrase = null;
        
        // Reset lives.
        this.missed == 0;

        //Remove all 'li' elements from the Phrase 'ul' element.
        $('#phrase ul li').remove(); //remove letter list items from the phrase section.

        //Enable all of the onscreen keyboard buttons and update ech to use the 'key' CSS class and not
            //use the 'chosen' or 'wrong' CSS classes.
        $('.key').attr("disabled", false).removeClass("chosen wrong");

        //Reset all of the heart images (players lives) in the scoerboard and at the bottom of the 
            //gameboard to display the 'liveHeart.png' image. 
        $(".tries img").attr("src", "images/liveHeart.png"); //reset lives
        
        
    }
}