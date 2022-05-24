function sumNumbers(input) {
    let index = 0;
    let initNum = Number(input[index++]);
    let sum = 0;
    while (sum < initNum) {
        newNum = Number(input[index++]);
        sum += newNum;
    }
    console.log(sum);
}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])
