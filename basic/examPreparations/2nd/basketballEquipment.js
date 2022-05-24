function basketballEquipment(input) {
    let annualTax = Number(input[0]);
    let snickers = annualTax * (1 - 40 / 100); //40% less than annual tax
    let jursey = snickers * (1 - 20 / 100); //20% less than snickers
    let ball = jursey / 4;
    let accessories = ball / 5;

    let totalCost = annualTax + snickers + jursey + ball + accessories;

    console.log(`${totalCost.toFixed(2)}`);
}
basketballEquipment(["230"])