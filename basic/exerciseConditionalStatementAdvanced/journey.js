function journey(input) {
    let budget = Number(input[0]);
    let season = input[1]; // "summer" or "winter"
    let destination = '' // Bulgaria", "Balkans" or "Europe"
    let cost = 0;
    let type = ''; // "Camp" or "Hotel"

    if (budget <= 100) {
        switch (season) {
            case 'summer': cost = budget * 30 / 100;
                destination = 'Bulgaria';
                type = 'Camp'; break;
            case 'winter': cost = budget * 70 / 100;
                destination = 'Bulgaria';
                type = 'Hotel'; break; break;
        }
    } else if (budget <= 1000) {
        switch (season) {
            case 'summer': cost = budget * 40 / 100;
                destination = 'Balkans';
                type = 'Camp'; break;
            case 'winter': cost = budget * 80 / 100;
                destination = 'Balkans';
                type = 'Hotel'; break;
        }
    } else {
        cost = budget * 90 / 100;
        destination = 'Europe';
        type = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${cost.toFixed(2)}`);
}
journey(["75", "winter"])

