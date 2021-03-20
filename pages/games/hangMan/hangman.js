function generateLetters(){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let firstRow = document.getElementsByClassName("firstRow")[0];
    let secondRow = document.getElementsByClassName("secondRow")[0];
    let thirdRow = document.getElementsByClassName("thirdRow")[0];
    let fourthRow = document.getElementsByClassName("fourthRow")[0];

    for (let i = 0; i < letters.length; i++) {
        let row = Math.floor(i / 7);

        switch(row){
            case 0:
                firstRow.innerHTML += "<div class='letterCell'>" + letters[i] + "</div>";
                break;
            case 1:
                secondRow.innerHTML += "<div class='letterCell'>" + letters[i] + "</div>";
                break;
            case 2:
                thirdRow.innerHTML += "<div class='letterCell'>" + letters[i] + "</div>";
                break;
            case 3:
                fourthRow.innerHTML += "<div class='letterCell'>" + letters[i] + "</div>";
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
        'stroke-dashoffset 1s ease-in-out';

    path.style.strokeDashoffset = '0';
}