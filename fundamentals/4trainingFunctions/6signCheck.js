function signCheck(x, y, z) {
    let numberArr = [x, y, z];
    function isNegative(number) {
        if (number < 0){
            return true
        }else {
            return false
        }
    }
    function countNegatives(numberArr) {
        let negativeNumbers = 0;
        for(let i = 0; i < 3; i++){
            let currentNumber = numberArr[i];
            if (isNegative(currentNumber)){
                negativeNumbers++;
            }
        }
        return negativeNumbers;
    }
    if (countNegatives(numberArr) == 1 || countNegatives(numberArr) == 3){
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
signCheck(5, 12, -15);
console.log('------------');
signCheck(-6, -12, 14);
console.log('------------');
signCheck(-1, -2, -3);
console.log('------------');
signCheck(-5, 1, 1);
console.log('------------');