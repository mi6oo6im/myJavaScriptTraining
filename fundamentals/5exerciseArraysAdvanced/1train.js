function train(arr) {
    function addCart(trainArr, newCart) {
        trainArr.push(newCart);
        return trainArr;
    }

    function loadPassangers(trainArr, passangers) {
        let lenght = trainArr.length;
        for (let i = 0; i < lenght; i++) {
            let currentCartLoad = Number(trainArr[i]);
            if (currentCartLoad <= cartCapacity - passangers) {
                trainArr[i] = String(currentCartLoad + passangers)
                break;
            }
        }
        return trainArr;
    }
    function printTrain(trainArr) {
        console.log(trainArr.join(' '));
    }

    let train = arr.shift().split(' ');
    let cartCapacity = Number(arr.shift());
    for (input of arr) {
        let inputArr = input.split(' ');
        let command = inputArr[0];
        if (command === 'Add') {
            let newCart = inputArr[1];
            train = addCart(train, newCart);
        } else {
            let passangers = Number(inputArr);
            train = loadPassangers(train, passangers)
        }
    }
    printTrain(train)
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
console.log('---------------------------');
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);
console.log('---------------------------');