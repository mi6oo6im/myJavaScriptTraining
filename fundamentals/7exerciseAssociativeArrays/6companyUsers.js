function companyUsers(inputArr) {
    const employeeList = {};
    inputArr.forEach(record => {
        let [company, employeeID] = record.split(' -> ');
        if (!employeeList[company]) {
            employeeList[company] = new Set();
        }
        employeeList[company].add(employeeID)
    });
    let employeeListEntries = Object.entries(employeeList)
        .sort((a, b) => a[0].localeCompare(b[0]));
    employeeListEntries.forEach(([company, employees]) => {
        console.log(company);
        employees.forEach(EmployeeID => {
            console.log(`-- ${EmployeeID}`);
        });
    });
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);
console.log('------------------------');
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
);
console.log('------------------------');