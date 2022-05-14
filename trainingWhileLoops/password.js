function password(input) {
    let index = 0;
    let user = input[index++];
    let password = input[index++];
    let command = input[index++];
    while (command !== password) {
        command = input[index++];
    }
    console.log(`Welcome ${user}!`);
}
password(["Gosho",
    "secret",
    "secret"])
