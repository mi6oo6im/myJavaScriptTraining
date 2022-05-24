function workingHours(input) {
    // работното време на офисът е от 10-18 часа, 
    // от понеделник до събота включително.
    let hour = input[0];
    let day = input[1];
    let res = '';
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':

        case 'Saturday':
            if (hour >= 10 && hour <= 18) {
            res = 'open';
        } else {
            res = 'closed'
        }
        ; break;
        case 'Sunday': res = 'closed'; break;
    }
    console.log(res);
}
workingHours(["19",
    "Friday"]);
