function lettersChangeNumbers(inputStr) {
    //variables:
    let sum = 0;
    const stringsArr = inputStr.split(' ')
        .filter(x => x.length > 0);

    //functions:
    function isUpper(letter) {
        let upperLetter = letter.toUpperCase();
        if (letter === upperLetter) {
            return true;
        }
        return false;
    }

    function addFunc(number, letter) {
        let lowerLetter = letter.toLowerCase();
        let alphabetPosition = lowerLetter.charCodeAt() - 96;
        return number + alphabetPosition;
    }

    function subtractFunc(number, letter) {
        let lowerLetter = letter.toLowerCase();
        let alphabetPosition = lowerLetter.charCodeAt() - 96;
        return number - alphabetPosition;
    }

    function multiplyFunc(number, letter) {
        let lowerLetter = letter.toLowerCase();
        let alphabetPosition = lowerLetter.charCodeAt() - 96;
        return number * alphabetPosition;
    }

    function divideFunc(number, letter) {
        let lowerLetter = letter.toLowerCase();
        let alphabetPosition = lowerLetter.charCodeAt() - 96;
        return number / alphabetPosition;
    }

    //control flow:
    stringsArr.forEach(string => {
        let startLetter = string[0];
        let endLetter = string[string.length - 1];
        let number = Number(string.slice(1, string.length - 1))
        if (isUpper(startLetter)) {
            number = divideFunc(number, startLetter);
        } else {
            number = multiplyFunc(number, startLetter);
        }
        if (isUpper(endLetter)) {
            number = subtractFunc(number, endLetter);
        } else {
            number = addFunc(number, endLetter);
        }
        sum += number;
    });
    console.log(sum.toFixed(2));
}
lettersChangeNumbers('A12b s17G');
console.log('---------------------');
lettersChangeNumbers('P34562Z q2576f   H456z');
console.log('---------------------');
lettersChangeNumbers('a1A');
console.log('---------------------');