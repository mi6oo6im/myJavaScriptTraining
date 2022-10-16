function loadingBar(percent) {
    function printBar(percent) {
        percentNum = percent / 10;
        dotNum = 10 - percentNum;
        bar = '%'.repeat(percentNum) + '.'.repeat(dotNum);
        console.log(`${percent}% [${bar}]`);
    }

    function isCompleted(percent) {
        if (percent == 100) {
            return true;
        } else {
            return false;
        }
    }

    function printFinal(percent) {
        if (isCompleted(percent)) {
            console.log('100% Complete!');
        } else {
            printBar(percent);
            console.log('Still loading...');
        }
    }
    printFinal(percent);
}
loadingBar(30);
console.log('-------------------');
loadingBar(50);
console.log('-------------------');
loadingBar(100);
console.log('-------------------');