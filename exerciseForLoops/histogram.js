function histogram(input) {
    numbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let index = 1; index <= numbers; index++) {
        let currentNum = Number(input[index])
        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++
        } else if (currentNum < 600) {
            p3++
        } else if (currentNum < 800) {
            p4++
        } else {
            p5++
        }
    }
    let p1Percent = p1 / numbers * 100;
    let p2Percent = p2 / numbers * 100;
    let p3Percent = p3 / numbers * 100;
    let p4Percent = p4 / numbers * 100;
    let p5Percent = p5 / numbers * 100;

    console.log(`${p1Percent.toFixed(2)}%\n${p2Percent.toFixed(2)}%\n${p3Percent.toFixed(2)}%\n${p4Percent.toFixed(2)}%\n${p5Percent.toFixed(2)}%`);
}
histogram(["3",
    "1",
    "2",
    "999"])

