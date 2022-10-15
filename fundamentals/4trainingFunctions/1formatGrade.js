function formatGrade(grade) {
    function isGraduate(grade) {
        if (grade >= 3) {
            return true;
        } else {
            return false;
        }
    }
    function getPrefix(grade) {
        if (grade < 3) {
            return 'Fail';
        } else if (grade < 3.5) {
            return 'Poor';
        } else if (grade < 4.5) {
            return 'Good';
        } else if (grade < 5.5) {
            return 'Very good';
        } else {
            return 'Excellent';
        }
    }
    if (isGraduate(grade)) {
        console.log(`${getPrefix(grade)} (${grade.toFixed(2)})`);
    } else {
        console.log('Fail (2)');
    }
}
formatGrade(3.33);
console.log('-----------------------');
formatGrade(4.50);
console.log('-----------------------');
formatGrade(2.99);
console.log('-----------------------');