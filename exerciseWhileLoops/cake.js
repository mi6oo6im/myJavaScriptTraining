function cake(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let allPieces = width * length;
    let command = input[index++];
    let piecesTaken = 0;
    let noMoreCake = false;

    while (command !== 'STOP') {
        piecesTaken = Number(command);
        allPieces -= piecesTaken;
        if (allPieces < 0) {
            noMoreCake = true;
            break;
        }
        command = input[index++];
    }
    let leftOrNeeded = Math.abs(allPieces)
    if (noMoreCake) {
        console.log(`No more cake left! You need ${leftOrNeeded} pieces more.`);
    } else {
        console.log(`${leftOrNeeded} pieces are left.`);
    }
}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])

