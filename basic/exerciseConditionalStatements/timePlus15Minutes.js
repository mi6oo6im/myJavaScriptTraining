function timePlus15Minutes(input) {
    let index = 0;
    let hours = Number(input[index]);
    index++;
    let minutes = Number(input[index]);
    let increment = 15;
    let toMinutes = hours * 60 + minutes;
    let timeInMinutes = toMinutes + increment;
    let nowInHours = Math.floor(timeInMinutes / 60);
    if (nowInHours > 23) {
        nowInHours = 0;
    }
    let nowInMinutes = timeInMinutes % 60;

    console.log(`${nowInHours}:${String(nowInMinutes).padStart(2, "0")}`);
}
timePlus15Minutes(["12", "49"])