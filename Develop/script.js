// Assignment code here
const num = [1,2,3,4,5,6,7,8,9,0];
const sym = ["@","#","$","%"];
const characterCodes = Array.from(Array(26)).map((_, i)=>i+97);
const lowercaseLetters = characterCodes.map(code=>String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter=>letter.toUpperCase())
const generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase)=>{
  const availableCharacters = [
    ...(hasSymbols ? sym : []),
    ...(hasNumbers ? num : []),
    ...(hasUppercase ? uppercaseLetters : []),
    ...(hasLowercase ? lowercaseLetters : [])
  ];

  let password = "";

  if(availableCharacters.length === 0){
    return "";
  }

  for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(12, true, true, true, true);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
