function replaceRepeatingChars(inputStr) {
    let result = inputStr[0];
    for (let index = 1; index < inputStr.length; index++) {
        let currentElement = inputStr[index];
        let previousElement = inputStr[index - 1];
        if (currentElement !== previousElement) {
            result += currentElement;
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('------------------------');
replaceRepeatingChars('qqqwerqwecccwd');
console.log('------------------------');