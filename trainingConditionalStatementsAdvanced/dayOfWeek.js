function dayOfWeek(input) {
    let day = Number(input[0]);
    let res = ''
    switch (day) {
        case 1: res = 'Monday'; break;
        case 2: res = 'Tuesday'; break;
        case 3: res = 'Wednesday'; break;
        case 4: res = 'Thursday'; break;
        case 5: res = 'Friday'; break;
        case 6: res = 'Saturday'; break;
        case 7: res = 'Sunday'; break;
        default: res = 'Error'; break;
    }
    console.log(res);
}
dayOfWeek(["0"])