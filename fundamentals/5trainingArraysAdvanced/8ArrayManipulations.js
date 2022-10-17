function ArrayManipulations(arr) {
    function add(arr, num) {
        arr.push(num);
        return arr;
    }

    function remove(arr, num) {
        while (arr.includes(num)) {
            let index = arr.indexOf(num);
            arr.splice(index, 1)
        }
        return arr;
    }

    function removeAt(arr, index) {
        arr.splice(index, 1)
        return arr;
    }

    function insert(arr, num, index) {
        arr.splice(index, 0, num)
        return arr;
    }

    let numArr = arr.shift().split(' ');
    for (input of arr) {
        let inputArr = input.split(' ');
        let command = inputArr[0];
        if (command === 'Add') {
            let num = inputArr[1];
            numArr = add(numArr, num);
        } else if (command === 'Remove') {
            let num = inputArr[1];
            numArr = remove(numArr, num);
        } else if (command === 'RemoveAt') {
            let index = inputArr[1];
            numArr = removeAt(numArr, index);
        } else if (command === 'Insert') {
            let num = inputArr[1];
            let index = inputArr[2];
            numArr = insert(numArr, num, index)
        }
    }
    let res = numArr.join(' ');
    console.log(res);
}
ArrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
console.log('--------------------------');
ArrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);
console.log('--------------------------');