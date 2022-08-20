function rightPlace(word, letter, check) {
    newWord = word.replace('_', letter);
    if (newWord === check){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');