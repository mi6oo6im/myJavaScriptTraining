function sumOfOddNumbers(oddNums) {
    sum = 0
    for (let i = 1; i <= 2 * oddNums - 1; i += 2) {
        console.log(i);
        sum += i
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);