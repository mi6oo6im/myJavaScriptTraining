function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let floor = floors; floor > 0; floor--) {
        let buff = '';
        for (let room = 0; room < rooms; room++) {
            let prefix = '';
            if (floor === floors) {
                prefix = 'L';
            } else if (floor % 2 === 0) {
                prefix = 'O';
            } else {
                prefix = 'A';
            }
            buff += `${prefix}${floor}${room} `;
        }
        console.log(buff);
    }
}
building(["4", "4"])