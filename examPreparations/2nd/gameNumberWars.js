function gameNumberWars(input) {
    let index = 0;
    let player1 = input[index++];
    let player2 = input[index++];
    let command = input[index++];
    let player1TotalPoints = 0;
    let player2TotalPoints = 0;
    let warIsOn = false;

    while (command !== 'End of game') {
        player1Points = Number(command);
        player2Points = Number(input[index++]);

        if (player1Points > player2Points) {
            player1TotalPoints += player1Points - player2Points;
        } else if (player1Points < player2Points) {
            player2TotalPoints += player2Points - player1Points;
        } else {
            console.log('Number wars!');
            warIsOn = true;
            break;
        }
        command = input[index++];
    }
    if (warIsOn) {
        player1Points = Number(input[index++]);
        player2Points = Number(input[index]);
        if (player1Points > player2Points) {
            console.log(`${player1} is winner with ${player1TotalPoints} points`);
        } else if (player1Points < player2Points) {
            console.log(`${player2} is winner with ${player2TotalPoints} points`);
        }
    } else {
        console.log(`${player1} has ${player1TotalPoints} points`);
        console.log(`${player2} has ${player2TotalPoints} points`);
    }
}
gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"])
