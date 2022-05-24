function basketballEquipment(input) {
    let annualTax = Number(input[0]);

    let snickers = annualTax * 0.60;
    let jursey = snickers * 0.80;
    let ball = jursey * 0.25;
    let accessories = ball * 0.20;

    let totalCost = annualTax + snickers + jursey + ball + accessories;

    console.log(totalCost);
}
basketballEquipment(["550"])