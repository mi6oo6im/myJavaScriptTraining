function cleverLily(input) {
    let index = 0;
    let ageOfLily = Number(input[index++]);
    let priceOfWashingmachine = Number(input[index++]);
    let toyPrice = Number(input[index]);
    let sumOfMoney = 0;
    let increment = 0;
    let toyQty = 0;

    for (let year = 1; year <= ageOfLily; year++) {
        if (year % 2 === 0) {
            increment += 10;
            sumOfMoney += increment;
            sumOfMoney--;
        } else {
            toyQty++;
        }
    }
    let totalSaved = sumOfMoney + toyQty * toyPrice;
    let diff = Math.abs(totalSaved - priceOfWashingmachine);

    if (totalSaved >= priceOfWashingmachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
cleverLily(["21",
    "1570.98",
    "3"])

