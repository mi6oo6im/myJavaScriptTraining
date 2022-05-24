function convertRadianToDegree(input){
    let radian = Number(input[0]);
    let degree = radian * 180 / Math.PI;
    console.log(degree);
}
convertRadianToDegree(["6.2832"])