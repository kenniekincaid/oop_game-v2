// Treehouse FSJS Techdegree
//Project 4 - OOP Game App
// app.js
//FILE PURPOSE: Create a new instance of the `Game` class and add event listeners 
// for the start button and onscreen keyboard buttons

//Step1
// const game = new Game(); //DO NOT DELETE!
// created instance of the Game class.

        //TEST CODE WORKING! text appears in console in lower case.
            // const phrase = new Phrase('Life is like a box of chocolates');
            // console.log(`Phrase - phrase: ${phrase.phrase}`);

        //TEST CODE WORKING! phrases appear in lower case with index.
            // game.phrases.forEach((phrase, index) => {
            //     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
            // });
        //TEST CODE: shows undefined...
            const logPhrase = (phrase) => {
                console.log(`Phrase - phrase: `, phrase.phrase);
            };

            const game = new Game();

            logPhrase(game.getRandomPhrase());
            logPhrase(game.getRandomPhrase());
            logPhrase(game.getRandomPhrase());
            logPhrase(game.getRandomPhrase());
            logPhrase(game.getRandomPhrase());


