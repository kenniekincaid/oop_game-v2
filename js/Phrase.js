        // Treehouse FSJS Techdegree
        // Project 4 - OOP Game App
        // Phrase.js
//PURPOSE: To create a Phrase class to handle the creation of phrases.

//Declare the Phrase class...
class Phrase {
    constructor(phrase){ //The phrase constructor function.
       this.phrase = phrase.toLowerCase();//set to the phrase parameter; covert to lower case.
    }

    addPhraseToDisplay() {
        const $parentToLi = $('#phrases ul');
        // const $attachLetters = $liParent.append(`<li class="hide letter ${letter}">${letter}</li `);
        // const $attachSpaces = $liParent.append('<li class="space"> </li>');
        $parentToLi.append(`<li class="hide letter ${letter}">${letter}</li>`);
        $parentToLi.append('<li class="space"> </li>');

    }
    
}

//Codes are working up to this point. Committed to GitHub!