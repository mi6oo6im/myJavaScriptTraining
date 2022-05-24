function fitnessCenter(input) {
    let index = 0;
    let trainees = Number(input[index++]);
    let training = '';
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;
    let workout = 0;
    let protein = 0;

    for (let i = 0; i < trainees; i++) {
        training = input[index++];
        switch (training) {
            case 'Back': back++; workout++; break;
            case 'Chest': chest++; workout++; break;
            case 'Legs': legs++; workout++; break;
            case 'Abs': abs++; workout++; break;
            case 'Protein shake': proteinShake++; protein++; break;
            case 'Protein bar': proteinBar++; protein++; break;
        }
    }
    let workoutPercentage = workout / trainees * 100;
    let proteinPercentage = protein / trainees * 100;
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${workoutPercentage.toFixed(2)}% - work out`);
    console.log(`${proteinPercentage.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
