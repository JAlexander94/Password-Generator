// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var symbols = confirm("Include Special Characters:\n($@%&*,etc)")
  var numbers = confirm("Include Numbers:\n(123456789)")
  var lowercase = confirm("Include Lowercase Characters:\n(abcdefg)")
  var uppercase = confirm("Include Uppercase Characters:\n(ABCDEFG)")
  var passlength = parseFloat(prompt("Input password length between 10 and :\n(ABCDEFG)"))
  return [symbols,numbers,lowercase,uppercase,passlength]
}

//
let passoptions = getPasswordOptions()
let passlength = passoptions[4]
passoptions.pop()
let optionsarr = [specialCharacters,numericCharacters,lowerCasedCharacters,upperCasedCharacters]
let optionsarray = []
for (let i =0;i<passoptions.length;i++){
  if(passoptions[i]===true){
    optionsarray = optionsarray.concat(optionsarr[i])
  }
}
console.log(optionsarray)

// Function for getting a random element from an array
function getRandom(arr) {
  var randomelement = arr[Math.floor(Math.random()*arr.length)]
  return randomelement
}

// Function to generate password with user input
function generatePassword() {
  let password = []
  for (let i = 0;i<passlength;i++){
    password.push(getRandom(optionsarray))
  }
  let passwordstr = password.join("")
  return passwordstr
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);