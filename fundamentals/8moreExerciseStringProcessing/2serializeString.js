function serializeString(inputArr) {
    const string = String(inputArr[0]);
    const uniqueChArr = [];
    for (const char of string) {
        if (!uniqueChArr.includes(char)) {
            uniqueChArr.push(char)
        }
    }
    uniqueChArr.forEach(char => {
        let indeces = [];
        let index = 0;
        while (index < string.length && index >= 0) {
            index = string.indexOf(char, index);
            if (index === -1) {
                break;
            }
            indeces.push(index++);
        }
        console.log(`${char}:${indeces.join('/')}`);
    });
}
serializeString(["abababa"]);
console.log('---------------------------------');
serializeString(["avjavamsdmcalsdm"]);
console.log('---------------------------------');