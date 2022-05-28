function fruitMarket(a, b, c, d, e) {
    let strawberyPrice = Number(a);
    let raspberyPrice = strawberyPrice / 2;
    let orangePrice = raspberyPrice * (1 - 40 / 100);
    let bananaPrice = raspberyPrice * (1 - 80 / 100);
    let bananasKG = Number(b);
    let orangesKG = Number(c);
    let raspberiesKG = Number(d);
    let strawberiesKG = Number(e);

    let totalCost = bananaPrice * bananasKG +
        orangePrice * orangesKG +
        raspberyPrice * raspberiesKG +
        strawberyPrice * strawberiesKG

    console.log(totalCost.toFixed(2));
}
fruitMarket(48
    , 10
    , 3.3
    , 6.5
    , 1.7
)