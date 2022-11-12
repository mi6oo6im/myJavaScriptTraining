function passwordGenerator(inputArr) {
    const firstString = inputArr.shift()
        .toLowerCase();
    const secondString = inputArr.shift()
        .toLowerCase();
    const key = String(inputArr).toUpperCase();
    let concatString = firstString + secondString;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const stringArr = concatString.split('');
    let keyIndex = 0;
    for (let index = 0; index < stringArr.length; index++) {
        let currentChar = stringArr[index];
        if (vowels.includes(currentChar)) {
            stringArr[index] = key[keyIndex++];
            if (key[keyIndex] === undefined) {
                keyIndex = 0;
            }
        }
    }
    console.log('Your generated password is '
        + stringArr
            .reverse()
            .join(''));
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
);
console.log('----------------------');
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]
);
console.log('----------------------');
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]
);
console.log('----------------------');