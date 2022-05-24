function examPreparation(input) {
    let index = 0
    let poorScoreQty = Number(input[index++]);
    let taskName = '';
    let command = input[index++];
    let score = Number(input[index++]);
    let isEnough = true;
    let countPoorScore = 0;
    let totalScore = 0;
    let countTasks = 0;

    while (command !== 'Enough') {
        countTasks++;
        taskName = command
        totalScore += score;
        if (score <= 4) {
            countPoorScore++;
            if (countPoorScore === poorScoreQty) {
                isEnough = false;
                break;
            }
        }

        command = input[index++];
        score = Number(input[index++]);
    }
    let avgScore = totalScore / countTasks;
    if (!isEnough) {
        console.log(`You need a break, ${countPoorScore} poor grades.`);
    } else {
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${countTasks}`);
        console.log(`Last problem: ${taskName}`);
    }
}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
