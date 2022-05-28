function excursion(input) {
    let groupSize = Number(input[0]);
    let nights = Number(input[1]);
    let transportCardsPerPerson = Number(input[2]);
    let museumTicketsPerPerson = Number(input[3]);
    let nightCost = 20;
    let transportCardsCost = 1.60;
    let museumTicketsCost = 6;
    let unforseenExpencesPercent = 25;

    let totalCostPerPerson = nights * nightCost +
        transportCardsPerPerson * transportCardsCost +
        museumTicketsPerPerson * museumTicketsCost
    let TotalCost = totalCostPerPerson * groupSize *
        (1 + unforseenExpencesPercent / 100)

    console.log(TotalCost.toFixed(2));
}
excursion(["131",
    "9",
    "33",
    "46"])
