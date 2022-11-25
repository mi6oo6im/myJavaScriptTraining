function softUniBarIncome(inputArr) {
    // variables:
    let record = inputArr.shift();
    let totalIncome = 0;
    const regExp = /%(?<name>[A-Z][a-z]+)%[^|$%.0-9]*<(?<product>\w+)>[^|$%.0-9]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/gm
	// control flow:
    while (record != 'end of shift') {
        let result = [...record.matchAll(regExp)];
        if (result.length > 0){
            let name = result[0][1];
            let product = result[0][2];
            let quantity = Number(result[0][3]);
            let price = Number(result[0][4]);
            let income = quantity * price
            totalIncome += income;
            console.log(`${name}: ${product} - ${income.toFixed(2)}`);
        }
        record = inputArr.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
console.log('-------------------------------');
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);
console.log('-------------------------------');