function numberInRange(input) {
    let num = Number(input[0]);
    let res = '';
    if (num >= -100 && num <= 100 && num !== 0) {
        res = 'Yes';
    } else {
        res = 'No';
    }
    console.log(res);
}
numberInRange(["0"]);