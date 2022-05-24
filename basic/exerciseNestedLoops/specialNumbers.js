function specialNumbers(input) {
    let specialNum = Number(input[0]);
    let buff = ''
    for (i = 1111; i <= 9999; i++){
        let toString = ''+i;
        let a = Number(toString[0]);
        let b = Number(toString[1]);
        let c = Number(toString[2]);
        let d = Number(toString[3]);
        if (specialNum % a === 0 && specialNum % b === 0 &&
            specialNum % c === 0 && specialNum % d === 0){
            buff += toString + ' ';
        }
    }
    console.log(buff);
}
specialNumbers(["16"])