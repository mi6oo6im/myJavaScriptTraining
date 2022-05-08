function highJump(input) {
    let index = 0;
    let target = Number(input[index++]);
    let barHight = target - 30;
    let attempt = 0;
    let jumps = 0;
    let fail = 0;
    let succeeded = true;

    while (barHight <= target) {
        jumps++;
        attempt = Number(input[index++]);
        if (attempt > barHight){
            if (barHight === target){
                break;
            }
            barHight += 5;
            fail = 0
        } else {
            fail++
            if (fail === 3){
                succeeded = false;
                break
            }
        }

    }
    if (!succeeded) {
        console.log(`Tihomir failed at ${barHight}cm after ${jumps} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${barHight}cm after ${jumps} jumps.`);
    }
}
highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])


