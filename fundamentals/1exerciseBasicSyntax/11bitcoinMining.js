function bitcoinMining(input) {
    totalBGN = 0;
    totalBitcoin = 0;
    firstBought = false;
    firstDay = 0;
    days = input.length;
    goldPriceStotinki = 6751;
    bitcoinPriceStotinki = 1194916;
    for (let i = 1; i <= days; i++) {
        index = i - 1;
        currentGold = input[index];
        if (i % 3 === 0) {
            currentGold *= (1 - 30 / 100);
        }
        currentBGN = currentGold * goldPriceStotinki;
        totalBGN += currentBGN;
        if (totalBGN >= 1194916 && !firstBought) {
            firstDay = i;
            firstBought = true;
        }
    }
    totalBitcoin = Math.floor(totalBGN / bitcoinPriceStotinki);
    leftBGN = (totalBGN - totalBitcoin * bitcoinPriceStotinki)/100;
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if (firstBought) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${leftBGN.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);