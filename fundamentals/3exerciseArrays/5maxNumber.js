function maxNumber(numbers) {
    let newArr = [];   
    let arrLen = numbers.length;     
    for (let i = 0; i < arrLen; i++) {
        let isBigger = true;
        for(let j = i + 1; j < arrLen; j++){
            if (numbers[i] <= numbers[j]){
                isBigger = false;
                break;
            }
        } 
        if (isBigger){
            newArr.push(numbers[i]);
        }
    }
    console.log(newArr.join(' '));
}
maxNumber([1, 4, 3, 2]);
console.log('--------------------');
maxNumber([14, 24, 3, 19, 15, 17]);
console.log('--------------------');
maxNumber([41, 41, 34, 20]);
console.log('--------------------');
maxNumber([27, 19, 42, 2, 13, 45, 48]);
console.log('--------------------');