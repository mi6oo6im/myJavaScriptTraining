function towns(inputArr) {
    let tonwsList = [];
    inputArr.forEach(line => {
        let [town, latitude, longitude] = line.split(' | ');
        let townInfo = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        tonwsList.push(townInfo)
    });
    for (const town of tonwsList) {
        console.log(town);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
console.log('----------------------');
towns(['Plovdiv | 136.45 | 812.575']);
console.log('----------------------');