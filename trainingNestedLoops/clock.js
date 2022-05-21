function clock(input) {
    let hour = 0;
    let minute = 0;

    for (let i = 0; i <= 23; i++) {
        minute = 0;
        for (let j = 0; j <= 59; j++) {
            console.log(`${hour}:${minute}`)
            minute++
        }
        hour++;
    }
}
clock()
