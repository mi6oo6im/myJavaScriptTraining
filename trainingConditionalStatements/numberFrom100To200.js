function numberFrom100To200(input) {
    let index = 0;
    let num = input[index];

    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}
numberFrom100To200(["100"])