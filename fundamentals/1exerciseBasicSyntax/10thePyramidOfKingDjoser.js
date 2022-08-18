function thePyramidOfKingDjoser(side, hight) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;
    let layers = Math.ceil(side / 2);
    for (let i = 1; i <= layers; i++) {
        let area = Math.pow(side, 2);
        let innerArea = Math.pow(side - 2, 2);
        let outerArea = area - innerArea;
        if (i === layers) {
            totalGold = area * hight;
            break;
        } else if (i % 5 === 0) {
            totalLapisLazuli += outerArea * hight;
        } else {
            totalMarble += outerArea * hight;
        }
        totalStone += innerArea * hight;
        side -= 2;
    }
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(layers * hight)}`);
}
thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);