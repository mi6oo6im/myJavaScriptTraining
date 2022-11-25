function race(inputArr) {
    const racers = inputArr.shift();
    const race = {};
    const regexpLetters = /[A-Za-z]/g;
    const regexpNumbers = /\d/g;
    let record = inputArr.shift();
    while (record !== 'end of race') {
        let letters = record.match(regexpLetters);
        let racer = letters.join('')
        let numbers = record.match(regexpNumbers).map(x => Number(x));
        let distance = numbers.reduce((a, b) => a + b);
        if (racers.includes(racer)){
            if (!race.hasOwnProperty(racer)) {
                race[racer] = 0;
            };
            race[racer] += distance;
        }
        record = inputArr.shift();
    }
    const orderedRace = Object.entries(race).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${orderedRace[0][0]}`);
    console.log(`2nd place: ${orderedRace[1][0]}`);
    console.log(`3rd place: ${orderedRace[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
console.log('-------------------------------');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);
console.log('-------------------------------');