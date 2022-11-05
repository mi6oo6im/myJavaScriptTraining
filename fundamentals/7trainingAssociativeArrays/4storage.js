function storage(inputArr) {
    let storageMap = new Map();
    inputArr.forEach(record => {
        let [product, quantity] = record.split(' ');
        if (!storageMap.has(product)) {
            storageMap.set(product, 0)
        }
        let currentQty = storageMap.get(product);
        storageMap.set(product, currentQty + Number(quantity))
    });
    storageMap.forEach((value, product) => {
        console.log(`${product} -> ${value}`);
    });
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
console.log('---------------------------');
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);
console.log('---------------------------');