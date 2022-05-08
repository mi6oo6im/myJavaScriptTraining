function worldSnookerChampionship(input) {
    let index = 0;
    let stage = input[index++]; //“Quarter final ”, “Semi final” или “Final”
    let ticketType = input[index++]; // “Standard”, “Premium” или “VIP”
    let ticketQty = Number(input[index++]);
    let trophyPicture = input[index]; //'Y' (да) или 'N' (не)
    let ticketPrice = 0;

    switch (stage) {
        case 'Quarter final':
            switch (ticketType) {
                case 'Standard': ticketPrice = 55.50; break;
                case 'Premium': ticketPrice = 105.20; break;
                case 'VIP': ticketPrice = 118.90; break;
            } break;
        case 'Semi final':
            switch (ticketType) {
                case 'Standard': ticketPrice = 75.88; break;
                case 'Premium': ticketPrice = 125.22; break;
                case 'VIP': ticketPrice = 300.40; break;
            } break;
        case 'Final':
            switch (ticketType) {
                case 'Standard': ticketPrice = 110.10; break;
                case 'Premium': ticketPrice = 160.66; break;
                case 'VIP': ticketPrice = 400.00; break;
            } break;
    }
    let totalCost = ticketPrice * ticketQty;
    if (totalCost > 4000) {
        totalCost *= (1 - 25 / 100);
        if (trophyPicture === 'Y') {
            totalCost -= 40 * ticketQty;
        }
    } else if (totalCost > 2500) {
        totalCost *= (1 - 10 / 100);
    }

    if (trophyPicture === 'Y') {
        totalCost += 40 * ticketQty;
    }
    console.log(totalCost.toFixed(2));
}
worldSnookerChampionship(["Quarter final",
    "Standard",
    "11",
    "N"])


