function multiplicationTable(input) {
    firstNum = 1;
    secondNum = 1;
    sum = 0;
    for (let index = 0; index < 10; index++) {
        secondNum = 1;
        for (let index2 = 0; index2 < 10; index2++) {
            sum = firstNum * secondNum;
            console.log(`${firstNum} * ${secondNum} = ${sum}`);
            secondNum++;
        }
        firstNum++;
    }
}
multiplicationTable()