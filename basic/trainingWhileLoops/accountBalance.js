function accountBalance(input) {
    let totalSum = 0;
    let index = 0
    let contribution = 0;
    let command = input[index++];

    while (command !== 'NoMoreMoney') {
        contribution = Number(command);
        if (contribution < 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${contribution.toFixed(2)}`);
        totalSum += contribution;
        command = input[index++]
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120",
    "45.55",
    "-150"])

