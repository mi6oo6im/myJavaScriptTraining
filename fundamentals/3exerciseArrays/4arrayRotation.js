function arrayRotation(numbers, rotations) {
    for (i = 1; i <= rotations; i++){
        let currentNum = numbers.shift();
        numbers.push(currentNum)
    }
    console.log(numbers.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
console.log('---------------');
arrayRotation([32, 21, 61, 1], 4);
console.log('---------------');
arrayRotation([2, 4, 15, 31], 5);
console.log('---------------');