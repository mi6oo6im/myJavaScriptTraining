function login(input) {
    username = input[0];
    password = username.split('').reverse().join('');
    wrongAttempts = 0;
    for (let i = 1; i < input.length; i++) {
        attempt = input[i];
        if (attempt === password) {
            console.log(`User ${username} logged in.`);
        } else {
            wrongAttempts++;
            if (wrongAttempts === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny', 'monney']);