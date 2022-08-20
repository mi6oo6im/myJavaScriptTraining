function sumDigit(num) {
    let numToString = String(num);
    let sum = 0;
    for (let i = 0; i < numToString.length; i++){
        currentNumber = Number(numToString[i]);
        sum += currentNumber;
    }
    console.log(sum);
}
sumDigit(245678);
sumDigit(97561);
sumDigit(543);