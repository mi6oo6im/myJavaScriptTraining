function basketballTournament(input) {
    let index = 0;
    let tournament = ''
    let homeResult = 0;
    let awayResult = 0;
    let command = input[index++];
    let gamesWon = 0;
    let gamesLost = 0;
    while (command !== 'End of tournaments') {
        tournament = command;
        let games = Number(input[index++]);
        for (let i = 1; i <= games; i++) {
            homeResult = Number(input[index++]);
            awayResult = Number(input[index++]);
            let diff = Math.abs(homeResult - awayResult)
            if (homeResult > awayResult) {
                gamesWon++;
                console.log(`Game ${i} of tournament ${tournament}: win with ${diff} points.`);
            } else {
                gamesLost++;
                console.log(`Game ${i} of tournament ${tournament}: lost with ${diff} points.`);
            }
        }
        command = input[index++];
    }
    let wonP = gamesWon / (gamesLost + gamesWon) * 100;
    let lostP = gamesLost / (gamesLost + gamesWon) * 100;

    console.log(`${wonP.toFixed(2)}% matches win`);
    console.log(`${lostP.toFixed(2)}% matches lost`);

}
basketballTournament(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])

