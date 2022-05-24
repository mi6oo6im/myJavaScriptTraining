function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index++]);
    let startPoints = Number(input[index++]);
    let wins = 0;
    let totalPoints = 0;
    let stage = '';
    for (let i = 0; i < tournaments; i++) {
        stage = input[index++];
        switch (stage){
            case 'W': totalPoints += 2000;
            wins++;
            break;
            case 'F': totalPoints += 1200;break;
            case 'SF': totalPoints += 720;break;
        }
    }
     let avgPoints = Math.floor(totalPoints / tournaments)
        let wonPercent = wins / tournaments * 100;
        console.log(`Final points: ${totalPoints + startPoints}`);
        console.log(`Average points: ${avgPoints}`);
        console.log(`${wonPercent.toFixed(2)}%`);
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
