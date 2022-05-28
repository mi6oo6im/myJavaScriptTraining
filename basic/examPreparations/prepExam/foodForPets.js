function foodForPets(input) {
    let index = 0;
    let days = Number(input[index++]);
    let totalFood = Number(input[index++]);
    let biscuits = 0;
    let dogEatsTotal = 0;
    let catEatsTotal = 0;
    for (let day = 1; day <= days; day++) {
        let dogEatsToday = Number(input[index++]);
        let catEatsToday = Number(input[index++]);
        if (day % 3 === 0) {
            biscuits += (dogEatsToday + catEatsToday) * 0.1;
        }
        dogEatsTotal += dogEatsToday;
        catEatsTotal += catEatsToday;
    }
    let totalFoodEaten = dogEatsTotal + catEatsTotal;
    let percentFoodEaten = totalFoodEaten / totalFood * 100;
    let percentEatenByDog = dogEatsTotal / totalFoodEaten * 100;
    let percentEatenByCat = catEatsTotal / totalFoodEaten * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${percentFoodEaten.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenByCat.toFixed(2)}% eaten from the cat.`);
}
foodForPets(['3', '500', '100', '30', '110', '25', '120', '35'])