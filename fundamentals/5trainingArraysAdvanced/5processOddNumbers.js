function processOddNumbers(arr) {
    let resArr = arr.filter((x, y) => y % 2 !== 0).map(x => x * 2).reverse();
    console.log(resArr.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
console.log('-----------------------');
processOddNumbers([3, 0, 10, 4, 7, 3]);
console.log('-----------------------');