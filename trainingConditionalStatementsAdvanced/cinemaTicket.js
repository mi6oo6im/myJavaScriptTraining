function cinemaTicket(input) {
    // Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
    //    12	     12	       14	      14        12	      16	    16
    let day = input[0];
    let res = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Friday': res = 12; break;
        case 'Wednesday':
        case 'Thursday': res = 14; break;
        case 'Saturday':
        case 'Sunday': res = 16; break;
    }
    console.log(res);
}
cinemaTicket(['Saturday']);