function vacation(input) {
    let index = 0;
    let vacationCost = Number(input[index++]);
    let moneyInHand = Number(input[index++]);
    let saveSpend = input[index++];
    let newMoney = Number(input[index++]);
    let isBigSpender = false;
    let daysSpent = 0;
    let totalDays = 0;

    while (moneyInHand < vacationCost) {
        totalDays++;
        if (saveSpend === 'save') {
            moneyInHand += newMoney;
            daysSpent = 0;
        } else {
            daysSpent++;
            moneyInHand -= newMoney;
            if (moneyInHand < 0) {
                moneyInHand = 0;
            }
            if (daysSpent === 5) {
                isBigSpender = true;
                break;
            }
        }
        saveSpend = input[index++];
        newMoney = Number(input[index++]);

    }
    if (isBigSpender) {
        console.log("You can't save the money.");
        console.log(`${totalDays}`);
    } else {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);