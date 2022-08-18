function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day + 1);
    let newDay = date.getDate();
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();
    console.log(`${newYear}-${newMonth + 1}-${newDay}`);
}
nextDay(2016, 9, 30);