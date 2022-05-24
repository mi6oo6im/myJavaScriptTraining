function toyShop(input) {
    //Пъзел - 2.60 лв.
    //Говореща кукла - 3 лв.
    //Плюшено мече - 4.10 лв.
    //Миньон - 8.20 лв.
    //Камионче - 2 лв.
    let index = 0;
    let tripPrice = Number(input[index]);
    index++;
    let puzzles = Number(input[index]);
    index++;
    let dolls = Number(input[index]);
    index++;
    let teddies = Number(input[index]);
    index++;
    let minions = Number(input[index]);
    index++;
    let trucks = Number(input[index]);

    let puzzleIncome = puzzles * 2.60;
    let dollsIncome = dolls * 3;
    let teddiesIncome = teddies * 4.10;
    let minionsIncome = minions * 8.20;
    let trucksIncome = trucks * 2;

    let totalIncome = puzzleIncome + dollsIncome + teddiesIncome +
        minionsIncome + trucksIncome;
    let totalToys = puzzles + dolls + teddies + minions + trucks;

    if (totalToys >= 50) {
        totalIncome *= (1 - 25 / 100); // 25% discount
    }
    totalIncome *= (1 - 10 / 100); // 10% rent
    let diff = Math.abs(totalIncome - tripPrice);
    if (totalIncome >= tripPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])

