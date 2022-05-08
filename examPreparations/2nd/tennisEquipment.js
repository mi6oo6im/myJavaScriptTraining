function tennisEquipment(input) {
    let rocketPrice = input[0];
    let rocketQty = input[1];
    snickersQty = input[2];

    let snickersPrice = rocketPrice / 6;

    let cost = rocketPrice * rocketQty + snickersPrice * snickersQty;

    cost *= 1.2;
    let jokerCost = Math.floor(cost / 8);
    let sponsorCost = Math.ceil(cost / 8 * 7);
    console.log(`Price to be paid by Djokovic ${jokerCost}`);
    console.log(`Price to be paid by sponsors ${sponsorCost}`);
}
tennisEquipment(['386',
    '7',
    '4']
)