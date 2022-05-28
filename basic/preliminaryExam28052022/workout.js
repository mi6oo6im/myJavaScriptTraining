function workout(input) {
    let index = 0;
    let days = Number(input[index++]);
    let firstDayDistance = Number(input[index++]);
    let totalDistance = firstDayDistance;
    let target = 1000;
    let currentDayRun = firstDayDistance;
    for (let day = 1; day <= days; day++) {
        let incrementalPercent = Number(input[index++]);
        currentDayRun *= (1 + incrementalPercent / 100);
        totalDistance += currentDayRun;
    }

    let diff = Math.ceil(Math.abs(totalDistance - target));
    if (target > totalDistance) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${diff} more kilometers`);
    } else {
        console.log(`You've done a great job running ${diff} more kilometers!`);
    }
}
workout(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])

