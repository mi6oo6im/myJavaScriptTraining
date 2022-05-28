function bestPlayer(input) {
    let index = 0;
    let command = input[index++];
    let maxGoals = 0;
    let bestPlayer = '';
    while (command !== 'END') {
        let name = command;
        let goals = Number(input[index++]);
        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = name;
        }
        if (goals >= 10) {
            break;
        }
        command = input[index++];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}
bestPlayer(["Zidane",
    "1",
    "Felipe",
    "2",
    "Johnson",
    "4",
    "END"])
