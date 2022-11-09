function countStringOccurrences(text, word) {
    let textArr = text.split(' ');
    let filteredTextArr = textArr.filter(x => x === word);
    console.log(filteredTextArr.length);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
);
console.log('---------------------');
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni'
);
console.log('---------------------');