function sumOfNumbers(input) {
    let number = input[0];
    let sum = 0;
    // for (i of number) {
    //     sum += Number(i);
    // }
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"])
