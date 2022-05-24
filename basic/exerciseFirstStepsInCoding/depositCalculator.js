function depositCalculator(input){
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let interest = Number(input[2]) / 100;

    let res = deposit + (deposit * interest / 12) * months;

    console.log(res);
}
depositCalculator(["2350",
"6 ",
"7 "])
;