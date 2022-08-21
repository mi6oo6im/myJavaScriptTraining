function dayOfWeek(weekday) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (weekday < 1 || weekday > 7){
        console.log('Invalid day!');
    } else {
        console.log(weekDays[weekday-1]);
    }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);