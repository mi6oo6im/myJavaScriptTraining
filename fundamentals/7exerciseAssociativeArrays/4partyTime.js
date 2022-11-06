function partyTime(inputArr) {
    const listVIP = [];
    const listRegular = [];
    let guest = inputArr.shift();
    while (guest !== 'PARTY') {
        if (isNaN(guest[0])) {
            listRegular.push(guest);
        } else {
            listVIP.push(guest);
        }
        guest = inputArr.shift();
    }
    const guestList = listVIP.concat(listRegular);
    inputArr.forEach(guest => {
        guestList.splice(guestList.indexOf(guest), 1)
    });
    console.log(guestList.length);
    guestList.forEach(guest => {
        console.log(guest);
    });
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);
console.log('-----------------------');
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);
console.log('-----------------------');