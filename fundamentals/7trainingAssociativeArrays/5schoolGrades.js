function schoolGrades(inputArr) {
    const studentsList = {};
    inputArr.forEach(record => {
        recordArr = record.split(' ')
        const student = recordArr.shift();
        recordArr = recordArr.map(a => Number(a))
        if (!studentsList[student]) {
            studentsList[student] = [];
        }
        studentsList[student] = studentsList[student].concat(recordArr)
    });
    let studentArr = Object.entries(studentsList)
        .sort((a, b) => a[0]
            .localeCompare(b[0]));
    studentArr.forEach(record => {
        const student = record[0];
        const grades = record[1];
        const avgGrades = grades.reduce((a, b) => a + b) / grades.length;
        console.log(`${student}: ${avgGrades.toFixed(2)}`);
    });
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
console.log('------------------------');
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
);
console.log('------------------------');