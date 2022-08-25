// Letters

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// get array from the letters

let lettersArray = Array.from(letters);


// select letters container

let lettersContainer = document.querySelector(".letters");


// generate letters 

lettersArray.forEach(letter => {

    // create span which contains the letters

    let span = document.createElement('span');

    // create letters as text

    let lettersText = document.createTextNode(letter);

    // append text to span

    span.appendChild(lettersText);

    // add class to the span

    span.className = "letter-box";

    // append span to the lettersContainer

    lettersContainer.appendChild(span);

});

// create word of subjects and categories in an Object

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    pepole: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};

// get random subject which are objects keys

let allKeys = Object.keys(words);


// random number from the objects key

let randomNumberFromKeys = Math.floor(Math.random() * allKeys.length);

// get random key which is subjects every time

let randomSubject = allKeys[randomNumberFromKeys];

console.log(randomSubject);

// get random categories which single one is an Array

let randomCategories = words[randomSubject];


// get random number from ecah Array's elemnets which are categories

let randomNumberOfCategories = Math.floor(Math.random() * randomCategories.length);


// get random category from random Array

let randomNameOfCategories = randomCategories[randomNumberOfCategories];


document.querySelector('.game-info .category span').innerHTML =  randomSubject;




// select letters guess container

let lettersGuessContainer = document.querySelector('.letters-guess');


// convert the category we chosen into an array

let categoryLettersArray = Array.from(randomNameOfCategories);

// create span for every letter of the name of category


categoryLettersArray.forEach(letter => {

    // create empty spans 

    let emptySpan = document.createElement('span');


    // if letter is a space

    if(letter === ' ') {

        emptySpan.className = 'with-space';

    }

    lettersGuessContainer.appendChild(emptySpan);

});





// select guess spans 


let guessSpans = document.querySelectorAll('.letters-guess span');




// set wrong attempts

let wronAttempts = 0;


// select the draw Element



let theDraw =  document.querySelector('.hangman-draw');


// make letters clickable and addEventListener

document.addEventListener('click', (e) => {

    // the chose status    


    let theStatus = false;


    if(e.target.className === "letter-box") {
            

        e.target.classList.add('clicked');

        // get clicked letter 

        let clickedLetter = e.target.innerHTML.toLowerCase();


        // get Array from the chosen category 


        let chosenCategory = Array.from(randomNameOfCategories.toLowerCase());


        // console.log(chosenCategory);

        // loop through the category letters Array 

        chosenCategory.forEach((wordLetter, wordIndex) => {

            // if the clicked letter equals to one of category letters
    
            if (clickedLetter == wordLetter){

                theStatus = true;

                // loop through All guess spans

                guessSpans.forEach((span, spanIndex) => {

                    if(spanIndex === wordIndex) {

                        span.innerHTML = clickedLetter;

                    }

                });

            
            }

    
        });


// outside of the loop
    
// if we chosed a wrong letter

if(theStatus !== true){

    // increase the wrong attempts

    wronAttempts++;


    // add class which showed the draw hangman at every wrong try 

    theDraw.classList.add(`wrong-${wronAttempts}`);


    // if the wrong trys is 8 finish

    if(wronAttempts === 8) {

        gameOver();

        lettersContainer.classList.add('finished');
    
    }

}
    }

});

function gameOver() {

// create div
let div = document.createElement('div');


// create div text
let divText = document.createTextNode(`the word is ${randomNameOfCategories}`);

// append text to div 
div.appendChild(divText)


// add class to div
div.className = 'popup';

// append div to the body
document.body.appendChild(div);




}