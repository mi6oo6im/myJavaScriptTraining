function godzillaVsKong(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let extras = Number(input[index]);
    index++;
    let extraOutfit = Number(input[index]);
    let decour = budget * 0.1;
    let outfitCost = extraOutfit * extras;
    if (extras > 150) {
        outfitCost *= (1 - 10 / 100);
    }
    let totalCost = outfitCost + decour;
    let diff = Math.abs(totalCost - budget)
    if (totalCost > budget) {
        console.log(`Not enough money!\n` +
            `Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!\n` +
            `Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["15437.62",
    "186",
    "57.99"])

