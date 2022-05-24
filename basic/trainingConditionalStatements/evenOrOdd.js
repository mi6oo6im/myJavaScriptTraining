function evenOrOdd(input) {
    let index = 0;
    let num = input[index];

    if (num % 2 === 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}
evenOrOdd(["1024"])