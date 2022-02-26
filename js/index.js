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

}

const generatePasswordBtn = document.getElementById('password-generator-btn');
generatePasswordBtn.addEventListener('click', generatePasswords);