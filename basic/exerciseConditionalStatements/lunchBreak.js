function lunchBreak(input){
    let index = 0;
    let series = input[index];
    index++
    let episodeLength = Number(input[index]);
    index++
    let breakLength = Number(input[index]);
    let lunchBreak = breakLength / 8;
    let relaxBreak = breakLength / 4;
    let watchTime = breakLength - lunchBreak - relaxBreak;
    let diff = Math.ceil(Math.abs(watchTime - episodeLength));

    if (watchTime >= episodeLength){
        console.log(`You have enough time to watch ${series} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${diff} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])
