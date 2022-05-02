function pcGameShop(input) {
    // Hearthstone
    // Fornite
    // Overwatch
    // Others
    let index = 0;
    let gamesCount = Number(input[index++]);
    let hearthstoneSold = 0;
    let forniteSold = 0;
    let overwatchSold = 0;
    let othersSold = 0;
    let game = input[index++];
    for (let i = 0; i < gamesCount; i++) {
        switch (game) {
            case 'Hearthstone': hearthstoneSold++; break;
            case 'Fornite': forniteSold++; break;
            case 'Overwatch': overwatchSold++; break;
            default: othersSold++; break;
        }
        game = input[index++]
    }
    let total = hearthstoneSold + forniteSold + overwatchSold + othersSold;
    let hearthstoneSoldAvg = hearthstoneSold / total * 100;
    let forniteSoldAvg = forniteSold / total * 100;
    let overwatchSoldAvg = overwatchSold / total * 100;
    let othersSoldAvg = othersSold / total * 100;

    console.log(`Hearthstone - ${hearthstoneSoldAvg.toFixed(2)}%`);
    console.log(`Fornite - ${forniteSoldAvg.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchSoldAvg.toFixed(2)}%`);
    console.log(`Others - ${othersSoldAvg.toFixed(2)}%`);

}
pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"])
