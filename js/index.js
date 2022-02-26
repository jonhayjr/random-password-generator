const possibleCharacters = ["1","2","3","4","5","6","7","8","9","10", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "?", "!", "@", "<", ">", ":", ";", "&", "=", "+", "-"]

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomPassword = (length = 12) => {
    let password = '';

    for (let i=1; i <= 12; i++) {
        let randomNumber = getRandomNumber(possibleCharacters.length);
        password += possibleCharacters[randomNumber];
    }
    return password;
}

const generatePasswords = () => {
    let password1El = document.getElementById('password1');
    let password2El = document.getElementById('password2');
    let password3El = document.getElementById('password3');
    let password4El = document.getElementById('password4');

    let randomPassword1 = getRandomPassword();
    let randomPassword2 = getRandomPassword();
    let randomPassword3 = getRandomPassword();
    let randomPassword4 = getRandomPassword();

    password1El.value = randomPassword1;
    password2El.value = randomPassword2;
    password3El.value = randomPassword3;
    password4El.value = randomPassword4;
}

const generatePasswordBtn = document.getElementById('password-generator-btn');
generatePasswordBtn.addEventListener('click', generatePasswords);