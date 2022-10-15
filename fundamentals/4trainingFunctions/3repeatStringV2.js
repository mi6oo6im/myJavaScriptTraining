function repeatString(str, repeatr) {
    let repeaterFunc = (x, y) => x.repeat(y);
    let repeatedStr = repeaterFunc(str, repeatr)
    console.log(repeatedStr);
}
repeatString("abc", 3);
console.log('---------------');
repeatString("String", 2);
console.log('---------------');