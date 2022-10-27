function convertToObject(JSONstring) {
    let person = JSON.parse(JSONstring);
    for (const key of Object.keys(person)) {
        let value = person[key];
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('--------------------------------');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
console.log('--------------------------------');