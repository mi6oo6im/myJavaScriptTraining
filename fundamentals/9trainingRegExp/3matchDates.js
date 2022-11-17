function matchDates(inputArr) {
    const str = inputArr[0];
    const regExp = /(?<=\b| )(?<day>\d{2})([/]|[-]|[.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})(?=\b)/gm
    const matches = [...str.matchAll(regExp)];
    const matchesObject = str.matchAll(regExp);
    for (const date of matchesObject) {
        const { day, month, year } = date.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
console.log('--------------------------------');
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);
console.log('--------------------------------');