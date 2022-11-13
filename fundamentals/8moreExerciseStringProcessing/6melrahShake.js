function melrahShake(inputArr) {
    let string = inputArr[0];
    let pattern = inputArr[1];
    let firstOccurence = string.indexOf(pattern);
    let secondOccurence = string.indexOf(pattern, firstOccurence + 1);
    let lastOccurence = string.lastIndexOf(pattern);
    while (firstOccurence !== -1 && secondOccurence !== -1 && pattern.length > 0) {
        let stringArr = string.split('')
        stringArr.splice(lastOccurence, pattern.length);
        stringArr.splice(firstOccurence, pattern.length);
        string = stringArr.join('');
        console.log('Shaked it.');
        let indexToRemove = Math.floor(pattern.length / 2);
        let arr = pattern.split('')
        arr.splice(indexToRemove, 1);
        pattern = arr.join('')
        firstOccurence = string.indexOf(pattern);
        secondOccurence = string.indexOf(pattern, firstOccurence + 1);
        lastOccurence = string.lastIndexOf(pattern);
    }
    console.log('No shake.');
    console.log(string);
}
melrahShake(['astalavista baby',
    'sta']
)
console.log('-----------------------------');
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']
)
console.log('-----------------------------');