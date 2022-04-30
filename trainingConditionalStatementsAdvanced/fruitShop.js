function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let qty = input[2];
    let res = 0;
    let isError = false;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana': res = qty * 2.50; break;
                case 'apple': res = qty * 1.20; break;
                case 'orange': res = qty * 0.85; break;
                case 'grapefruit': res = qty * 1.45; break;
                case 'kiwi': res = qty * 2.70; break;
                case 'pineapple': res = qty * 5.50; break;
                case 'grapes': res = qty * 3.85; break;
                default: console.log('error');
                    isError = true; break;
            };
            break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana': res = qty * 2.70; break;
                case 'apple': res = qty * 1.25; break;
                case 'orange': res = qty * 0.90; break;
                case 'grapefruit': res = qty * 1.60; break;
                case 'kiwi': res = qty * 3.00; break;
                case 'pineapple': res = qty * 5.60; break;
                case 'grapes': res = qty * 4.20; break;
                default: console.log('error')
                    isError = true;
                    break;

            }; break;
        default: console.log('error')
            isError = true;
            break;
    }
    if (!isError) {
        console.log(res.toFixed(2));
    }
}

fruitShop(["orange",
    "Sunday",
    "3"]);

