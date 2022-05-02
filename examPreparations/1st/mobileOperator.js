function mobileOperator(input) {
    //     срок / тип	Small	     Middle	    Large	    ExtraLarge
    // 1 година(one)	9.98 лв.	18.99 лв.	25.98 лв.	35.99 лв.
    // 2 години(two)	8.58 лв.	17.09 лв.	23.59 лв.	31.79 лв.
    let index = 0;
    let term = input[index++];
    let type = input[index++];
    let addBroadband = input[index++];
    let months = Number(input[index]);
    let cost = 0;

    switch (term) {
        case 'one':
            switch (type) {
                case 'Small':
                    cost = 9.98 * months;
                    if (addBroadband === 'yes') {
                        cost += 5.50 * months;
                    }; break;
                case 'Middle':
                    cost = 18.99 * months;
                    if (addBroadband === 'yes') {
                        cost += 4.35 * months;
                    }; break;
                case 'Large':
                    cost = 25.98 * months;
                    if (addBroadband === 'yes') {
                        cost += 4.35 * months;
                    }; break;
                case 'ExtraLarge':
                    cost = 35.99 * months;
                    if (addBroadband === 'yes') {
                        cost += 3.85 * months;
                    }; break;
            }; break;
        case 'two':
            switch (type) {
                case 'Small':
                    cost = 8.58 * months;
                    if (addBroadband === 'yes') {
                        cost += 5.50 * months;
                    }; break;
                case 'Middle':
                    cost = 17.09 * months;
                    if (addBroadband === 'yes') {
                        cost += 4.35 * months;
                    }; break;
                case 'Large':
                    cost = 23.59 * months;
                    if (addBroadband === 'yes') {
                        cost += 4.35 * months;
                    }; break;
                case 'ExtraLarge':
                    cost = 31.79 * months;
                    if (addBroadband === 'yes') {
                        cost += 3.85 * months;
                    }; break;
            }; break;
    }
    if (term === 'two') {
        cost *= (1 - 3.75 / 100); // 3.75% discount
    }

    console.log(`${cost.toFixed(2)} lv.`);
}
mobileOperator(["two",
    "ExtraLarge",
    "yes",
    "20"])


