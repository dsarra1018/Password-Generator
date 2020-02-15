// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays containing letters, numbers, and special characters
let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numericValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacter = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^",
"?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
let options = [];

// Write password to the #password input
function writePassword()
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// A function that generates a password
function generatePassword()
{
    // empty string to be returned
    let pass = "";
    
    // prompt that asks the user for the length of the password
    let passLenght = parseInt(
        prompt("How many characters would you like your password to contain?"));


    // Dealing with special characters
    let useSpecialChar = confirm("Click OK to confirm including special characters.");

    if (useSpecialChar)
    {
        //console.log("Yes, use special char");
        options.push(specialCharacter);
    }
    else
    {
        console.log("No, don't use special char");
    }


    // Dealing with numeric values
    let useNumericVal = confirm("Click OK to confirm including numeric characters.");

    if (useNumericVal)
    {
        //console.log("Yes, use numeric val");
        options.push(numericValues);
    }
    else
    {
        console.log("No, don't use numeric val");
    }

    // Dealing with lowercases
    let useLowercase = confirm("Click OK to confirm including lowercase characters.");

    if (useLowercase)
    {
        //console.log("Yes, use lowercase letters");
        options.push(lowercaseLetters);
    }
    else
    {
        console.log("No, don't use lowercase letters");
    }

    // Dealing with uppercases
    let useUppercase = confirm("Click OK to confirm including uppercase characters.");

    if (useUppercase)
    {
        //console.log("Yes, use uppercase letters");
        options.push(uppercaseLetters);
    }
    else
    {
        console.log("No, don't use uppercase letters");
    }

    // Itirates through passLength
    for (let i = 0; i < passLenght; i++)
    {
        let option_index = Math.floor(Math.random() * options.length);
        let char_index = Math.floor(Math.random() * options[option_index].length);

        pass += options[option_index][char_index];

    }

    // returning value of pass
    return pass;
}
