function specialNumbers(num) {
    for (let i = 1; i <= num; i++){
        let numToString = String(i);
        let sum = 0
        for (let i = 0; i < numToString.length; i++){
            sum += Number(numToString[i]);
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${numToString} -> True`);
        } else {
            console.log(`${numToString} -> False`);
        }
    }
}
specialNumbers(15);
specialNumbers(20);