function numberPyramid(input) {
    let numbers = Number(input[0]);
    let num = 0;

    for (let row = 1; row <= numbers; row++) {
        let buff = '';
        for (let column = 0; column < row; column++) {
            num++;
            buff += num + ' '
            if (num === numbers) {
                break;
            }
        }
        console.log(buff);
        if (num === numbers) {
            break;
        }
    }
}
numberPyramid(["12"])
