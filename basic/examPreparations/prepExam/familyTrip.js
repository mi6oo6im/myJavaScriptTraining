function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percent = Number(input[3]);

    if (nights > 7) {
        pricePerNight *= (1 - 5 / 100)
    }
    let totalExpences = nights * pricePerNight + budget * percent / 100

    let diff = Math.abs(budget - totalExpences)

    if (budget >= totalExpences) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }

}
familyTrip(['500', '7', '66', '15'])
