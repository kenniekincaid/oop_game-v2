// Treehouse FSJS Techdegree
// Project 4 - OOP Game App
// Phrase.js
//PURPOSE: To create a Phrase class to handle the creation of phrases.

//DECLARE PHRASE CLASS:
class Phrase {
    constructor(phrase) { //The phrase constructor function.
        this.phrase = phrase.toLowerCase(); //set to the phrase parameter; covert to lower case.
    }

    //loop through phrases, split each into characters, & append characters to placeholders based on class type.
    addPhraseToDisplay() {
        const phraseSplit = this.phrase.split(''); //Process that will split the phrases:
        const $ul = $('#phrase ul'); //Create list items and append to parent ul:

        phraseSplit.forEach((character) => { //conditional statement; when to do what...
            if (character === ' ') { //if the character is a space...
                $ul.append(`<li class="space"> </li>`); //...create and append the space li to the #phrase ul.
            } else {
                $ul.append(`<li class="hide letter ${character}">${character}</li>`); //append phrase letters.
            }
        });
    }

    //HANDLING INTERACTIONS:
    checkLetter(letter) {//Check if letter selected by user is in the phrase...
        for(let i = 0; i < this.phrase.length; i++) {//run through the entire phrase to...
            if (this.phrase[i] === letter) { //check for matching letters; could've used "if(this.phrase.includes(letter)).
                return true; //matching letter is found.
            }
        }
        return false; //phrase was looped through and no match is found.
    } 
    //NOTE: One-liner code for checkLetter(letter) is return this.phrase.split('').includes(letter);

    showMatchedLetter(letter) { //Apply 'show' styling to matching letter.
        //In real time, my dynamically appended letters are shown on the game board as play selects them.
        $(`li.letter:contains(${letter})`).removeClass('hide').addClass('show');
    }
}