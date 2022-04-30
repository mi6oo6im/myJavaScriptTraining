function worldSwimmingRecord(input) {
    let index = 0;
    let recrod = Number(input[index]);
    index++
    let distance = Number(input[index]);
    index++
    let secPerMeter = Number(input[index]);
    let delaySecs = Math.floor(distance / 15) * 12.5; //deley 12,5 sec every 15 meters
    let newTime = distance * secPerMeter + delaySecs; //Ivan's time + delay
    let diff = Math.abs(newTime - recrod);

    if (newTime < recrod) {
        console.log(`Yes, he succeeded! The new world record is ${newTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
    "3017",
    "5.03"])
