function foodDelivery(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegi = Number(input[2]);
    let deliveryAtTheEnd = 2.50;

    let totalCost = (chicken * 10.35 + fish * 12.40 + vegi * 8.15) * 1.20;
    totalCost += deliveryAtTheEnd;
    
    console.log(totalCost);
}
foodDelivery(["9 ",
"2 ",
"6 "]
)