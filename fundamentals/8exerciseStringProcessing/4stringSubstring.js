function stringSubstring(word, text) {
    const textArrLower = text.toLowerCase()
        .split(' ');
    const wordToSearch = word.toLowerCase(); 
    for (const word of textArrLower) {
        if (word === wordToSearch){
            return console.log(word);
        }
    }
    console.log(`${wordToSearch} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
);
console.log('-------------------------');
stringSubstring('python',
    'JavaScript is the best programming language'
);
console.log('-------------------------');