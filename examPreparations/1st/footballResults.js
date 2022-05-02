function footballResults(input) {
    let game1 = input[0];
    let game2 = input[1];
    let game3 = input[2];
    let countWin = 0;
    let countLoss = 0;
    let countDraw = 0;
    let scoreHome = Number(game1[0]);
    let scoreAway = Number(game1[2]);

    if (scoreHome > scoreAway) {
        countWin++;
    } else if (scoreHome < scoreAway) {
        countLoss++;
    } else {
        countDraw++;
    }

    scoreHome = Number(game2[0]);
    scoreAway = Number(game2[2]);

    if (scoreHome > scoreAway) {
        countWin++;
    } else if (scoreHome < scoreAway) {
        countLoss++;
    } else {
        countDraw++;
    }

    scoreHome = Number(game3[0]);
    scoreAway = Number(game3[2]);

    if (scoreHome > scoreAway) {
        countWin++;
    } else if (scoreHome < scoreAway) {
        countLoss++;
    } else {
        countDraw++;
    }

    console.log(`Team won ${countWin} games.`);
    console.log(`Team lost ${countLoss} games.`);
    console.log(`Drawn games: ${countDraw}`);
}
footballResults(["0:2",
    "0:1",
    "3:3"])


