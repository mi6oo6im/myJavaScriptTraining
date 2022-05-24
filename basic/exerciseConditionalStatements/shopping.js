function shopping(input) {
    let gpuPrice = 250;
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let GPU = Number(input[index]);
    index++;
    let CPU = Number(input[index]);
    index++;
    let RAM = Number(input[index]);
    let gpuCost = GPU * gpuPrice;
    let cpuPrice = gpuCost * 0.35;
    let ramPrice = gpuCost * 0.10;
    let cpuCost = CPU * cpuPrice;
    let ramCost = RAM * ramPrice;
    let totalCost = gpuCost + cpuCost + ramCost;
    if (GPU > CPU) {
        totalCost *= (1 - 15 / 100); //15% discount
    }
    let result = "";
    let diff = Math.abs(totalCost - budget);
    if (totalCost <= budget) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
    "3",
    "1",
    "1"])

