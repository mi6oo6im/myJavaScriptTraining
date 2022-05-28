function courierExpress(input) {
    packageWeight = Number(input[0]);
    serviceType = input[1];
    distanceInKM = Number(input[2]);
    costPerKMstotinki = 0;
    switch (serviceType) {
        case 'standard':
            if (packageWeight < 1) {
                costPerKMstotinki = 3;
            } else if (packageWeight < 10) {
                costPerKMstotinki = 5;
            } else if (packageWeight < 40) {
                costPerKMstotinki = 10;
            } else if (packageWeight < 90) {
                costPerKMstotinki = 15;
            } else if (packageWeight < 150) {
                costPerKMstotinki = 20;
            }; break;

        case 'express':
            if (packageWeight < 1) {
                costPerKMstotinki = 3 * (1 + (80 / 100) * packageWeight);
            } else if (packageWeight < 10) {
                costPerKMstotinki = 5 * (1 + (40 / 100) * packageWeight);
            } else if (packageWeight < 40) {
                costPerKMstotinki = 10 * (1 + (5 / 100) * packageWeight);
            } else if (packageWeight < 90) {
                costPerKMstotinki = 15 * (1 + (2 / 100) * packageWeight);
            } else if (packageWeight < 150) {
                costPerKMstotinki = 20 * (1 + (1 / 100) * packageWeight);
            }; break;
    }
    let totalCostLeva = costPerKMstotinki * distanceInKM / 100;
    console.log(`The delivery of your shipment with weight of ${packageWeight.toFixed(3)} kg. would cost ${totalCostLeva.toFixed(2)} lv.`);
}
courierExpress(["87",
    "express",
    "130"])



