function addAndSubtract(numbers) {
    let sumOrigArr = 0;
    let sumNewArr = 0;
    let numbersL = numbers.length;
    let newArr = [];
    for (let i = 0; i < numbersL; i++) {
        let currentNumber = numbers[i];
        let newNumber = 0;
        if (numbers[i] % 2 === 0) {
            newNumber = currentNumber + i;
        } else {
            newNumber = currentNumber - i;
        }
        sumOrigArr += currentNumber;
        sumNewArr += newNumber;
        newArr.push(newNumber)
    }
    console.log(newArr);
    console.log(sumOrigArr);
    console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
console.log('---------------');
addAndSubtract([-5, 11, 3, 0, 2]);
console.log('---------------');