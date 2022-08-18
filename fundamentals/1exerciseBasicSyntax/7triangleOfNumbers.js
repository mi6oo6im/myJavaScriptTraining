function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++){
        currentNum = i + ' '
        console.log(currentNum.repeat(i).trim());
    }
}
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);