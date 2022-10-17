function listOfProducts(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let ord = 1;
    for (product of arr) {
        console.log(`${ord}.${product}`);
        ord++
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log('-------------------------');
listOfProducts(['Watermelon', 'Banana', 'Apples']);
console.log('-------------------------');