function reverseInPlace(arr) {
    for (let i = 0, k = arr.length - 1; i < Math.floor(arr.length / 2); i++, k--) {
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
console.log('-------------');
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
console.log('-------------');
reverseInPlace(['33', '123', '0', 'dd']);
console.log('-------------');