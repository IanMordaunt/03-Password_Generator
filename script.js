// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialC = [
  "~",
  "!",
  "@",
  "#",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "?",
  ">",
  "<",
  "[",
  "]",
  "{",
  "}",
  ".",
  ";",
  ":",
];


function generatePassword() {
  
let output = [];
let createdPassword = [];

  let passwordLength = parseInt(prompt(
    "Enter the number of characters you want for your password. (between 8 and 128 characters)"
  ));
// Making sure the imput is only a number.
  if(Number.isNaN(passwordLength)){
    return alert("Invalid character Length.");
  }
// Setting perameters for the "passwordLength" 
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    return alert("Invalid character Length.");
  }

  console.log(output);

  //  Confirm: to determine lowercase
  let addlowerC = confirm("Do you want lowercase characters in your password?");

  if (addlowerC === true) {
    output = output.concat(lowerCase);
  }
  
  console.log(output);

  //  Confirm: to determine uppercase
  let addupperC = confirm("Do you want uppercase characters in your password?");
  if (addupperC === true) {
    output = output.concat(upperCase)
  }
  console.log(output);

  //  Confirm: to determine numbers
  let addnums = confirm("Do you want numbers in your password?");
  if (addnums === true) {
    output= output.concat(numbers);
  }
  console.log(output);

  //  Confirm: to determine special characters
  let addspecC = confirm("Do you want special characters in your password?");
  if (addspecC === true) {
    output = output.concat(specialC);
  }
  console.log(output);

// Run the output array thru the Math. to formulat a randomized password. Which is then stored in a local variable.
// Using a second random varibale  to store the randomized password in the array of "output".
  for (let i = 0; i < passwordLength; i++) {
    var randomFormula= Math.floor(Math.random() * output.length);
    var randomOutput = output[randomFormula]

// Using .push to add "randomOutput" and the last and only list item in the "createPassword" array.
    createdPassword.push(randomOutput)
  }
  
// Finally using ".join" to concatinate the "createPassword" array into a string.
  return createdPassword.join('');

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
