function intigerAndFloat(firstNum, secondNum, thirdNum) {
    sum = firstNum + secondNum + thirdNum;
    sumToString = String(sum);
    typeOfNumber = sumToString === sum.toFixed(0) ? 'Integer' : 'Float';
    console.log(`${sum} - ${typeOfNumber}`);
}
intigerAndFloat(9, 100, 1.1);
intigerAndFloat(100, 200, 303);