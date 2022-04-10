function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let hoursPerDay = pages / pagesPerHour / daysToRead;

    console.log(hoursPerDay);
}
vacationBooksList(["432 ",
    "15 ",
    "4 "]
)