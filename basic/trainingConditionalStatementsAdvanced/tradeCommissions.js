function tradeCommissions(input) {
    // Град	    0 ≤ s ≤ 500	    500 < s ≤ 1 000	    1 000 < s ≤ 10 000	 s > 10 000
    // Sofia	5%	                7%	                8%	               12%
    // Varna	4.5%	            7.5%	            10%	               13%
    // Plovdiv	5.5%	            8%	                12%	               14.5%
    let city = input[0];
    let sales = input[1];
    let res = 0;
    switch (city) {
        case 'Sofia':
            if (sales >= 0 && sales <= 500) {
                res = sales * 5 / 100;
            } else if (sales > 500 && sales <= 1000) {
                res = sales * 7 / 100;
            } else if (sales > 1000 && sales <= 10000) {
                res = sales * 8 / 100;
            } else if (sales > 10000) {
                res = sales * 12 / 100;
            } else {
                res = 'error';
            } break;
        case 'Varna':
            if (sales >= 0 && sales <= 500) {
                res = sales * 4.5 / 100;
            } else if (sales > 500 && sales <= 1000) {
                res = sales * 7.5 / 100;
            } else if (sales > 1000 && sales <= 10000) {
                res = sales * 10 / 100;
            } else if (sales > 10000) {
                res = sales * 13 / 100;
            } else {
                res = 'error';
            } break;
        case 'Plovdiv':
            if (sales >= 0 && sales <= 500) {
                res = sales * 5.5 / 100;
            } else if (sales > 500 && sales <= 1000) {
                res = sales * 8 / 100;
            } else if (sales > 1000 && sales <= 10000) {
                res = sales * 12 / 100;
            } else if (sales > 10000) {
                res = sales * 14.5 / 100;
            } else {
                res = 'error';
            } break;
        default: res = 'error'; break;
    }
    if (typeof res === 'number') {
        res = res.toFixed(2);
    }
    console.log(res);
}
tradeCommissions(["Plovdiv",
    "-50"]);
