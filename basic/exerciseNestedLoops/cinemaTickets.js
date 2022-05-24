function cinemaTickets(input) {
    let index = 0;
    let movie = input[index++];
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    while (movie !== 'Finish') {
        let capacity = Number(input[index++]);
        let ticketCounter = 0;
        for (i = 0; i < capacity; i++) {
            let ticketType = input[index++];
            if (ticketType === 'End') {
                break;
            }
            ticketCounter++;
            switch (ticketType) {
                case 'student': studentTickets++; break;
                case 'standard': standardTickets++; break;
                case 'kid': kidTickets++; break;
                default: ; break;
            }
        }
        let capacityFull = ticketCounter / capacity * 100;
        console.log(`${movie} - ${capacityFull.toFixed(2)}% full.`);
        movie = input[index++];
    }
    let toalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${toalTickets} `);

    let studentTicketsPercent = studentTickets / toalTickets * 100;
    let standardTicketsPercent = standardTickets / toalTickets * 100;
    let kidTicketsPercent = kidTickets / toalTickets * 100;
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`)
}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])

