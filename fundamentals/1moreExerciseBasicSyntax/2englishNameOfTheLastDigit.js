function englishNameOfTheLastDigit(num) {
    let numStr = num.toString()
    let lastDigit = Number(numStr[numStr.length - 1]);
    let res = ''
    switch(lastDigit){
        case 1: res = 'one'; break;
        case 2: res = 'two'; break;
        case 3: res = 'three'; break;
        case 4: res = 'four'; break;
        case 5: res = 'five'; break;
        case 6: res = 'six'; break;
        case 7: res = 'seven'; break;
        case 8: res = 'eight'; break;
        case 9: res = 'nine'; break;
        case 0: res = 'zero'; break;
    }
    console.log(res);
}
englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);