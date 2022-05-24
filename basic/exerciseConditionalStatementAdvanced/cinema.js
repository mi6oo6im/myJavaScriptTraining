function dayOfTheWeek(input){
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let capacity = rows * columns;
    let res = 0;
// Premiere – премиерна прожекция, на цена 12.00 лева.
// Normal – стандартна прожекция, на цена 7.50 лева.
// Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.


    switch(type){
        case 'Premiere': res = 12 * capacity; break;
        case 'Normal': res = 7.5 * capacity; break;
        case 'Discount': res = 5 * capacity; break; 
    }
console.log(`${res.toFixed(2)} leva`);
}
dayOfTheWeek(["Normal",
"21",
"13"])

