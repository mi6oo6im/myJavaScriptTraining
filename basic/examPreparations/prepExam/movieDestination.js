function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1]; //"Dubai", "Sofia" и "London"
    let season = input[2]; // "Summer" и "Winter"
    let days = input[3];
    let pricePerDay = 0;

    switch (season) {
        case 'Summer':
            switch (destination) {
                case 'Dubai': pricePerDay = 40000 * (1 - 30 / 100); break
                case 'Sofia': pricePerDay = 12500 * (1 + 25 / 100); break
                case 'London': pricePerDay = 20250; break
            }; break;
        case 'Winter':
            switch (destination) {
                case 'Dubai': pricePerDay = 45000 * (1 - 30 / 100); break
                case 'Sofia': pricePerDay = 17000 * (1 + 25 / 100); break
                case 'London': pricePerDay = 24000; break
            }; break;
    }
    let totalCost = pricePerDay * days;
    let diff = Math.abs(budget - totalCost)

    if (budget >= totalCost) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}
movieDestination(['400000', 'Sofia', 'Winter', '20'])