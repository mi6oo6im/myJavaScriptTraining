function condenseArrayToNumber(numbers) {
    let currentNumbers = numbers;
    while (currentNumbers.length > 1) {
        let newNumbers = [];
        for (let i = 0; i < currentNumbers.length - 1; i++) {
            newNumbers.push(currentNumbers[i] + currentNumbers[i + 1])
        }
        currentNumbers = newNumbers;
    }
    console.log(currentNumbers.toString());
}
condenseArrayToNumber([2, 10, 3]);
console.log('----------------');
condenseArrayToNumber([5, 0, 4, 1, 2]);
console.log('----------------');
condenseArrayToNumber([1]);
console.log('----------------');