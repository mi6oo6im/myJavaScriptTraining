function triplesOfLatinLetters(numAsString) {
    num = Number(numAsString);
    for (let i = 0; i < num; i ++){
        for (let j = 0; j < num; j ++){
            for (let k = 0; k < num; k ++){
                letterI = String.fromCharCode(97+i);
                letterJ = String.fromCharCode(97+j);
                letterK = String.fromCharCode(97+k);
                console.log(`${letterI}${letterJ}${letterK}`);
            }
        }
    }
}
triplesOfLatinLetters('3');
triplesOfLatinLetters(2);