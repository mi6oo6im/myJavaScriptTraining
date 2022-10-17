function negativeOrPositiveNumbers(arr) {
    let resArr = [];
    for (num of arr) {
        if (num < 0) {
            resArr.unshift(num);
        } else {
            resArr.push(num);
        }
    }
    res = resArr.join('\n').trim()
    console.log(res);
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log('----------------------------');
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);
console.log('----------------------------');