function substring(InputString, start, count) {
    newString = InputString.substring(start, start + count);
    console.log(newString);
}
substring('ASentence', 1, 8);
console.log('---------------------------');
substring('SkipWord', 4, 7);
console.log('---------------------------');