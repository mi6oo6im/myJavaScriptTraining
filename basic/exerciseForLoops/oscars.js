function oscars(input) {
    let index = 0;
    let actor = input[index++];
    let initPoints = Number(input[index++]);
    let totalPoints = initPoints;
    let jourers = Number(input[index++]);
    let jouryName = '';
    let score = 0;
    let isNominee = false;

    for (let i = 0; i < jourers; i++) {
        jouryName = input[index++];
        score = Number(input[index++]);
        totalPoints += score * jouryName.length / 2;
        if (totalPoints >= 1250.5) {
            isNominee = true;
            break;
        }
    }
    if (isNominee) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        let diff = 1250.5 - totalPoints;
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
