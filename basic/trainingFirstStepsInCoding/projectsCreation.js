function projectsCreation(input) {
    let archName = input[0];
    let projectNum = Number(input[1]);

    console.log(`The architect ${archName} will need ${projectNum * 3} hours to complete ${projectNum} project/s.`);
}
projectsCreation(["George",
    "4 "]
)