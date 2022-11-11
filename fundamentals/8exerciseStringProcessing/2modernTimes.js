function modernTimes(inputText) {
    //variables:
    let textArr = inputText.split(' ');
    let specialWords = [];

    //functions:
    function isSpecialWord(word) {
        if (word[0] === '#' && word.length > 1) {
            let wordToCheck = word.slice(1).toLowerCase();
            for (const char of wordToCheck) {
                let asciiCode = char.charCodeAt()
                if (asciiCode < 97 || asciiCode > 122) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function returnSpecialWords(words) {
        let res = ''
        words.forEach(word => {
            res += word + '\n'
        });
        return res.trim();
    }

    //control flow:
    textArr.forEach(word => {
        if (isSpecialWord(word)) {
            specialWords.push(word.slice(1));
        }
    });
    console.log(returnSpecialWords(specialWords));
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('------------');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');
console.log('------------');