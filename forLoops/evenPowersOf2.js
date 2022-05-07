function evenPowersOf2(input) {
    endPow = Number(input[0]);

    for (i = 0; i <= endPow; i++) {
        if (i % 2 === 0) {
            console.log(Math.pow(2, i));
        }
    }
}
evenPowersOf2(["7"])