function triangleArea(sideA, sideB, sideC) {
    semiParameter = (sideA + sideB + sideC) / 2
    areaOfTriangle = Math.sqrt(semiParameter * (semiParameter-sideA) *
                                             (semiParameter - sideB) * 
                                             (semiParameter - sideC))
    console.log(areaOfTriangle);
}
triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4,);