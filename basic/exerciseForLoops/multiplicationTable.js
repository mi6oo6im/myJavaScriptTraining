function multiplicationTable(input) {
    let multiplier = input[0];

    for (let i = 1; i <= 10; i++) {
        let res = i * multiplier;
        console.log(`${i} * ${multiplier} = ${res}`);
    }
}
multiplicationTable(["5"])