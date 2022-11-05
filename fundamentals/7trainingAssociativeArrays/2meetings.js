function meetings(inputArr) {
    let schedule = {};
    inputArr.forEach(record => {
        let [weekday, name] = record.split(' ');
        if (schedule.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            schedule[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    });
    for (const weekday in schedule) {
        console.log(`${weekday} -> ${schedule[weekday]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
console.log('--------------------------');
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);
console.log('--------------------------');