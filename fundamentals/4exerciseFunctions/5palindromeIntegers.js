function palindromeIntegers(numArr) {
    function isPalidrome(number) {
        numAsString = String(number);
        halfLen = Math.ceil(numAsString.length / 2);
        for (let i = 0; i < halfLen; i++){
            let index1 = i;
            let index2 = numAsString.length - 1 - i;
            if (numAsString[index1] != numAsString[index2]){
                return false;
            }
        }
        return true
    }

    function printResult(numArr) {
        let res = ''
        let arrLen = numArr.length;
        for (let i = 0; i < arrLen; i++){
            let currentNum = numArr[i];
            if (isPalidrome(currentNum)){
                res += 'true\n';
            } else {
                res += 'false\n';
            }
        }
        console.log(res.trim());
    }
    printResult(numArr)
}
palindromeIntegers([123,323,421,121]);
console.log('-----------------------');
palindromeIntegers([32,2,232,1010]);
console.log('-----------------------');