function asciiSumator(inputArr) {
    let bottom = inputArr[0].charCodeAt();
    let top = inputArr[1].charCodeAt();
    if (top < bottom) {
        let temp = top;
        top = bottom;
        bottom = temp;
    }
    const strArr = inputArr.pop().split('').filter(x => x.charCodeAt() > bottom && x.charCodeAt() < top);
    let res = 0;
    strArr.forEach(char => {
        res += char.charCodeAt();
    });
    console.log(res);
}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);
console.log('-------------------------------');
asciiSumator(['?',
    'E',
    '@ABCEF']);
console.log('-------------------------------');
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);
console.log('-------------------------------');