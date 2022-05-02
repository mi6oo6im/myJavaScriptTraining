function summerOutfit(input) {
    let degree = Number(input[0]);
    let timeOfDay = input[1];
    let attire = '';
    let shoes = '';

    switch (timeOfDay) {
        case 'Morning':
            if (degree >= 10 && degree <= 18) {
                attire = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (degree > 18 && degree <= 24){
                attire = 'Shirt';
                shoes = 'Moccasins';
            } else if (degree >= 25){
                attire = 'T-Shirt';
                shoes = 'Sandals';
            }; break;
        case 'Afternoon':
            if (degree >= 10 && degree <= 18) {
                attire = 'Shirt';
                shoes = 'Moccasins';
            } else if (degree > 18 && degree <= 24){
                attire = 'T-Shirt';
                shoes = 'Sandals';
            } else if (degree >= 25){
                attire = 'Swim Suit';
                shoes = 'Barefoot';
            }; break;
        case 'Evening': 
        if (degree >= 10 && degree <= 18) {
            attire = 'Shirt';
            shoes = 'Moccasins';
        } else if (degree > 18 && degree <= 24){
            attire = 'Shirt';
            shoes = 'Moccasins';
        } else if (degree >= 25){
            attire = 'Shirt';
            shoes = 'Moccasins';
        }; break;
    }
console.log(`It's ${degree} degrees, get your ${attire} and ${shoes}.`);
}
summerOutfit(["22",
"Afternoon"])

