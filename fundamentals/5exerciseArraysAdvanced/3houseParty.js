function houseParty(arr) {
    let goingArr = [];
    for (guest of arr) {
        let guestArr = guest.split(' ');
        let name = guestArr[0];
        if (guest.includes('not')) {
            if (goingArr.includes(name)) {
                let index = goingArr.indexOf(name);
                goingArr.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (!goingArr.includes(name)) {
                goingArr.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }
    console.log(goingArr.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
console.log('---------------------');
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);
console.log('---------------------');