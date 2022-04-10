function fishTank(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let percentPrefilled = Number(input[3]) / 100;

    let volumeCm3 = a * b * h;
    let liters = volumeCm3 / 1000;

    let waterLiters = liters * (1 - percentPrefilled);

    console.log(waterLiters);
}
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)