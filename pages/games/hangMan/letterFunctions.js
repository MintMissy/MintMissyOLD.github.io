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