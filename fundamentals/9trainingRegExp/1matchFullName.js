function matchFullName(inputStr) {
    const regExp = /(?<=\b)[A-Z][a-z]+[ ][A-Z][a-z]+(?=\b)/gm;
    const namesArr = inputStr.match(regExp);
    console.log(namesArr.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
console.log('--------------------------------');