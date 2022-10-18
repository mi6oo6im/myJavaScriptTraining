function sortAnArrayBy2Criteria(arr) {
    arr.sort((a, b) => a.length - b.length === 0 ? a.localeCompare(b) : a.length - b.length)
    console.log(arr.join('\n'));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('-----------------------------');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('-----------------------------');