// Method to string
String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}

function generateLetters() {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let firstRow = document.getElementsByClassName("firstRow")[0];
    let secondRow = document.getElementsByClassName("secondRow")[0];
    let thirdRow = document.getElementsByClassName("thirdRow")[0];
    let fourthRow = document.getElementsByClassName("fourthRow")[0];

    for (let i = 0; i < letters.length; i++) {
        let row = Math.floor(i / 7);

        let classesText = "class=\'letterCell\'";
        let onClickText = "onclick=\'guessExecutor(this, \"" + letters[i] + "\")\'";
        let innerHtmlText = letters[i];

        let textToInsert = "<div " + classesText + " " + onClickText + ">" + innerHtmlText + "</div>"

        switch (row) {
            case 0:
                firstRow.innerHTML += textToInsert;
                break;
            case 1:
                secondRow.innerHTML += textToInsert;
                break;
            case 2:
                thirdRow.innerHTML += textToInsert;
                break;
            case 3:
                fourthRow.innerHTML += textToInsert;
                break;
        }
    }
}

// Script source: https://jakearchibald.com/2013/animated-line-drawing-svg/
function drawElement(selector, drawingTime, fillColor) {
    let path = document.querySelector(selector);
    let length = path.getTotalLength() + 1;

    path.style.transition = path.style.WebkitTransition = 'none';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset ' + drawingTime + ' ease-in-out';
    path.style.strokeDashoffset = '0';

    path.style.fill = fillColor;
}

function isInWord(letter, word) {
    return !!word.includes(letter);
}

function getIndexesInWord(letter, word) {
    let indexes = [];
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            indexes.push(i);
        }
    }
    return indexes;
}

function getRandomWord() {
    let maximum = wordList.length;
    let randomIndex = Math.floor(Math.random() * (maximum + 1));
    return wordList[randomIndex];
}

let guessedWordDiv = document.getElementsByClassName("guessedWord")[0];

// Generate word and user progress - gue
let guessedWord = getRandomWord();
console.log(guessedWord);
guessedLetterDivs = document.getElementsByClassName('guessedLetter');
let progress = "";
for (let i = 0; i < guessedWord.length; i++) {
    progress += "_";
    guessedWordDiv.innerHTML += "<div class='guessedLetter primaryWhite'>_</div>"
}

// Current guessed letter
let guess = "";

// Mistakes variable
let mistakes = 0;

// Remove letter from list, check if guess was correct or wrong.
function guessExecutor(letterDiv, letter) {
    if (guessedWord === progress) {
        return;
    }
    if (mistakes === 11) {
        return;
    }

    // Remove letter div
    letterDiv.innerHTML = null;
    letterDiv.removeAttribute("onclick");

    guess = letter;

    isInWord(letter, guessedWord) ? correctGuess() : wrongGuess();
}

// Check if player pressed enter
const submitDiv = document.getElementsByClassName('submitWord')[0];
const typeWordInput = document.getElementsByClassName('typeWord')[0];
typeWordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        submitDiv.click();
    }
});

function addMissingLettersToWord() {
    // Add missing letters to word
    for (let i = 0; i < progress.length; i++) {
        if (progress.charAt(i) === "_") {
            let indexesToReplace = [i];
            guess = guessedWord.charAt(i);
            animateLetters(indexesToReplace);
        }
    }
}

// Check if full guess was correct or wrong.
function guessFullWordExecutor() {
    if (guessedWord === progress) {
        return;
    }
    if (mistakes === 11) {
        return;
    }

    let inputDiv = document.getElementsByClassName('typeWord')[0];

    let fullGuessWord = inputDiv.value;

    if (fullGuessWord !== guessedWord) {
        inputDiv.value = null;
        wrongGuess();
        return;
    }

    addMissingLettersToWord();
    win();
}

function animateLetters(indexes) {
    for (let i = 0; i < indexes.length; i++) {
        // Change progress variable
        progress = progress.replaceAt(indexes[i], guess);

        // Add temporary class to animate revealing letters
        guessedLetterDivs[indexes[i]].classList.add('guessedLetter-animation');
        guessedLetterDivs[indexes[i]].style.marginTop = "2vw";
        guessedLetterDivs[indexes[i]].classList.remove('guessedLetter-pre-animation');
        guessedLetterDivs[indexes[i]].innerHTML = guess;

        // Remove temporary class to animate revealing letters
        setTimeout(function () {
            guessedLetterDivs[indexes[i]].classList.remove('guessedLetter-animation');
            guessedLetterDivs[indexes[i]].classList.add('guessedLetter-pre-animation');
        }, 10)
    }
}

function correctGuess() {
    let indexesToReplace = getIndexesInWord(guess, guessedWord);

    animateLetters(indexesToReplace);

    if (guessedWord === progress) {
        win();
    }
}

function wrongGuess() {
    mistakes++;
    drawElement(('.path' + mistakes), '0.5s', 'none');
    if (mistakes === 11) {
        gameOver();
    }
}

function gameOver() {
    console.log("game over");
    // Draw play again title
    for (let i = 1; i <= 9; i++) {
        drawElement(('.playAgainPath' + i), '0.75s', 'var(--primaryWhite)');
    }
    addMissingLettersToWord();
}

function win() {
    console.log("Congrats! You win");
    // Draw play again title
    for (let i = 1; i <= 9; i++) {
        drawElement(('.playAgainPath' + i), '0.75s', 'var(--primaryWhite)');
    }
}