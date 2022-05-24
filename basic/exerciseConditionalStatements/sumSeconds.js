function sumSeconds(input) {
    let index = 0;
    let firstTime = Number(input[index]);
    index++;
    let secondTime = Number(input[index]);
    index++;
    let thirdTime = Number(input[index]);

    let sumSeconds = firstTime + secondTime + thirdTime;

    let timeMinutes = Math.floor(sumSeconds / 60);
    let timeSeconds = sumSeconds % 60;

    console.log(`${timeMinutes}:${timeSeconds.toString().padStart(2, '0')}`);
}
sumSeconds(["35",
    "45",
    "44"])
