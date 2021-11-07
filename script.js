// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

var passwordLength = prompt("How many characters would you like the password to generate");
  if (passwordLength < 8 || passwordLength > 128){
    alert("Password length has to be between 8 and 128 characters");
  } else{
  generatePassword()
  }
}
function generatePassword() {
  var passwordUppercase = confirm("would you like the password to use uppercase letters?");
  var passwordLowercase = confirm("would you like the password to use lowercase letters?");
  var passwordNumber = confirm("would you like the password to use numbers?");
  var passwordSymbols = confirm("would you like the password to use special characters?");
  console.log(cap);
  if(passwordUppercase == true || passwordLowercase == true || passwordNumber == true || passwordSypasswordSymbols == true){
  console.log("ok");
  }
}
  while (!(passwordUppercase || passwordLowercase || passwordNumber || passwordSymbols)) {
  alert("Please select at least on of the following character types!");

  var passwordUppercase = confirm("would you like the password to use uppercase letters?");
  var passwordLowercase = confirm("would you like the password to use lowercase letters?");
  var passwordNumber = confirm("would you like the password to use numbers?");
  var passwordSymbols = confirm("would you like the password to use special characters?");
}
const resultEl  = document.getElementById ('password');
document.getElementById ('generate').addEventListener('click',() => {
  resultEl.value = generatePassword(passwordUppercase,passwordLowercase,passwordNumber,passwordSymbols)
});
const randomFunc = (
  passwordUppercase: getRandomUpper,
  passwordLowercase: getRandomLower,
  passwordNumber: getRandomNumber,
  passwordSymbols; getRandomSymbol
)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
