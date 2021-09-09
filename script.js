// Assignment code here
//check the functions, if checked reutrn true, not checked return false
function checklowercase() {
  var checklower = document.getElementById("lowercase").checked;
}
function checkuppercase(){
  var checkupper = document.getElementById("uppercase").checked;
}
function checknumeric(){
  var checknumeric = document.getElementById("numeric").checked;
}
function checkspecial(){
  var checkspecial = document.getElementById("special").checked;
}



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
