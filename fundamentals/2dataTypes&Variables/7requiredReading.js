function requiredReading(pages, pagesPerHour, days) {
    let hourRequired = pages / pagesPerHour;
    let hoursPerDay = hourRequired / days;
    console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);