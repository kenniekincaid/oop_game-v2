// Treehouse FSJS Techdegree
// Project 4 - OOP Game App
// Phrase.js
//PURPOSE: To create a Phrase class to handle the creation of phrases.

//Declare the Phrase class...
class Phrase {
    constructor(phrase) { //The phrase constructor function.
        this.phrase = phrase.toLowerCase(); //set to the phrase parameter; covert to lower case.
    }

    //This area will loop through phrases, split each into characters, & append characters to placeholders based on character type.
    addPhraseToDisplay() {
        const phraseSplit = this.phrase.split(''); //Process that will split the phrases:
        const $ul = $('#phrase ul'); //Create list items and append to parent ul:

        phraseSplit.forEach((character) => { //conditional statement; when to do what...
            if (character === ' ') { //if the character is a space...
                //create the space list item
                $ul.append(`<li class="space"> </li>`); //and append the space li to the #phrase ul.
            } else {
                $ul.append(`<li class="hide letter ${character}">${character}</li>`); //appends phrase lettes to the #phrase ul.                
            }
        });
    }

    //Handling Interactions:
    checkLetter(letter) { //checks if chosen letter matches a letter in the phrase
        for(let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === letter) { //checks for instances of matching characters
                return true; //yes match is true
            }
        }
        return false; //no match is false

        // return this.phrase.split('').includes(letter);

    }

    showMatchedLetter(letter) { //apply styling for showing the letter.
        $(`li.letter:contains(${letter})`).removeClass('hide').addClass('show');
    }
}
//Codes are working up to this point. Committed to GitHub!