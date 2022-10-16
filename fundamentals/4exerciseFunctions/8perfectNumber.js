function perfectNumber(num) {
    function isPositiveNumber(num) {
        if (num >= 0) {
            return true;
        } else {
            return false;
        }
    }

    function getDevisors(num) {
        let devisorArr = [];
        for (let i = 1; i < num; i++) {
            if (num % i == 0) {
                devisorArr.push(i)
            }
        }
        return devisorArr;
    }

    function isPerfectNumber(num) {
        let devisorsArr = getDevisors(num);
        let devisorsSum = 0;
        for (i of devisorsArr) {
            devisorsSum += i;
        }
        if (num == devisorsSum) {
            return true;
        } else {
            return false;
        }
    }

    if (isPositiveNumber(num) && isPerfectNumber(num)) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNumber(6);
console.log('--------------------');
perfectNumber(28);
console.log('--------------------');
perfectNumber(1236498);
console.log('--------------------');