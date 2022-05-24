function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index++]);
    let startingPoints = Number(input[index++]);
    let stage = '';
    let tournamentPoints = 0;
    let winCount = 0;

    for (let i = 0; i < tournaments; i++) {
        stage = input[index++];
        switch (stage) { //"W", "F" или "SF"
            case 'W':
                tournamentPoints += 2000;
                winCount++;
                break;
            case 'F': tournamentPoints += 1200; break;
            case 'SF': tournamentPoints += 720; break;
        }
    }
    let avgPoints = Math.floor(tournamentPoints / tournaments);
    let winPercent = winCount / tournaments * 100;
    console.log(`Final points: ${tournamentPoints + startingPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${winPercent.toFixed(2)}%`);
}
tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])


