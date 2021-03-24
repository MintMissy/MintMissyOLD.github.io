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
function drawElement(selector) {
    let path = document.querySelector(selector);
    let length = path.getTotalLength() + 1;

    path.style.transition = path.style.WebkitTransition = 'none';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 0.5s ease-in-out';

    path.style.strokeDashoffset = '0';
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

function correctGuess() {
    let indexesToReplace = getIndexesInWord(guess, guessedWord);

    for (let i = 0; i < indexesToReplace.length; i++) {
        // Change progress variable
        progress = progress.replaceAt(indexesToReplace[i], guess);

        // Add temporary class to animate revealing letters
        guessedLetterDivs[indexesToReplace[i]].classList.add('guessedLetter-animation');
        guessedLetterDivs[indexesToReplace[i]].style.marginTop = "2vw";
        guessedLetterDivs[indexesToReplace[i]].classList.remove('guessedLetter-pre-animation');
        guessedLetterDivs[indexesToReplace[i]].innerHTML = guess;

        // Remove temporary class to animate revealing letters
        setTimeout(function () {
            guessedLetterDivs[indexesToReplace[i]].classList.remove('guessedLetter-animation');
            guessedLetterDivs[indexesToReplace[i]].classList.add('guessedLetter-pre-animation');
        }, 10)
    }

    if (guessedWord === progress) {
        win();
    }
}

function wrongGuess() {
    console.log(mistakes);
    mistakes++;
    drawElement(('.path' + mistakes));
    if (mistakes === 11) {
        gameOver();
    }
}

function gameOver() {
    alert("game over");
    for (let i = 0; i < guessedWord.length; i++) {
        guessedLetterDivs[i].innerHTML = guessedWord.charAt(i);
    }
}

function win() {
    alert("congrats! You win")
}