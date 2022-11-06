function oddOccurrences(inputString) {
    const wordsArrSmall = inputString.split(' ')
        .map(x => x.toLowerCase())
    const wordCountObject = {};
    wordsArrSmall.forEach(word => {
        if (!wordCountObject[word]) {
            wordCountObject[word] = 0;
        }
        wordCountObject[word]++;
    });
    const wordCountArrFiltered = Object.entries(wordCountObject)
        .filter(x => x[1] % 2 !== 0)
        .sort((a, b) => wordsArrSmall.indexOf(a[0]) - wordsArrSmall.indexOf(b[0]));
    let res = ''
    wordCountArrFiltered.forEach(([word]) => {
        res += `${word} `;
    });
    console.log(res.trim());
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('-----------------------------');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
console.log('-----------------------------');