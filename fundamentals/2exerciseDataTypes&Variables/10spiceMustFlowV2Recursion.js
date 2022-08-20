function spiceMustFlow(yield) {
    function recursion(yield, totalSpice, days) {
        if (yield < 100) {
            if (totalSpice < 26) {
                totalSpice = 0;
            } else {
                totalSpice -= 26;
            }
            console.log(`${days}\n${totalSpice}`);
            return;
        }
        totalSpice += yield;
        totalSpice -= 26;
        yield -= 10;
        days++
        recursion(yield, totalSpice, days)
    }
    recursion(yield, 0, 0);
}
spiceMustFlow(111);
spiceMustFlow(450);