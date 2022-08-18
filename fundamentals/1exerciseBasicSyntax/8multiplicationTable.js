function multiplicationTable(num) {
    for (i = 1; i <= 10; i++){
        product = num * i;
        console.log(`${num} X ${i} = ${product}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);