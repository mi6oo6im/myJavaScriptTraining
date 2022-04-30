function smallShop(input) {
    // град / продукт	coffee	water	beer	sweets	peanuts
    // Sofia	           0.50	0.80	1.20	1.45	1.60
    // Plovdiv	           0.40	0.70	1.15	1.30	1.50
    // Varna	           0.45	0.70	1.10	1.35	1.55
    let index = 0;
    let prod = input[index++];
    let city = input[index++];
    let qty = Number(input[index]);
    let res = 0;

    switch (city) {
        case 'Sofia':
            switch (prod) {
                case 'coffee': res = qty * 0.50; break;
                case 'water': res = qty * 0.80; break;
                case 'beer': res = qty * 1.20; break;
                case 'sweets': res = qty * 1.45; break;
                case 'peanuts': res = qty * 1.60; break;
            }
            break;
        case 'Plovdiv':
            switch (prod) {
                case 'coffee': res = qty * 0.40; break;
                case 'water': res = qty * 0.70; break;
                case 'beer': res = qty * 1.15; break;
                case 'sweets': res = qty * 1.30; break;
                case 'peanuts': res = qty * 1.50; break;
            }
            break;
        case 'Varna':
            switch (prod) {
                case 'coffee': res = qty * 0.45; break;
                case 'water': res = qty * 0.70; break;
                case 'beer': res = qty * 1.10; break;
                case 'sweets': res = qty * 1.35; break;
                case 'peanuts': res = qty * 1.55; break;
            }
            break;
    }
    console.log(res);
}
smallShop(["coffee",
"Varna",
"2"]);
