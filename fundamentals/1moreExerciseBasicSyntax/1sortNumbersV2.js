function sortNumbers(firstNum, secondNum, thirdNum) {
    numArr = [firstNum, secondNum, thirdNum];
    // sortedArr = numArr.sort().reverse();
    sortedArr = numArr.sort((a, b) => b - a);
    res = sortedArr.join('\n');
    console.log(res);
}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);