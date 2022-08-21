function sumEvenNumbers(numbers) {
    let res = 0;
    for (let num of numbers) {
        let numAsNumber = Number(num);
        if (numAsNumber % 2 === 0) {
            res += numAsNumber;
        }
    }
    console.log(res);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
console.log('-----------------');
sumEvenNumbers(['3', '5', '7', '9']);
console.log('-----------------');
sumEvenNumbers(['2', '4', '6', '8', '10']);
console.log('-----------------');