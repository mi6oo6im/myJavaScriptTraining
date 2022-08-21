function sumFirstAndLastArrayElements(arr) {
    let firstNum = arr[0];
    let lastNum = arr[arr.length - 1];
    let sum = firstNum + lastNum;
    console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);