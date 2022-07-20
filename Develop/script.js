// Assignment code here
var generateBtn = document.querySelector("#generate");
/*Var section*/
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialcharacters = "~`!@#$%^&*()-_+={}[]|:;'<>,.?";



function generatePassword() {

  var password = "";
  var specialcharacters = "";
  //prompt for upper case
  var uppercaseask = confirm("Do you want upper case?");

  if (uppercaseask) {
    password += uppercase;
  }
  //Prompt for lower case 
  var lowercaseask = confirm("Do you want lower case?");

  if (lowercaseask) {
    password += lowercase;
  }

  //Prompt for Length
  var passlength = prompt("How many characters? must be between 8-128");
  if (passlenthask) {
    password = parseInt(passlength);

    if (passlength < 8) {
      alert("Password must be more than 7 characters");
      return"";
    }
  
    if (passlength > 128) {
      alert("Password must be less than 128 characters");
    }
  
  }
  //Prompt for numbers
  var numask = confirm("Would you like numbers included?");

    if (numask) {
      password += numask;
    }
    // Prompt for special characters
    var specialask = confirm("Would you like special characters?");

    if (specialask) {
      password += specialask;
    }
}



/*Presented with series of prompts for PW criteria*/


/*Select Which Criteria to be used in PW*/



/*User Chooses length between 8-128 characters*/


/*Input Validation*/

/*Password Processing*/

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
