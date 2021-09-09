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
// generate password function with only owercase
function generatelowerPassword(length){
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}
//generate password with upper case
function generateupperPassword(length){
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  var result = '';
    for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}
//generate password with numeric case
function generatenumericPassword(length){
  var characters = '1234567890';
  var charactersLength = characters.length;
  var result = '';
    for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}
//generate password with special characters
function generatespecialPassword(length){
  var characters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result = '';
    for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}


console.log("lower  "+generatelowerPassword(3));
console.log("upper  "+generateupperPassword(3));
console.log("numeric "+generatenumericPassword(3));
console.log("special "+generatespecialPassword(3));


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
