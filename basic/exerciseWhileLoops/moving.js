function moving(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let heigth = Number(input[index++]);
    let volume = width * heigth * length;
    let command = input[index++];
    let youReDone = true;
    let numBoxes = 0;
    while (command !== 'Done') {
        numBoxes = Number(command);
        volume -= numBoxes;
        if (volume < 0) {
            youReDone = false
            break;
        }
        command = input[index++];
    }
    volume = Math.abs(volume);
    if (youReDone) {
        console.log(`${volume} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${volume} Cubic meters more.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

