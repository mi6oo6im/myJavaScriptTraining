function nxnMatrix(num) {
    function repeater(num) {
        numToString = String(num) + ' ';
        console.log(numToString.repeat(num).trim());
    }

    function printMatrix(num){
        for (let i = 0; i< num; i++){
            repeater(num);
        }
    }
    printMatrix(num)
}
nxnMatrix(3);
console.log('-------------------');
nxnMatrix(7);
console.log('-------------------');
nxnMatrix(2);
console.log('-------------------');