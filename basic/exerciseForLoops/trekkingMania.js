function trekkingMania(input) {
    let groups = input[0];
    let index = 1;
    let groupSize = 0;
    let musala = 0;
    let montblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let climbersCounter = 0;

    for (let i = 0; i < groups; i++) {
        groupSize = Number(input[index++]);
        climbersCounter += groupSize;
        if (groupSize <= 5) {
            musala += groupSize;
        } else if (groupSize <= 12) {
            montblan += groupSize;
        } else if (groupSize <= 25) {
            kilimanjaro += groupSize;
        } else if (groupSize <= 40) {
            k2 += groupSize;
        } else {
            everest += groupSize;
        }
    }
    let musalaP = musala / climbersCounter * 100;
    let montblanP = montblan / climbersCounter * 100;
    let kilimanjaroP = kilimanjaro / climbersCounter * 100;
    let k2P = k2 / climbersCounter * 100;
    let everestP = everest / climbersCounter * 100;

    console.log(`${musalaP.toFixed(2)}%`);
    console.log(`${montblanP.toFixed(2)}%`);
    console.log(`${kilimanjaroP.toFixed(2)}%`);
    console.log(`${k2P.toFixed(2)}%`);
    console.log(`${everestP.toFixed(2)}%`);
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
