let resetTime;
let flippedCards = [];
let randomSymbols = [];
let points = 0;

function generate() {

    let symbols = ['♔', '♕', '♖', '♗', '♘', '♙', '♤', '♧', '♡', '♢'];
    for (let i = 0; i < 10; i++) {
        symbols.push(symbols[i]);
    }

    for (let i = 0; i < 1; i++) {
        let gamble1 = Math.floor(Math.random() * symbols.length);
        let gamble2 = Math.floor(Math.random() * symbols.length);
        [symbols[gamble1], symbols[gamble2]] = [symbols[gamble2], symbols[gamble1]];
    }

    for (let i = 0; i < 20; i++) {
        let los = Math.floor(Math.random() * (symbols.length));
        randomSymbols[i] = symbols[los];
        symbols.splice(los, 1);
        board.innerHTML += '<div id="card' + i + '" onclick="flip(this)" class="card">\n' +
            '    <div class="cardInner">\n' +
            '        <div class="cardFront">\n' +
            '\n' +
            '        </div>\n' +
            '        <div class="cardBack title">\n' +
            randomSymbols[i] + '\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
    }
}

let canFlip = false;
let lastFlipped;
let startDate;
let stepsNumber = 0;

function flip(card) {

    if (canFlip === true) {
        return 0;
    }

    if (lastFlipped === card.id.substr(4)) {
        return 0;
    }

    if (startDate === undefined) {
        startDate = new Date();
        startDate = startDate.getTime();
    }

    lastFlipped = card.id.substr(4);

    card.classList.add('flippedCard');

    flippedCards[flippedCards.length] = card;

    if (flippedCards.length < 2) {
        return 0;
    }

    if (randomSymbols[flippedCards[0].id.substr(4)] === randomSymbols[flippedCards[1].id.substr(4)]) {
        canFlip = true;
        setStep();

        setTimeout(() => {
            flippedCards[0].style.visibility = "hidden";
            flippedCards[1].style.visibility = "hidden";
            flippedCards = [];
            canFlip = false;
            points += 1;
            setBar(points);
        }, 900);

        return 0;
    }

    if (randomSymbols[flippedCards[0].id.substr(4)] !== randomSymbols[flippedCards[1].id.substr(4)]) {
        canFlip = true;
        setStep();

        setTimeout(() => {
            flippedCards[0].classList.remove('flippedCard');
            flippedCards[1].classList.remove('flippedCard');
            flippedCards = [];
            canFlip = false;
            lastFlipped = undefined;
        }, 1200);

        return 0;
    }
}


function setTimer() {

    if (startDate === undefined) {
        return 0;
    }

    if (points < 10) {
        let currentTime = new Date();
        currentTime = currentTime.getTime();
        timer.innerHTML = Math.floor((startDate - currentTime) / -1000);
    }
}

if (points < 10) {
    resetTime = setInterval(setTimer, 1000);
}

function setStep() {
    stepsNumber += 1;
    steps.innerHTML = stepsNumber;
}

function setBar(points) {

    let percentages = (points / 10) * 100;
    let bar = document.getElementById("progressBar");
    let currentPercentages = bar.style.width;
    currentPercentages = currentPercentages.replace("%", "");

    var fillBar = setInterval(barFrames, 15);

    function barFrames() {
        if (currentPercentages >= percentages) {
            clearInterval(fillBar);
        } else {
            currentPercentages++;
            bar.style.width = currentPercentages + '%';
            progressPercents.innerHTML = currentPercentages + "%";
        }
    }
}
//TODO add memo reset option
//TODO add rules
//TODO add rules