function wordsTracker(inputArr) {
    const lookupWordsArr = inputArr.shift()
        .split(' ');
    wordTrackerObject = {}
    lookupWordsArr.forEach(word => {
        wordTrackerObject[word] = 0;
    });
    for (const wordToCheck in wordTrackerObject) {
        inputArr.forEach(word => {
            if (wordToCheck === word) {
                wordTrackerObject[word]++
            }
        });
    }
    const wordTrackArrSorted = Object.entries(wordTrackerObject)
        .sort((a, b) => b[1] - a[1]);
    wordTrackArrSorted.forEach(([word, occurences]) => {
        console.log(`${word} - ${occurences}`);
    });
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);
console.log('------------------------');
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]
);
console.log('------------------------');