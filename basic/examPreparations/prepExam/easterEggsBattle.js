function easterEggsBattle(input) {
    let index = 0;
    let player1Eggs = Number(input[index++]);
    let player2Eggs = Number(input[index++]);
    let command = input[index++];
    let weHaveWinner = false;
    while (command != 'End') {
        if (player1Eggs === 0 || player2Eggs === 0) {
            weHaveWinner = true;
            break;
        }
        switch (command) {
            case 'one': player2Eggs--; break;
            case 'two': player1Eggs--; break;
        }
        command = input[index++];
    }
    if (weHaveWinner) {
        if (player1Eggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${player2Eggs} eggs left.`);
        } else {
            console.log(`Player two is out of eggs. Player one has ${player1Eggs} eggs left.`);
        }
    } else {
        console.log(`Player one has ${player1Eggs} eggs left.`);
        console.log(`Player two has ${player2Eggs} eggs left.`);
    }

}
easterEggsBattle(['2', '6', 'one', 'two', 'two'])