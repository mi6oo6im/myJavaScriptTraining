function countStringOccurrences(text, word) {
    console.log(text.split(' ')
        .filter(x => x === word)
        .length);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
);
console.log('---------------------');
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni'
);
console.log('---------------------');