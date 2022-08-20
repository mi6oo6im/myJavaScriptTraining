function cone(radius, height) {
    //πr(r + √(r2 + h2))
    //(1/3)πr2h
    let pi = Math.PI
    let area = pi * radius * (radius + Math.sqrt(radius**2 + height**2));
    let volume = (1/3)*(pi * (radius**2) * height);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);