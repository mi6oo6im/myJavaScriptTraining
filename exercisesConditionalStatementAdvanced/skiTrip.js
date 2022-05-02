function skiTrip(input) {
    let days = Number(input[0]);
    let nights = days - 1;
    let roomType = input[1]; //"room for one person", "apartment", "president apartment"
    let CSAT = input[2]; //"positive", "negative"
    let cost = 0;

    switch (roomType) {
        case 'room for one person': cost = 18.00 * nights; break;
        case 'apartment': cost = 25.00 * nights;
            if (nights < 10) {
                cost *= (1 - 30 / 100); //30% discount
            } else if (nights <= 15) {
                cost *= (1 - 35 / 100);//35% discount
            } else {
                cost *= (1 - 50 / 100);//50% discount
            } break;
        case 'president apartment': cost = 35.00 * nights;
            if (nights < 10) {
                cost *= (1 - 10 / 100); //10% discount
            } else if (nights <= 15) {
                cost *= (1 - 15 / 100);//15% discount
            } else {
                cost *= (1 - 20 / 100);//20% discount
            } break;
    }
    if (CSAT === 'positive') {
        cost *= (1 + 25 / 100); // 25% tip
    } else {
        cost *= (1 - 10 / 100); // 10% compensation
    }
    console.log(cost.toFixed(2));
}
skiTrip(["2",
    "apartment",
    "positive"])



