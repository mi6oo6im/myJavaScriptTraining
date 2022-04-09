function yardGreening(input){
    let area = Number(input[0]);
    let cost = area * 7.61
    let discount = area * 7.61 * 0.18;
    cost -= discount;

    console.log(`The final price is: ${cost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["150"])