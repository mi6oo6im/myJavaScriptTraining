function sumOfTwoNumbers(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let firstNum = 0;
    let secondNum = 0;
    let counter = 0;
    let firstCombinationFound = false;
    for (let i = startNum; i <= endNum; i++) {
        firstNum = i;
        secondNum = 0;
        for (let j = startNum; j <= endNum; j++) {
            secondNum = j;
            counter++;
            if (firstNum + secondNum === magicNum) {
                console.log(`Combination N:${counter} (${firstNum} + ${secondNum} = ${magicNum})`);
                firstCombinationFound = true;
                break;
            }
        }
        if (firstCombinationFound) {
            break;
        }
    }
    if (!firstCombinationFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["23",
    "24",
    "20"])

