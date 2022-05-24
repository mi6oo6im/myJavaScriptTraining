function bonusScore(input) {
    let initNum = Number(input[0]);
    let currentNum = 0;
    if (initNum <= 100) {
        currentNum = initNum + 5;
    } else if (initNum <= 1000) {
        currentNum = initNum * 1.2;
    } else {
        currentNum = initNum * 1.1;
    }
    if (initNum % 2 === 0) {
        currentNum++;
    } else if (initNum % 10 === 5) {
        currentNum += 2;
    }
    console.log(currentNum - initNum);
    console.log(currentNum);
}
bonusScore(["15875"])