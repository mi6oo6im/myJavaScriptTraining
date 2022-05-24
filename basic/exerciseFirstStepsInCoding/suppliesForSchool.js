function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discountPercent = Number(input[3]) / 100;

    let pensCost = pens * 5.80;
    let markersCost = markers * 7.20;
    let detergentCost = detergent * 1.20;

    let totalCost = (pensCost + markersCost + detergentCost) * (1 - discountPercent); 

    console.log(totalCost);
}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)