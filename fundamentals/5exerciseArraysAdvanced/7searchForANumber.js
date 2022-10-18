function searchForANumber(numArr, countArr) {

    //program constraints
    const numberOfElements = countArr[0];
    const deleteElements = countArr[1];
    const searchedNum = countArr[2];

    //make new array with first numberOfElements
    let newArr = numArr.slice(0, numberOfElements);

    //remove deleteElements from newArr
    newArr.splice(0, deleteElements);

    //count searchedNum occurences
    let res = 0;
    while (newArr.includes(searchedNum)) {
        res++;
        let index = newArr.indexOf(searchedNum);
        newArr.splice(index, 1);
    }
    console.log(`Number ${searchedNum} occurs ${res} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
console.log('--------------------------');
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);
console.log('--------------------------');