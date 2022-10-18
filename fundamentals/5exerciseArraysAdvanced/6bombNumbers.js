function bombNumbers(numSeq, specialBombNum) {
    //initial input
    const bombNum = specialBombNum[0];
    const bombPower = specialBombNum[1];
    //print result
    let sumSeq = 0;
    while (numSeq.includes(bombNum)) {
        let bombIndex = numSeq.indexOf(bombNum);
        let startIndex = bombIndex - bombPower;
        let explosionRange = bombPower * 2 + 1;
        if (startIndex < 0) {
            startIndex = 0
            explosionRange = bombIndex + bombPower + 1;
        }
        numSeq.splice(startIndex, explosionRange)
    }
    for (num of numSeq) {
        sumSeq += num;
    }
    console.log(sumSeq);
}
bombNumbers([4, 1, 2, 2, 2, 2, 2, 9],
    [4, 2]);
console.log('-----------------------------');
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
console.log('-----------------------------');
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);
console.log('-----------------------------');
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);
console.log('-----------------------------');