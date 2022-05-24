function minNumber(input) {
    let index = 0;
    let smalestNumber = Number.MAX_SAFE_INTEGER;
    let command = input[index++];
    let nextNumber = 0;
    while (command !== 'Stop') {
        nextNumber = Number(command);
        if (nextNumber < smalestNumber) {
            smalestNumber = nextNumber;
        }
        command = input[index++];
    }
    console.log(smalestNumber);
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])


