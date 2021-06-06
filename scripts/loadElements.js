function getDistanceFromTop(elem) {
    let distance = -100;

    do {
        distance += elem.offsetTop;

        // Set the element to it's parent
        elem = elem.offsetParent;

    } while (elem);

    distance = distance < 0 ? 0 : distance;
    return distance
}

let scrollPosition = window.scrollY;
const loadDistance = -400;
const paragraphs = document.getElementsByClassName("unloadedParagraph");

// Get paragraphs height
let paragraphs_height = [];
for (let paragraph of paragraphs) {
    paragraphs_height.push(getDistanceFromTop(paragraph))
}

const cards = document.getElementsByClassName("card");
let firstCardHeight = getDistanceFromTop(cards[0])

const loadParagraph = (paragraph) => {
    paragraph.classList.remove('unloadedParagraph');
    paragraphs_height.shift();
    paragraph.classList.add('loadedParagraph');
}

const loadCards = () => {
    for (let card of cards) {
        card.classList.remove('unloadedCard');
        card.classList.add('loadedCard');
    }
}


window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;

    for (let i = 0; i < paragraphs.length; i++) {
        if (scrollPosition >= paragraphs_height[i] + loadDistance) {
            loadParagraph(paragraphs[i]);
        }
    }

    if (scrollPosition >= firstCardHeight + loadDistance){
        loadCards()
    }
})