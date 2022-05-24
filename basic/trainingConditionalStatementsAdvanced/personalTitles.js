function personalTitles(input){
    //"Mr." – мъж (пол 'm') на 16 или повече години
    //"Master" – момче (пол 'm') под 16 години
    //"Ms." – жена (пол 'f') на 16 или повече години
    //"Miss" – момиче (пол 'f') под 16 години
    
    let age = input[0];
    let gender = input[1];
    let res = '';
    switch (gender){
        case 'f':
            if (age < 16){
                res = 'Miss';
            } else {
                res = 'Ms.';
            };
            break;
        case 'm':
            if (age < 16){
                res = 'Master';
            } else {
                res = 'Mr.';
            };
            break;
    }
    console.log(res);
}
personalTitles(["17",
"m"]);
