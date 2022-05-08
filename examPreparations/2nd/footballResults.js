function footballResults(input) {
    let game1 = input[0];
    let game2 = input[1];
    let game3 = input[2];

    let wins = 0;
    let losses = 0;
    let draws = 0;

    let homeGoals = Number(game1[0]);
    let awayGoals = Number(game1[2]);

    if (homeGoals > awayGoals) {
        wins++;
    } else if (homeGoals < awayGoals) {
        losses++;
    } else {
        draws++;
    }

    homeGoals = Number(game2[0]);
    awayGoals = Number(game2[2]);

    if (homeGoals > awayGoals) {
        wins++;
    } else if (homeGoals < awayGoals) {
        losses++;
    } else {
        draws++;
    }

    homeGoals = Number(game3[0]);
    awayGoals = Number(game3[2]);

    if (homeGoals > awayGoals) {
        wins++;
    } else if (homeGoals < awayGoals) {
        losses++;
    } else {
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);
}
footballResults(["0:2",
    "0:1",
    "3:3"])


