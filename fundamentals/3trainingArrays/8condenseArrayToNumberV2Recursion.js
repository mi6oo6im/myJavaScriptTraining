function condenseArrayToNumber(numbers) {
    if (numbers.length === 1){
        console.log(numbers.toString());
        return;
    }
    let newNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        newNumbers.push(numbers[i] + numbers[i + 1]);  
    }
    condenseArrayToNumber(newNumbers);
}
condenseArrayToNumber([2, 10, 3]);
console.log('----------------');
condenseArrayToNumber([5, 0, 4, 1, 2]);
console.log('----------------');
condenseArrayToNumber([1]);
console.log('----------------');