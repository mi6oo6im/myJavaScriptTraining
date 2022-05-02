function fishingBoat(input) {
    // Цената за наем на кораба през пролетта е  3000 лв.
    // Цената за наем на кораба през лятото и есента е  4200 лв.
    // Цената за наем на кораба през зимата е  2600 лв.
    // "Spring", "Summer", "Autumn", "Winter"
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let cost = 0;

    switch (season) {
        case 'Spring': cost = 3000; break;
        case 'Summer':
        case 'Autumn': cost = 4200; break;
        case 'Winter': cost = 2600; break;
    }
    if (fishermen <= 6) {
        cost *= (1 - 10 / 100);
    } else if (fishermen <= 11) {
        cost *= (1 - 15 / 100);
    } else {
        cost *= (1 - 25 / 100);
    }

    if (fishermen % 2 === 0 && season !== 'Autumn') {
        cost *= (1 - 5 / 100);
    }
    let diff = Math.abs(budget - cost);
    if (budget >= cost) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000",
    "Winter",
    "13"])



