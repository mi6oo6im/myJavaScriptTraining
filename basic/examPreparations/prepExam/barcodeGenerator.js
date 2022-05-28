function barcodeGenerator(input) {
    let startNum = input[0];
    let endNum = input[1];
    let buff = '';
    for (let i = Number(startNum[0]); i <= Number(endNum[0]); i++) {
        for (let j = Number(startNum[1]); j <= Number(endNum[1]); j++) {
            for (let k = Number(startNum[2]); k <= Number(endNum[2]); k++) {
                for (let l = Number(startNum[3]); l <= Number(endNum[3]); l++) {
                    if (i % 2 === 0 || j % 2 === 0 || k % 2 === 0 || l % 2 === 0) {
                        continue;
                    }
                    buff += `${i}${j}${k}${l} `;
                }
            }
        }
    }
    console.log(buff);
}
barcodeGenerator(['3256', '6579'])