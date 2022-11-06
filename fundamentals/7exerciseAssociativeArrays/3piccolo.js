function piccolo(inputArr) {
    const parkingLotObject = {};
    inputArr.forEach(entry => {
        const [state, plateNum] = entry.split(', ');
        parkingLotObject[plateNum] = state;
    });
    const parkingEntries = Object.entries(parkingLotObject);
    const parkedSorted = parkingEntries
        .filter(x => x[1] === 'IN')
        .sort((a, b) => a[0].localeCompare(b[0]));
    if (parkedSorted.length) {
        parkedSorted.forEach(([plate]) => {
            console.log(plate);
        });
    } else {
        console.log("Parking Lot is Empty");
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
console.log('-----------------------');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);
console.log('-----------------------');