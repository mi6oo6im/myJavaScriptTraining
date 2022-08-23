function maxSequenceOfEqualElements(numbers) {
    let maxSeqence = []
    let numbersLen = numbers.length;
    let currentSequence = [];
    for (let i = 0; i < numbersLen; i++) {
        let currentNumber = numbers[i];
        if (i === 0) {
            currentSequence.push(currentNumber);
        } else if (currentNumber === numbers[i - 1]) {
            currentSequence.push(currentNumber);
        } else {
            if (currentSequence.length > maxSeqence.length) {
                maxSeqence = currentSequence;
            }
            currentSequence = [currentNumber];
        }
        if (i === numbersLen - 1) {
            if (currentSequence.length > maxSeqence.length) {
                maxSeqence = currentSequence;
            }
        }
    }
    console.log(maxSeqence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('----------------------------');
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('----------------------------');
maxSequenceOfEqualElements([4, 4, 4, 4]);
console.log('----------------------------');
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
console.log('----------------------------');