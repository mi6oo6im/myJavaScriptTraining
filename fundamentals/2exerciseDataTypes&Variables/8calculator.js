function calculator(firstNum, operator, secondNum) {
    result = ''
    switch (operator) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '*': result = firstNum * secondNum; break;
    }
    console.log(result.toFixed(2));
}
calculator(5, '+', 10);
calculator(25.5, '-', 3);