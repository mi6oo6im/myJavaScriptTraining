function pascalCaseSplitter(inputStr) {
    const toLower = inputStr.toLowerCase();
    let result = inputStr[0];
    for (let index = 1; index < inputStr.length; index++) {
        let regular = inputStr[index];
        let lower = toLower[index];
        if (regular !== lower) {
            result += ', ';
        }
        result += regular;
    }
    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('-----------------------------');
pascalCaseSplitter('HoldTheDoor');
console.log('-----------------------------');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
console.log('-----------------------------');