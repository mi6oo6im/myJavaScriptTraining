function greaterNumber(input){
    let index = 0;
    let n1 = input[index];
    index++;
    let n2 = input[index];

    if (n1 > n2){
        console.log(n1);
    }
    else {
        console.log(n2);
    }
}
greaterNumber(["10", "10"])