function footballKit(input) {
    let shirtCost = Number(input[0]);
    let sumForBall = Number(input[1]);

    let shortsCost = shirtCost * 0.75;
    let socksCost = shortsCost * 0.20;
    let footballShoes = (shirtCost + shortsCost) * 2;
    let totaCost = shirtCost + shortsCost + socksCost + footballShoes
    let costAfterDiscount = totaCost * (1 - 15 / 100);

    if (costAfterDiscount >= sumForBall) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${costAfterDiscount.toFixed(2)} lv.`);
    } else {
        let diff = sumForBall - costAfterDiscount;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
footballKit(["55",
    "310"])

