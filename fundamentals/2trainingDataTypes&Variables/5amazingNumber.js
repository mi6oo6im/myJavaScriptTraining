function amazingNumber(num) {
    numToString = String(num);
    sum = 0;
    for (let i = 0; i < numToString.length; i++){
        number = Number(numToString[i]);
        sum += number;
    }
    sumToString = String(sum);
    if (sumToString.match('9')){
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumber(1233);
amazingNumber(999);