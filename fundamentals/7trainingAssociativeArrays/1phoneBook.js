function phoneBook(inputArr) {
    let phoneBookObject = {};
    inputArr.forEach(record => {
        let [name, number] = record.split(' ')
        phoneBookObject[name] = number;
    });
    for (const key in phoneBookObject) {
        console.log(`${key} -> ${phoneBookObject[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);
console.log('-------------------------');
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);
console.log('-------------------------');