function printAndSum(startNum, endNum) {
    sum = 0;
    res = ''
    for (let i = startNum; i <= endNum; i++){
        sum += i;
        res += i + ' ';
    }
    res.trim()
    console.log(`${res}\nSum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);