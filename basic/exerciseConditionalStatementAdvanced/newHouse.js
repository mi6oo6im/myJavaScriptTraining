function newHouse(input) {
    // цвете	            Roses	Dahlias	Tulips	Narcissus	Gladiolus
    // Цена на брой в лева	5	    3.80	2.80	3	    2.50
    let flower = input[0];
    let qty = Number(input[1]);
    let budget = Number(input[2]);
    let cost = 0;

    switch (flower) {
        case 'Roses': cost = qty * 5.00;
            if (qty > 80) {
                cost *= (1 - 10 / 100);
            }; break;
        case 'Dahlias': cost = qty * 3.80;
            if (qty > 90) {
                cost *= (1 - 15 / 100);
            }; break;
        case 'Tulips': cost = qty * 2.80;
            if (qty > 80) {
                cost *= (1 - 15 / 100);
            }; break;
        case 'Narcissus': cost = qty * 3.00;
            if (qty < 120) {
                cost *= (1 + 15 / 100);
            }; break;
        case 'Gladiolus': cost = qty * 2.50;
            if (qty < 80) {
                cost *= (1 + 20 / 100);
            }; break;
    }
    let diff = Math.abs(budget - cost);
    if (budget >= cost) {
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses",
    "55",
    "250"])

