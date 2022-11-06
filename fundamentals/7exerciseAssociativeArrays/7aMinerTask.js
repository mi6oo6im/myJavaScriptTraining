function aMinerTask(inputArr) {
    const recoursesObject = {};
    for (let i = 0; i < inputArr.length; i += 2){
        let resource = inputArr[i];
        let quantity = inputArr[i + 1];
        if (!recoursesObject[resource]){
            recoursesObject[resource] = 0;
        }
        recoursesObject[resource] += Number(quantity);
    }
    for (const resource in recoursesObject) {
        console.log(`${resource} -> ${recoursesObject[resource]}`);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
);
console.log('---------------------');
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);
console.log('---------------------');