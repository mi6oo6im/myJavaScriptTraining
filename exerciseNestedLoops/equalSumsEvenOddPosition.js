function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let buff = '';
    for (let i = startNum; i <= endNum; i++) {
        let odd = 0
        let even = 0
        let numberToString = '' + i;
        for (let digit = 0; digit < numberToString.length; digit++) {
            if (digit % 2 === 0) {
                even += Number(numberToString[digit]);
            }
            else odd += Number(numberToString[digit]);
        }
        if (even === odd) {
            buff += numberToString + ' '
        }
    }
    console.log(buff);
}
equalSumsEvenOddPosition(["123456",
"124000"])

