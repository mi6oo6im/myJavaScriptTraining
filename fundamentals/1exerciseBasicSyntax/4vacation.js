function vacation(groupSize, grupType, weekday) {
    let price = 0;
    switch (grupType) {
        case 'Students':
            switch (weekday) {
                case 'Friday': price = 8.45; break;
                case 'Saturday': price = 9.80; break;
                case 'Sunday': price = 10.46; break;
            }; break;
        case 'Business':
            switch (weekday) {
                case 'Friday': price = 10.90; break;
                case 'Saturday': price = 15.60; break;
                case 'Sunday': price = 16.00; break;
            }; break;
        case 'Regular':
            switch (weekday) {
                case 'Friday': price = 15.00; break;
                case 'Saturday': price = 20.00; break;
                case 'Sunday': price = 22.50; break;
            }; break;
    }
    let totalPrice = groupSize * price;
    if (grupType === 'Students' && groupSize >= 30) {
        totalPrice *= (1 - 15 / 100);
    }
    if (grupType === 'Business' && groupSize >= 100) {
        totalPrice -= 10 * price;
    }
    if (grupType === 'Regular' && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= (1 - 5 / 100);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");