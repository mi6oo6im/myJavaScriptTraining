function equalArrays(arr1, arr2) {
    let sum = 0;
    let arraysAreNotIdentical = false;
    let currentIndex = 0;
    for (let i = 0; i < arr1.length; i++){
        currentIndex = i;
        let currentNumber1 = Number(arr1[i]);
        let currentNumber2 = Number(arr2[i]);
        if (currentNumber1 === currentNumber2){
            sum += currentNumber1;
        } else {
            arraysAreNotIdentical = true;
            break;
        }
    }
    if (arraysAreNotIdentical){
        console.log(`Arrays are not identical. Found difference at ${currentIndex} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
console.log('-------------------');
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
console.log('-------------------');
equalArrays(['1'], ['10']);
console.log('-------------------');