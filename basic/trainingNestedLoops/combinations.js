function combinations(input) {
    let n = Number(input);
    let firstNum = 0;
    let secondNum = 0;
    let thirdNum = 0;
    let res = 0;
    let combinations = 0;
    for (let i = 0; i <= n; i++) {
        secondNum = 0;
        for (let j = 0; j <= n; j++) {
            thirdNum = 0;
            for (let k = 0; k <= n; k++) {
                res = firstNum + secondNum + thirdNum;
                if (res === n) {
                    combinations++
                }
                thirdNum++
            }
            secondNum++;
        }
        firstNum++;
    }
    console.log(combinations);
}
combinations(["25"])