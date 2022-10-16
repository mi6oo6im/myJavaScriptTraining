function charactersInRange(char1, char2) {
    function getCharNum(char) {
        return char.charCodeAt()    
    }
    
    function printResultString(char1, char2) {
        let res = ''
        let asciiCodeStart = getCharNum(char1);
        let asciiCodeEnd = getCharNum(char2);
        if (asciiCodeStart > asciiCodeEnd){
            let temp = asciiCodeEnd;
            asciiCodeEnd = asciiCodeStart;
            asciiCodeStart = temp;
        }
        for (let i = asciiCodeStart + 1; i < asciiCodeEnd; i++){
            res += String.fromCharCode(i) + ' ';
        }
        console.log(res.trim());
    }
    printResultString(char1, char2)
}
charactersInRange('a', 'd');
console.log('---------------------');
charactersInRange('#', ':');
console.log('---------------------');
charactersInRange('C', '#');
console.log('---------------------');