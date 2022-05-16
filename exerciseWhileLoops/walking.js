function walking(input) {
    let target = 10000;
    let index = 0;
    let isComingHome = false;
    let totalSteps = 0;
    let command = input[index++];
    while (totalSteps < 10000) {
        if (command === 'Going home') {
            isComingHome = true;
            totalSteps += Number(input[index]);
            break;
        }
        totalSteps += Number(command);
        command = input[index++];
    }
    let diff = Math.abs(totalSteps - target);
    if (isComingHome && totalSteps < target) {
        console.log(`${diff} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    }
}
walking(["1000",
    "1500",
    "2000",
    "6500"])




