function salary(input) {
    let index = 0;
    let websites = Number(input[index++]);
    let salary = Number(input[index++]);
    let browserTab = ''
    let workForFree = false;

    for (let i = 0; i < websites; i++) {
        browserTab = input[index++];
        switch (browserTab) {
            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break;
        }
        if (salary <= 0) {
            workForFree = true;
            break;
        }
    }
    if (workForFree) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(`${salary}`);
    }
}
salary(["3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"])
