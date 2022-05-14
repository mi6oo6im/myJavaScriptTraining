function maxNumber(input) {
    let index = 0;
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let command = input[index++];
    let nextNumber = 0;
    while (command !== 'Stop') {
        nextNumber = Number(command);
        if (nextNumber > biggestNumber) {
            biggestNumber = nextNumber;
        }
        command = input[index++];
    }
    console.log(biggestNumber);
}
maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
