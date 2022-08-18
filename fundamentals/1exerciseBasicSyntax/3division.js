function division(num) {
    dividers = [2, 3, 6, 7, 10];
    biggestDivider = 0;
    for (div of dividers) {
        if (num % div === 0){
            biggestDivider = div
        } 
    }
    if (biggestDivider){
        console.log(`The number is divisible by ${biggestDivider}`);
    }else{
        console.log('Not divisible');
    }
}
division(30);
division(15);
division(12);
division(1643);