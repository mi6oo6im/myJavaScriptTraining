function smallestTwoNumbers(arr) {
    let smallest2Nums = [];
    while (smallest2Nums.length < 2) {
        let currentNum = arr.pop();
        let isSmallest = true;
        for (num of arr) {
            if (currentNum > num) {
                isSmallest = false;
                arr.unshift(currentNum);
                break;
            }
        }
        if (isSmallest) {
            smallest2Nums.push(currentNum);
        }
    }
    console.log(smallest2Nums.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
console.log('-------------------');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
console.log('-------------------');