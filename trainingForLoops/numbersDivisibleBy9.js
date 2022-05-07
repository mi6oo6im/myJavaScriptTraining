function numbersDivisibleBy9(input) {
    let first = Number(input[0]);
    let last = Number(input[1]);
    let sum = 0;
    let all = '';

    for (let i = first; i <= last; i++) {
        if (i % 9 === 0) {
            sum += i;
            all += `${i}\n`
        }
    }
    console.log(`The sum: ${sum}\n${all}`);
}
numbersDivisibleBy9(["100", "200"])
