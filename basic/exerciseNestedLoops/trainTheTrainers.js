function trainTheTrainers(input) {
    let index = 0;
    let jurours = Number(input[index++]);
    let presentation = input[index++];
    let finalGrade = 0;
    let counter = 0;
    while (presentation !== 'Finish') {
        counter++;
        let grade = 0;
        let tempGrade = 0;
        for (let i = 0; i < jurours; i++) {
            grade = Number(input[index++]);
            tempGrade += grade;
        }
        let gradeAVG = tempGrade / jurours;
        console.log(`${presentation} - ${gradeAVG.toFixed(2)}.`);
        finalGrade += gradeAVG;
        presentation = input[index++];
    }
    finalGrade /= counter;
    console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])
