function softUniBarIncome(inputArr) {
    // variables:
    let record = inputArr.shift();
    const regExp = new RegExp('%(?<name>[A-Z][a-z]+)%[^|$%.0-9]*<(?<product>\w+)>[^|$%.0-9]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$',gm)
    while (record != 'end of shift') {
        
        record = inputArr.shift();
    }
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