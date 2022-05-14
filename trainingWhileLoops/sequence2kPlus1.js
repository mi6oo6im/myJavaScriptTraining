function sequence2kPlus1(input) {
    let n = Number(input[0]);
    let num = 1;
    while (n >= num) {
        console.log(num);
        num = 2 * num + 1
    }
}
sequence2kPlus1(["8"])