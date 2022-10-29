function storeProvision(arrInStock, arrDelivery) {
    let stockInventory = {};
    let currentProduct = ''
    arrInStock.forEach((element, index) => {
        if (index % 2 === 0) {
            currentProduct = element;
            stockInventory[currentProduct] = 0;
        } else (stockInventory[currentProduct]) = Number(element);
    });
    for (let index = 0; index < arrDelivery.length; index += 2) {
        const currentProduct = arrDelivery[index];
        const quantity = Number(arrDelivery[index + 1]);
        if (!stockInventory.hasOwnProperty(currentProduct)){
            stockInventory[currentProduct] = 0;
        }
        stockInventory[currentProduct] += quantity;
    }
    for (const product in stockInventory) {
        console.log(`${product} -> ${stockInventory[product]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
);
console.log('-----------------------------------------');
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
[
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
]
);
console.log('-----------------------------------------');