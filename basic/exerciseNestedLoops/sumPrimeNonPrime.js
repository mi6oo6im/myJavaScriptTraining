function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index++];
    let primeNumbersSum = 0;
    let nonprimeNumbersSum = 0;
    while (command !== 'stop'){
        let isPrime = true;
        let numberToCheck = Number(command);
        if (numberToCheck < 0){
            console.log('Number is negative.');
            command = input[index++];
            continue;
        }
        for (i = 2; i < numberToCheck; i++){
            if (numberToCheck % i === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            primeNumbersSum += numberToCheck;
        } else{
            nonprimeNumbersSum += numberToCheck;
        }
        command = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${primeNumbersSum}`)
    console.log(`Sum of all non prime numbers is: ${nonprimeNumbersSum}`)
}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])



