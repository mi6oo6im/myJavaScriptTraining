function magicSum(numbers, sum) {
    newArr = [];
    resultArr = [];
    for (const num of numbers) {
        newArr.push(num)
    }
    while (newArr.length > 1) {
        currentNum = newArr.shift();
        for (let i = 0; i < newArr.length; i++) {
            if (currentNum + newArr[i] === sum) {
                resultArr.push(`${currentNum} ${newArr[i]}`);
            }
        }
    }
    console.log(resultArr.join('\n'));
}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('---------------------');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('---------------------');
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log('---------------------');