function sumFirstAndLast(arr) {
    let firstNum = Number(arr[0]);
    let lastNum = Number(arr.pop())
    let sum = firstNum + lastNum;
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);
console.log('-------------');
sumFirstAndLast(['5', '10']);
console.log('-------------');