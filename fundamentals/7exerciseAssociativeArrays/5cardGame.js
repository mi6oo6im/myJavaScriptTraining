function cardGame(inputArr) {
    const cardSetObject = {};
    inputArr.forEach(record => {
        const recordArr = record.split(': ')
        const name = recordArr[0];
        const cardSet = recordArr[1].split(', ');
        if (!cardSetObject[name]) {
            cardSetObject[name] = new Set()
        }
        cardSet.forEach(card => {
            cardSetObject[name].add(card);
        });
    });
    for (const player in cardSetObject) {
        let sum = 0;
        cardSetObject[player].forEach(card => {
            let power = card[0];
            let type = card[card.length - 1];
            switch (power) {
                case 'J': power = 11; break;
                case 'Q': power = 12; break;
                case 'K': power = 13; break;
                case 'A': power = 14; break;
                case '1': power = 10; break;
                default: power = Number(power);
            }
            switch (type) {
                case 'S': type = 4; break;
                case 'H': type = 3; break;
                case 'D': type = 2; break;
                case 'C': type = 1; break;
            }
            sum += power * type;
        });

        console.log(`${player}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);
console.log('-----------------');
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);
console.log('-----------------');