// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays containing letters, numbers, and special characters
let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numericValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacter = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^",
"?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// A function that generates a password
function generatePassword(){
    console.log("You've pressed a button!")

}