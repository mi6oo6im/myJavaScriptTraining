function travelTime(inputArr) {
    const destinations = {};
    inputArr.forEach(record => {
        let [country, city, cost] = record.split(' > ');
        if (!destinations[country]) {
            destinations[country] = {};
        }
        if (!destinations[country][city]) {
            destinations[country][city] = Number(cost);
        } else if (destinations[country][city] > Number(cost)) {
            destinations[country][city] = Number(cost)
        }
    });
    let sortedCountries = Object.entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0]));
    sortedCountries.forEach(record => {
        res = record[0] + ' ->';
        let sortedCities = Object.entries(record[1]).sort((a, b) => a[1] - b[1]);
        sortedCities.forEach(([city, cost]) => {
            res += ` ${city} -> ${cost}`
        });
        console.log(res);
    });
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
);
console.log('----------------------');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]
);
console.log('----------------------');