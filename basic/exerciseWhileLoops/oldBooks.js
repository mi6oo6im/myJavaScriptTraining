function oldBooks(input) {
    let index = 0;
    let surchedBook = input[index++];
    let currentBook = input[index++];
    let bookIsFound = false;
    let pulledBooks = 0;

    while (currentBook !== 'No More Books') {
        if (currentBook === surchedBook) {
            bookIsFound = true;
            break;
        }
        pulledBooks++;
        currentBook = input[index++];
    }
    if (!bookIsFound) {
        console.log('The book you search is not here!');
        console.log(`You checked ${pulledBooks} books.`);
    } else {
        console.log(`You checked ${pulledBooks} books and found it.`)
    }
}
oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])