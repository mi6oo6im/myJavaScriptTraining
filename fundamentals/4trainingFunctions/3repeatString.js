function repeatString(str, repeatr) {
    let res = ''
    for(let i = 0; i < repeatr; i++){
        res += str
    }
    console.log(res);
}
repeatString("abc", 3);
console.log('---------------');
repeatString("String", 2);
console.log('---------------');