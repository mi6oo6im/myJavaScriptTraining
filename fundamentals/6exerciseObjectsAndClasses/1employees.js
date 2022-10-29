function employees(inputArr) {
    let employeeList = {}
    inputArr.forEach(employeeName => {
        let employeeNumber = employeeName.length;
        employeeList[employeeName] = employeeNumber
    });
    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
console.log('-----------------------');
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland']);
console.log('-----------------------');