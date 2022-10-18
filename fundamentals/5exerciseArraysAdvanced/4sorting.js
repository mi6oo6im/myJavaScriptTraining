function sorting(arr) {
    let sortedArrAsc = arr.slice().sort((a, b) => a - b);
    let sortedArrDesc = arr.slice().sort((a, b) => b - a);
    let resArr = [];
    let halfLength = Math.floor(arr.length / 2);

    for (let i = 0; i < halfLength; i++) {
        resArr.push(sortedArrDesc[i], sortedArrAsc[i]);
    }
    if (arr.length % 2 !== 0) {
        resArr.push(sortedArrDesc[halfLength])
    }
    console.log(resArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18]);
console.log('------------------------------');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
console.log('------------------------------');