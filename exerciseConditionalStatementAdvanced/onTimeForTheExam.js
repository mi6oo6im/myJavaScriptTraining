function onTimeForTheExam(input) {
    let index = 0;
    let examHour = Number(input[index++]);
    let examMinute = Number(input[index++]);
    let arrivalHour = Number(input[index++]);
    let arrivalMinute = Number(input[index]);
    let examInMinutes = examHour * 60 + examMinute;
    let arrivalInMinutes = arrivalHour * 60 + arrivalMinute;
    let res = '';
    let res2 = '';

    if (arrivalInMinutes > examInMinutes) {
        res = ('Late');
    } else if (arrivalInMinutes <= examInMinutes &&
        arrivalInMinutes + 30 >= examInMinutes) {
        res = ('On time');
    } else {
        res = ('Early');
    }
    let diff = Math.abs(arrivalInMinutes - examInMinutes);
    let hh = Math.floor(diff / 60);
    let mm = diff % 60;
    if (diff < 60 && diff !== 0 && (res === 'Early' || res === 'On time')) {
        res2 = `${diff} minutes before the start`;
    } else if (diff >= 60 && res === 'Early') {
        res2 = `${hh}:${String(mm).padStart(2, '0')} hours before the start`;
    } else if (diff < 60 && res === 'Late') {
        res2 = `${diff} minutes after the start`;
    } else if (diff >= 60 && res === 'Late') {
        res2 = `${hh}:${String(mm).padStart(2, '0')} hours after the start`;
    }

    console.log(res); //"Late","On time", "Early"
    console.log(res2);  // supplementary information

}
onTimeForTheExam(["11",
    "30",
    "12",
    "29"])









