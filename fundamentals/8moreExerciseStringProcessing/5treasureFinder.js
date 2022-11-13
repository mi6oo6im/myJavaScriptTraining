function treasureFinder(inputArr) {
    const keyArr = inputArr.shift()
        .split(' ');
    let current = inputArr.shift();
    while (current !== 'find') {
        const arr = current.split('');
        let keyIndex = 0;
        for (let index = 0; index < arr.length; index++) {
            arr[index] = String.fromCharCode(arr[index].charCodeAt() - keyArr[keyIndex++]);
            if (keyIndex >= keyArr.length) {
                keyIndex = 0;
            }
        }
        current = inputArr.shift();
        let resource = arr.slice(arr.indexOf('&') + 1, arr.lastIndexOf('&')).join('');
        let coordinates = arr.slice(arr.indexOf('<') + 1, arr.indexOf('>')).join('');
        console.log(`Found ${resource} at ${coordinates}`);
    }
}
treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);
console.log('----------------------------');
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);
console.log('----------------------------');