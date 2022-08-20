function spiceMustFlow(yield) {
    let days = 0
    let totalSpice = 0
    while (yield >= 100) {
        totalSpice += yield;
        totalSpice -= 26;
        yield -= 10;
        days++
    }
    if (totalSpice < 26) {
        totalSpice = 0;
    } else {
        totalSpice -= 26;
    }
    console.log(`${days}\n${totalSpice}`);
}
spiceMustFlow(111);
spiceMustFlow(450);