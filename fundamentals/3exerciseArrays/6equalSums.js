function equalSums(numbers) {
    let arrLen = numbers.length;
    let result = 0;
    for (let i = 0; i < arrLen; i++){
        let leftSum = 0;
        let rightSum = 0;
        let leftIndex = i - 1;
        let rightIndex = i + 1;
        while (leftIndex >= 0){
            leftSum += numbers[leftIndex];
            leftIndex--;
        }
        while (rightIndex < arrLen){
            rightSum += numbers[rightIndex];
            rightIndex++;
        }
        if (leftSum === rightSum){
            result = i;
            break;
        } else {
            result = 'no'
        }
        if (leftSum + rightSum === 0){
            result = 0;
        }
    }
    console.log(result);
}
equalSums([1, 2, 3, 3]);
console.log('---------------');
equalSums([1, 2]);
console.log('---------------');
equalSums([1]);
console.log('---------------');
equalSums([1, 2, 3]);
console.log('---------------');
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
console.log('---------------');