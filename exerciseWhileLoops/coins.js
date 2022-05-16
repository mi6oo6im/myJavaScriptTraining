function coins(input) {
    let change = Number(input[0]);
    change = Math.floor(change * 100);
    let coinList = [200, 100, 50, 20, 10, 5, 2, 1]
    let coin = 0;
    let index = 0;
    while (change > 0) {
        let coinType = coinList[index++];
        if (change >= coinType) {
            coin += Math.floor(change / coinType);
            change %= coinType;
        }
    }
    console.log(coin);
}
coins(["2.73"])