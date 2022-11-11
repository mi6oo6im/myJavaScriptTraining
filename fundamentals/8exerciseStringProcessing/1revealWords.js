function revealWords(wordsToCheck, text) {
    let wordsToReplace = wordsToCheck.split(', ');
    let wordArr = text.split(' ');
    wordsToReplace.forEach(word => {
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i] === '*'.repeat(word.length)) {
                wordArr[i] = word;
            }
        }
        text = wordArr.join(' ');
    });
    console.log(text);
}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
console.log('----------------------');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);
console.log('----------------------');