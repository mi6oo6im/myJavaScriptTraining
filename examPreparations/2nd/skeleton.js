function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconts = Number(input[1]);
    let pipeLengthMeters = Number(input[2]);
    let secondsFor100Merters = Number(input[3]);
    let contrlInSecondsOnly = controlMinutes * 60 + controlSeconts;
    let minusInSeconds = pipeLengthMeters / 120 * 2.5;
    let marinkoTime = pipeLengthMeters / 100 * secondsFor100Merters - minusInSeconds;

    if (marinkoTime <= contrlInSecondsOnly) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${marinkoTime.toFixed(3)}.`);
    } else {
        let diff = marinkoTime - contrlInSecondsOnly;
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }




}
skeleton(["2",
    "12",
    "1200",
    "10"])


