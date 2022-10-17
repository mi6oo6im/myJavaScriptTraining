function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    let lastKIndex = arr.length - k;
    let firstK = arr.slice(0, k);
    let lastK = arr.slice(lastKIndex);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers([2, 
    7, 8, 9]);
console.log('--------------------');
firstAndLastKNumbers([3,
    6, 7, 8, 9]);
console.log('--------------------');