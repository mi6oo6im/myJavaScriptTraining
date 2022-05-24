function gymnastics(input) {
    let nation = input[0]; //"Russia", "Bulgaria" или "Italy"
    let implement = input[1]; //"ribbon", "hoop" или "rope"
    let difficulty = 0;
    let performance = 0;

    switch (nation) {
        case 'Russia':
            switch (implement) {
                case 'ribbon':
                    difficulty = 9.100;
                    performance = 9.400;
                    break;
                case 'hoop':
                    difficulty = 9.300;
                    performance = 9.800;
                    break;
                case 'rope':
                    difficulty = 9.600;
                    performance = 9.000;
                    break;
            }; break;
        case 'Bulgaria':
            switch (implement) {
                case 'ribbon':
                    difficulty = 9.600;
                    performance = 9.400;
                    break;
                case 'hoop':
                    difficulty = 9.550;
                    performance = 9.750;
                    break;
                case 'rope':
                    difficulty = 9.500;
                    performance = 9.400;
                    break;
            }; break;
        case 'Italy':
            switch (implement) {
                case 'ribbon':
                    difficulty = 9.200;
                    performance = 9.500;
                    break;
                case 'hoop':
                    difficulty = 9.450;
                    performance = 9.350;
                    break;
                case 'rope':
                    difficulty = 9.700;
                    performance = 9.150;
                    break;
            }; break;
    }
    let totalScore = difficulty + performance;
    let diffPercent = (20 - totalScore) / 20 * 100;


    console.log(`The team of ${nation} get ${totalScore.toFixed(3)} on ${implement}.`);
    console.log(`${diffPercent.toFixed(2)}% `);
}
gymnastics(["Bulgaria",
    "ribbon"])

