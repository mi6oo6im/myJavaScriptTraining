function sumAndProduct(input) {
    let numberN = Number(input[0])
    let combinationIsFound = false;
    for (let a = 1; a <= 9; a++) {
        if (combinationIsFound){
            break;
        }
        for (let b = 9; b >= a; b--) {
            if (combinationIsFound){
                break;
            }
            for (let c = 0; c <= 9; c++) {
                if (combinationIsFound){
                    break;
                }
                for (let d = 9; d >= c; d--) {
                    if (a + b + c + d === a * b * c * d && numberN % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        combinationIsFound = true;
                        break;
                    } else if (Math.floor((a * b * c * d) / (a + b + c + d)) === 3 && numberN % 3 === 0){
                        console.log(`${d}${c}${b}${a}`); 
                        combinationIsFound = true;
                        break;
                    }
                }
            }
        }
    }
    if(!combinationIsFound){
        console.log("Nothing found");
    }
}
sumAndProduct(["214"])