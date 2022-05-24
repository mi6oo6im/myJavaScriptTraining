function passwordGuess(input) {
    let password = "s3cr3t!P@ssw0rd";
    let index = 0;
    let guess = input[index];
    if (guess === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
passwordGuess(["qwerty"])