function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index++]);
    let command = input[index++];
    let dayWins = 0;
    let dayLosses = 0;
    let totalMoney = 0;

    for (let i = 0; i < days; i++) {
        let todayMoney = 0;
        let todayWins = 0;
        let todayLosses = 0;
        let game = '';
        let winLoss = '';


        while (command !== 'Finish') {
            game = command;
            winLoss = input[index++];
            if (winLoss === 'win') {
                todayWins++;
                todayMoney += 20;
            } else {
                todayLosses++;
            }
            command = input[index++];
        }
        if (todayWins > todayLosses) {
            dayWins++;
            todayMoney *= 1.1;
        } else {
            dayLosses++;
        }
        totalMoney += todayMoney;
        command = input[index++];
    }
    if (dayWins > dayLosses) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])
