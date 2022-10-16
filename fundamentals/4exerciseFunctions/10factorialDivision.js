function factorialDivision(x, y) {
    function getFactorial(num) {
        let factorialNum = 1
        for (let i = 1; i <= num; i++) {
            factorialNum *= i;
        }
        return factorialNum;
    }
    function printFactorialDevision(x, y) {
        let firstNum = getFactorial(x);
        let secondNum = getFactorial(y);
        let result = firstNum / secondNum;
        console.log(result.toFixed(2));
    }
    printFactorialDevision(x, y)
}
factorialDivision(5, 2);
console.log('---------------------');
factorialDivision(6, 2);
console.log('---------------------');