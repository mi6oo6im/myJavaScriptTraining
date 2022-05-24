function areaOfFigures(input) {
    let index = 0;
    let figure = input[index];
    index++;
    let figureArea = 0;
    switch (figure) {
        case "square":
            let side = Number(input[index]);
            figureArea = Math.pow(side, 2);
            break;
        case "rectangle":
            let sideA = Number(input[index]);
            index++;
            let sideB = Number(input[index]);
            figureArea = sideA * sideB;
            break;
        case "circle":
            let radius = Number(input[index]);
            figureArea = Math.PI * Math.pow(radius, 2);
            break;
        case "triangle":
            let sideH = Number(input[index]);
            index++;
            let hightH = Number(input[index]);
            figureArea = sideH * hightH / 2;
            break;
    }
    console.log(figureArea.toFixed(3));
}
areaOfFigures(["triangle",
    "4.5",
    "20"])


