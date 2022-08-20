function primeNumberChecker(number) {
    let result = 'true';
    for (let i = number - 1; i > 1; i--)
        if (number % i === 0) {
            result = 'false';
            break
        }
    console.log(result);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);