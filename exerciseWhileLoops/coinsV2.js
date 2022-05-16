function coins(input) {
    let change = Number(input[0]);
    change = Math.floor(change * 100);
    let coinList = [200, 100, 50, 20, 10, 5, 2, 1]
    let coin = 0;
    let index = 0;
    let coinType = coinList[index++] // 2 lv.
    coin += Math.floor(change / coinType);
    change %= coinType;
    coinType = coinList[index++] // 1 lv.
    coin += Math.floor(change / coinType);
    change %= coinType;
    coinType = coinList[index++] // 50 st.
    coin += Math.floor(change / coinType);
    change %= coinType;
    coinType = coinList[index++] // 20 st.
    coin += Math.floor(change / coinType);
    change %= coinType;
    coinType = coinList[index++] // 10 st.
    coin += Math.floor(change / coinType);
    change %= coinType;
    coinType = coinList[index++] // 5 st.
    coin += Math.floor(change / coinType);
    change %= coinType;
    coinType = coinList[index++] // 2 st.
    coin += Math.floor(change / coinType);
    change %= coinType;
    coinType = coinList[index++] // 1 st.
    coin += Math.floor(change / coinType);
    change %= coinType;
    console.log(coin);
}