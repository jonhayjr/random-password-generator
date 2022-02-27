/*Array of possible password characters*/
const possibleCharacters = ["1","2","3","4","5","6","7","8","9", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "?", "!", "@", "<", ">", ":", ";", "&", "=", "+", "-"]

/*Function to get random number*/
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

/*Function to get random password*/
const getRandomPassword = (length) => {
    let password = '';

    for (let i=1; i <= length; i++) {
        const randomNumber = getRandomNumber(possibleCharacters.length);
        password += possibleCharacters[randomNumber];
    }
    return password;
}

/*Function to generate 4 random passwords and update input values*/
const generatePasswords = () => {
    const passwordLengthEl = document.getElementById('password-length-input');
    const passwordLengthElValue = passwordLengthEl.value;
    let passwordLength = passwordLengthElValue;
  
    const password1El = document.getElementById('password1');
    const password2El = document.getElementById('password2');
    const password3El = document.getElementById('password3');
    const password4El = document.getElementById('password4');

    const randomPassword1 = getRandomPassword( passwordLength);
    const randomPassword2 = getRandomPassword( passwordLength);
    const randomPassword3 = getRandomPassword (passwordLength);
    const randomPassword4 = getRandomPassword( passwordLength);

    password1El.value = randomPassword1;
    password2El.value = randomPassword2;
    password3El.value = randomPassword3;
    password4El.value = randomPassword4;
}

/*Adds event listener to Generate Passwords button and runs generatePasswords function*/
const generatePasswordBtn = document.getElementById('password-generator-btn');
generatePasswordBtn.addEventListener('click', generatePasswords);

