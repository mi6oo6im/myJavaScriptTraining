function darts(input) {
    let index = 0;
    let name = input[index++];
    let command = input[index++];
    let zone = '';//"Single", "Double" или "Triple")
    let roundPoints = 0;
    let totalPoints = 301;
    let hasWon = false;
    let successfulShots = 0;
    let unsuccessfulShots = 0;

    while (command !== 'Retire') {
        zone = command;
        roundPoints = Number(input[index++])
        switch (zone) {
            case 'Double': roundPoints *= 2; break;
            case 'Triple': roundPoints *= 3; break;
        }
        if (totalPoints < roundPoints) {
            unsuccessfulShots++;
            command = input[index++];
            continue;
        } else {
            successfulShots++;
            totalPoints -= roundPoints;
        }
        if (totalPoints === 0) {
            hasWon = true;
            break;
        }
        command = input[index++];
    }
    if (hasWon) {
        console.log(`${name} won the leg with ${successfulShots} shots.`);
    } else {
        console.log(`${name} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
}
darts(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retire"])
