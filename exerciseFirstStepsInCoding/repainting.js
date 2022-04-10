function repainting(input){
    let naylon = Number(input[0]) + 2;
    let paint = Number(input[1]) * 1.10;
    let thinner = Number(input[2]);
    let hours = Number(input[3]);
    let bags = 0.40;

    let costForMaterials = naylon * 1.50 + paint * 14.50 +
                                     thinner * 5 + bags;
    let costForWork = costForMaterials * 0.30 * hours;

    let totalCost = costForMaterials + costForWork;

    console.log(totalCost);
}
repainting(["5 ",
"10 ",
"10 ",
"1 "]

)