function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor,
    }
    let JSONstring = JSON.stringify(person);
    console.log(JSONstring);
}
convertToJSON('George', 'Jones', 'Brown');
console.log('-------------------------');
convertToJSON('Peter', 'Smith', 'Blond');
console.log('-------------------------');