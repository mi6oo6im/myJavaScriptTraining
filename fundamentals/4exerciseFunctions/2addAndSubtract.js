function addAndSubtract(add1, add2, subtr) {
    let addition = (x, y) => x + y;
    let substraction = (x, y) => x - y;
    let res = substraction(addition(add1, add2), subtr);
    console.log(res);
}
addAndSubtract(23, 6, 10);
console.log('------------------');
addAndSubtract(1, 17, 30);
console.log('------------------');
addAndSubtract(42, 58, 100);
console.log('------------------');