function petShop(input){
    let dogFoodCans = Number(input[0]);
    let catFoodCans = Number(input[1]);

    let cost = dogFoodCans * 2.5 + catFoodCans * 4

    console.log(`${cost} lv.`);
}
petShop(["13",
"9"])

