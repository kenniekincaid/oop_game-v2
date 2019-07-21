        // Treehouse FSJS Techdegree
        // Project 4 - OOP Game App
        // Phrase.js
//PURPOSE: To create a Phrase class to handle the creation of phrases.

//Declare the Phrase class...
class Phrase {
    constructor(phrase){ //The phrase constructor function.
       this.phrase = phrase.toLowerCase();//set to the phrase parameter; covert to lower case.
    }

    //This area will loop through phrases, split each into characters, & append characters to placeholders based on character type.
    addPhraseToDisplay() {
        const phraseSplitter = this.phrase.split(''); //Process that will split the phrases:
        const $ul = $('#phrase ul'); //Create list items and append to parent ul:
            // $ul.innerHTML = ''; //puts spaces in the document.

        phraseSplitter.forEach((characterInPlay) => {
            const li = $ul.append(`<li class="hide letter ${characterInPlay}">${characterInPlay}</li>`);
            $ul.append(li); //appends phrase lettes to the phrase ul.
            const liSpace = $ul.append(`<li class="space"> </li>`);
            $ul.append(liSpace); //appends spaces to the phrase ul.

            //conditional statement; when to do what...
            if(characterInPlay === '') {
                return liSpace;
            } else {
                return li;
            }
        });
    }

        // //Checks if the letters the user chose match the letter of the phrase being played.
        // checkLetter(letter) {
        //     if (this.phrase.includes(letter)) {
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }

        // showMatchedLetter(letter) {
        //     let matchedLetterLi = (`.${letter}`);
        //     matchedLetterLi.removeClass('hide').addClass('show');
        // }


}

//Codes are working up to this point. Committed to GitHub!