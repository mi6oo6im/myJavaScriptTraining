function easterLunch(input) {
    let easterBreads = Number(input[0]);
    let eggCartons = Number(input[1]);
    let cookies = Number(input[2]);
    let eggs = eggCartons * 12;

    let totalCost = easterBreads * 3.20 + eggCartons * 4.35 +
        cookies * 5.40 + eggs * 0.15;

    console.log(totalCost.toFixed(2));
}
easterLunch(["4",
    "4",
    "3"])

