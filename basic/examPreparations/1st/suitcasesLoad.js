function suitcasesLoad(input) {
    let index = 0;
    let capacity = Number(input[index++]);
    let caseVolume = 0;
    let casesIn = 0;
    let command = input[index++];
    let isLoaded = true;

    while (command !== 'End') {
        casesIn++;
        caseVolume = Number(command);
        if (casesIn % 3 === 0) {
            caseVolume *= 1.1;
        }
        if (capacity < caseVolume) {
            casesIn--;
            isLoaded = false;
            break;
        }
        capacity -= caseVolume;
        command = input[index++];
    }
    if (isLoaded) {
        console.log('Congratulations! All suitcases are loaded!');
    } else {
        console.log('No more space!');
    }
    console.log(`Statistic: ${casesIn} suitcases loaded.`);
}
suitcasesLoad(["1200.2",
    "260",
    "380.5",
    "125.6",
    "305",
    "End"])


