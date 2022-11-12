function valueOfAString(inputArr) {
    let sum = 0;
    const string = inputArr.shift();
    const command = String(inputArr);
    let lowerAlphaStr = string.split('')
        .filter(x => x.charCodeAt() >= 97 && x.charCodeAt() <= 122) //filter only [a-z]
        .join('');
    let upperAlphaStr = string.split('')
        .filter(x => x.charCodeAt() >= 65 && x.charCodeAt() <= 90) //filter only [A-Z]
        .join('');
    if (command === 'UPPERCASE') {
        for (const letter of upperAlphaStr) {
            sum += letter.charCodeAt();
        }
    } else {
        for (const letter of lowerAlphaStr) {
            sum += letter.charCodeAt();
        }
    }

    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);
console.log('-----------------------------');
valueOfAString(['AC/DC',
    'UPPERCASE']);
console.log('-----------------------------');