function oddAndEvenSum(number) {
    function numIsEven(num) {
        if (num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function printEvenOddSums(number) {
        let numAsString = String(number);
        let numLen = numAsString.length;
        let evenSum = 0;
        let oddSum = 0;
        for (i = 0; i < numLen; i++) {
            let currentNum = Number(numAsString[i])
            if (numIsEven(currentNum)) {
                evenSum += currentNum;
            } else {
                oddSum += currentNum;
            }
        }
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    }
    printEvenOddSums(number)
}
oddAndEvenSum(1000435);
console.log('-------------------');
oddAndEvenSum(3495892137259234);
console.log('-------------------');