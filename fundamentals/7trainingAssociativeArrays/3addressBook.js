function addressBook(inputArr) {
    const addressBookObject = {};
    inputArr.forEach(record => {
        let [name, address] = record.split(':');
        addressBookObject[name] = address;
    });
    const addressBookArr = Object.entries(addressBookObject);
    addressBookArr.sort((a, b) => a[0].localeCompare(b[0]));
    let sortedAddressBook = Object.fromEntries(addressBookArr);
    for (const name in sortedAddressBook) {
        console.log(`${name} -> ${sortedAddressBook[name]}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
console.log('--------------------------------');
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);
console.log('--------------------------------');