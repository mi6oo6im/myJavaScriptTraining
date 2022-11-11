function cutAndReverse(inputStr) {
    const half = Math.floor(inputStr.length / 2);
    let first = inputStr.slice(0, half);
    let second = inputStr.slice(half);
    console.log(first.split('')
        .reverse()
        .join(''));
    console.log(second.split('')
        .reverse()
        .join(''));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('--------------------------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
console.log('--------------------------');