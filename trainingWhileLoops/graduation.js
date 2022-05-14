function graduation(input) {
    let index = 0;
    let gradYear = 12;
    let student = input[index++];
    let grade = Number(input[index++]);
    let year = 1;
    let isExpeled = false;
    let repeat = 0;
    let totalGrade = 0;
    let avgGrade = 0;
    while (year <= gradYear) {
        if (grade < 4) {
            repeat++;
            if (repeat === 2) {
                isExpeled = true;
                break;
            }
        } else {
            year++;
            totalGrade += grade;
        }
        grade = Number(input[index++]);
    }
    avgGrade = totalGrade / 12
    if (isExpeled) {
        console.log(`${student} has been excluded at ${year} grade`);
    } else {
        console.log(`${student} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
