function sortNumbers(firstNum, secondNum, thirdNum) {
    first = 0;
    second = 0;
    third = 0;
    if (firstNum > secondNum && firstNum > thirdNum) {
        first = firstNum
        if (secondNum > thirdNum) {
            second = secondNum;
            third = thirdNum;
        } else {
            second = thirdNum;
            third = secondNum;
        }
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        first = secondNum;
        if (firstNum > thirdNum) {
            second = firstNum;
            third = thirdNum
        } else {
            second = thirdNum;
            third = firstNum;
        }
    } else {
        first = thirdNum;
        if (firstNum > secondNum){
            second = firstNum;
            third = secondNum;
        } else {
            second = secondNum;
            third = firstNum;
        }
    }
    console.log(`${first}\n${second}\n${third}`);
}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);