// Assignment code here

/*Var section*/
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialcharacters = "~`!@#$%^&*()-_+={}[]|:;'<>,.?";
var password;


/*User clicks button */ 

function passgenerate() {
  var uppercaseask = confirm("Do you want upper case?")

  if uppercaseask {
    password += uppercase
  }

  var lowercaseask = confirm("Do you want lower case?")

  if lowercaseask {
    password += lowercase
  }

  var passlength = prompt("How many characters? must be between 8-128")
  if passlenthask {
    password = parseInt(passlength)
  }
  


}

function passl

/*Presented with series of prompts for PW criteria*/


/*Select Which Criteria to be used in PW*/

/*Prompt for Length*/

/*User Chooses length between 8-128 characters*/

/*Prompt for character types*/

/*User confirms whether or not they use LCase, Ucase, Numeric values, and/or special characters*/

/*Input Validation*/

/*Password Processing*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
