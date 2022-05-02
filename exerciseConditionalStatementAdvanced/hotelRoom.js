function hotelRoom(input) {
    let month = input[0]; //May, June, July, August, September, October
    let nights = Number(input[1]);
    let studioCost = 0;
    let apartCost = 0;
    switch (month) {
        case 'May':
        case 'October':
            studioCost = 50.00 * nights;
            apartCost = 65.00 * nights;
            if (nights > 7 && nights <= 14) {
                studioCost *= (1 - 5 / 100); // 5% discount
            } else if (nights > 14) {
                studioCost *= (1 - 30 / 100);// 30% discount
            }; break;
        case 'June':
        case 'September':
            studioCost = 75.20 * nights;
            apartCost = 68.70 * nights;
            if (nights > 14) {
                studioCost *= (1 - 20 / 100);// 20% discount
            }; break;
        case 'July':
        case 'August':
            studioCost = 76.00 * nights;
            apartCost = 77.00 * nights;
            break;
    }
    if (nights > 14) {
        apartCost *= (1 - 10 / 100); // 10% discount
    }
    console.log(`Apartment: ${apartCost.toFixed(2)} lv.`);
    console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}
hotelRoom(["June",
    "14"])

