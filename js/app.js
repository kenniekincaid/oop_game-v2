// Treehouse FSJS Techdegree
//Project 4 - OOP Game App
// app.js
//FILE PURPOSE: Create a new instance of the `Game` class and add event listeners 
// for the start button and onscreen keyboard buttons

const game = new Game(); //DO NOT DELETE! Created instance of the Game class.

        //TEST CODE WORKING! text appears in console in lower case.
            // const phrase = new Phrase('Life is like a box of chocolates');
            // console.log(`Phrase - phrase: ${phrase.phrase}`);

        //TEST CODE WORKING! phrases appear in lower case with index.
            // game.phrases.forEach((phrase, index) => {
            //     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
            // });
        //TEST CODE WORKING!
            // const logPhrase = (phrase) => {
            //     console.log(`Phrase - phrase: `, phrase.phrase);
            // };
            //     logPhrase(game.getRandomPhrase());
            //     logPhrase(game.getRandomPhrase());
            //     logPhrase(game.getRandomPhrase());
            //     logPhrase(game.getRandomPhrase());
            //     logPhrase(game.getRandomPhrase());
        // TEST CODE WORKING! 
            // game.getRandomPhrase().addPhraseToDisplay();

//Event listener for the Start Button.
$("#btn__reset").on('click', (e) => game.startGame(e)); //get element by id and add click event.
//startGame method called on game variable.

        //TEST CODE WORKING!
            // game.startGame();
            // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

$(".key").on('click', (event) => game.handleInteraction($(event.target).text()));

$('body').on('keyup', (event) => game.handleInteraction(event.key));

  




