function evenAndOddSubtraction(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of numbers) {
        let numAsNumber = Number(num);
        if (numAsNumber % 2 === 0) {
            evenSum += numAsNumber;
        } else {
            oddSum += numAsNumber;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
console.log('-----------------');
evenAndOddSubtraction([3, 5, 7, 9]);
console.log('-----------------');
evenAndOddSubtraction([2, 4, 6, 8, 10]);
console.log('-----------------');