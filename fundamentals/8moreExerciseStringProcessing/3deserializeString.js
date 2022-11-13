function deserializeString(inputArr) {
    let res = ''
    let charMatrix = []
    let index = 0;
    let current = inputArr[index++];
    while (current !== 'end') {
        let currentArr = current.split(':');
        let char = currentArr.shift();
        let indices = String(currentArr).split('/');
        indices.forEach(charIndex => {
            charMatrix.push([char, Number(charIndex)])
        });
        current = inputArr[index++];
    }
    charMatrix.sort((a, b) => a[1] - b[1]);
    charMatrix.forEach(arr => {
        res += arr[0];
    });
    console.log(res);
}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
console.log('--------------------------------');
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);
console.log('--------------------------------');