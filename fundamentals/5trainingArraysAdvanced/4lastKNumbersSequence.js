function lastKNumbersSequence(n, k) {
    let sequenceArr = [1];
    for (let i = 1; i < n; i++) {
        let sliceIndex = Math.max(0, sequenceArr.length - k);
        let lastKNums = sequenceArr.slice(sliceIndex);
        let sum = 0;
        for (num of lastKNums) {
            sum += num;
        }
        sequenceArr.push(sum);
    }
    let res = sequenceArr.join(' ');
    console.log(res);
}
lastKNumbersSequence(6, 3);
console.log('------------------');
lastKNumbersSequence(8, 2);
console.log('------------------');