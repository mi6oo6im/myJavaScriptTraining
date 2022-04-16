
function speedTest(input){
    let index = 0;
    let speed = input[index];

    if (speed <= 10){
        console.log("slow");
    }else if (speed <= 50){
        console.log("average");
    }else if (speed <= 150){
        console.log("fast");
    }else if (speed <= 1000){
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}
speedTest(["3500"])
//(["8"])	slow		(["49.5"])	average		(["126"])	fast
//(["160"])	ultra fast		(["3500"])	extremely fast