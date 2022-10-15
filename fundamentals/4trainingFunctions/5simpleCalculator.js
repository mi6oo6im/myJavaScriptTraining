function simpleCalculator(x, y, operator) {
    function multiplication(x, y) {
        return x * y;
    }

    function division(x, y) {
        return x / y;
    }

    function addition(x, y) {
        return x + y;
    }

    function subtraction(x, y) {
        return x - y;
    }
    let res = 0;
    switch (operator) {
        case 'multiply': res = multiplication(x, y); break;
        case 'divide': res = division(x, y); break;
        case 'add': res = addition(x, y); break;
        case 'subtract': res = subtraction(x, y); break;
    }
    console.log(res);
}
simpleCalculator(5, 5, 'multiply');
console.log('-------------------');
simpleCalculator(40, 8, 'divide');
console.log('-------------------');
simpleCalculator(12, 19, 'add');
console.log('-------------------');
simpleCalculator(50, 13, 'subtract');
console.log('-------------------');