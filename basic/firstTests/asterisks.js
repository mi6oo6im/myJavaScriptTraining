function asteriscs(input){
    let num = Number(input[0]);

    for (let i = 1; i <= num; i++){
        if (i === 1 || i === num){
            console.log("*".repeat(num));
        }
        else console.log("*"+" ".repeat(num - 2)+"*");
    }
}
asteriscs("4")
