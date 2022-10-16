function passwordValidator(password) {
    function checkLength(password) {
        let passLen = password.length;
        if (passLen < 6 || passLen > 10) {
            console.log('Password must be between 6 and 10 characters');
            return false;
        } else {
            return true;
        }
    }

    function isNum(char) {
        let currentCharCode = char.charCodeAt();
        if (currentCharCode >= 48 && currentCharCode <= 57){
            return true;
        }else {
            return false;
        }
    }

    function isAlpha(char) {
        lowerChar = char.toLowerCase();
        let currentCharCode = lowerChar.charCodeAt();
        if (currentCharCode >= 97 && currentCharCode <= 122){
            return true;
        }else {
            return false;
        }
    }

    function isAlNum(password) {
        let passLen = password.length;
        for (let i = 0; i < passLen; i++) {
            let currentChar = password[i];
            if (!isAlpha(currentChar) && !isNum(currentChar)){
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        return true;
    }

    function hasTwoDigits(password) {
        let digitCounter = 0;
        let passLen = password.length;
        for (let i = 0; i < passLen; i++){
            let currentChar = password[i];
            if (isNum(currentChar)){
                digitCounter++;
            }
            if (digitCounter >= 2){
                return true;
            }
        }
        console.log('Password must have at least 2 digits');
        return false;
    }

    function isValid(password) {
        let isValidLength = checkLength(password);
        let isValidAlNum = isAlNum(password);
        let isValid2Digit = hasTwoDigits(password);
        if (isValidLength && isValidAlNum && isValid2Digit) {
            return true;
        } else {
            return false;
        }
    }

    if (isValid(password)) {
        console.log('Password is valid');
    }
}
passwordValidator('logIn');
console.log('----------------------');
passwordValidator('MyPass123');
console.log('----------------------');
passwordValidator('Pa$s$s');
console.log('----------------------');