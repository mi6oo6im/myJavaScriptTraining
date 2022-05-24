function operationsBetweenNumbers(input) {
    // "+", "-", "*", "/", "%"
    let index = 0;
    let firstNumber = Number(input[index++]);
    let secondNumber = Number(input[index++]);
    let operator = input[index];
    let result = 0;
    let outprint = '';

    switch (operator) {
        case '+': result = firstNumber + secondNumber;
            if (result % 2 === 0) {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result} - even`
            } else {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result} - odd`
            }; break;
        case '-': result = firstNumber - secondNumber;
            if (result % 2 === 0) {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result} - even`
            } else {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result} - odd`
            }; break;
        case '*': result = firstNumber * secondNumber;
            if (result % 2 === 0) {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result} - even`
            } else {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result} - odd`
            }; break;
        case '/': result = firstNumber / secondNumber;
            if (secondNumber === 0) {
                outprint = `Cannot divide ${firstNumber} by zero`
            } else {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`
            }; break; case '%': result = firstNumber % secondNumber;
            if (secondNumber === 0) {
                outprint = `Cannot divide ${firstNumber} by zero`
            } else {
                outprint = `${firstNumber} ${operator} ${secondNumber} = ${result}`
            }; break;
    }
    console.log(outprint);
}
operationsBetweenNumbers(["10",
    "0",
    "%"])



