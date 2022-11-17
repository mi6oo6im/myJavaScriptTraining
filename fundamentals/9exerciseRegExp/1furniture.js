function furniture(inputArr) {
    const regexp = />>(?<furnitureName>[A-Z]\w+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/;
    let record = inputArr.shift();
    let furniture = [];
    let totalCost = 0;
    while (record !== 'Purchase') {
        if(regexp.test(record)){
            let match = record.match(regexp);
            let {furnitureName, price, quantity} = match.groups;
            let cost = Number(price) * Number(quantity);
            totalCost += cost;
            furniture.push(furnitureName);
        }
        record = inputArr.shift();
    }
    console.log('Bought furniture:')
    if (furniture.length){
        console.log(furniture.join('\n'));
    }  
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
console.log('-------------------------------');
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);
console.log('-------------------------------');
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']);
console.log('-------------------------------');