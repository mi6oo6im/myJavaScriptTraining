function reverseAnArrayOfNumbers(numbers, arr) {
    let newArr = [];
    let startIndex = numbers - 1;
    for (let i = startIndex; i >= 0; i--){
        newArr.push(arr[i])
    }
    console.log(newArr.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
console.log('---------------');
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
console.log('---------------');
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
console.log('---------------');