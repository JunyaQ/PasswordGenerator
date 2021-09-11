// Assignment code here
//check the functions, if checked reutrn true, not checked return false
function checklowercase() {
  var checklower = document.getElementById("lowercase").checked;
  //console.log("lowerresult "+checklower);
  return checklower;
}
function checkuppercase(){
  var checkupper = document.getElementById("uppercase").checked;
  //console.log("upperresult "+checkupper);
  return checkupper;
}
function checknumeric(){
  var checknumeric = document.getElementById("numeric").checked;
  //console.log("numeric result "+checknumeric);
  return checknumeric;
}
function checkspecial(){
  var checkspecial = document.getElementById("special").checked;
  //console.log("special result "+checkspecial);
  return checkspecial;
}
function getlength(){
var l = document.getElementById("pswlength").value;
console.log("get length "+l);
return l;
}






function generatefunction(length){
  //only lower
if(checklowercase()===true && checkuppercase()===false && checknumeric()===false && checkspecial()===false){
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}
  //only upper
else if(checklowercase()==false && checkuppercase()==true && checknumeric()==false && checkspecial()==false){
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  var result = '';
    for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}

//only number 
else if(checklowercase()==false && checkuppercase()==false && checknumeric()==true && checkspecial()==false){
  var characters = '1234567890';
  var charactersLength = characters.length;
  var result = '';
    for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}

//only special 
else if(checklowercase()==false && checkuppercase()==false && checknumeric()==false && checkspecial()==true){
  var characters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result = '';
    for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}

//lower and upper
else if(checklowercase()==true && checkuppercase()==true && checknumeric()==false && checkspecial()==false){
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
} 

//lower and number 
else if(checklowercase()==true && checkuppercase()==false && checknumeric()==true && checkspecial()==false){
  var characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result
}

//lower and special 
else if (checklowercase()==true && checkuppercase()==false && checknumeric()==false && checkspecial()==true){
  var characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
  r = characters.charAt(Math.floor(Math.random() * charactersLength));
  result = result +r;
 }
 return result;
}

//upper and number
else if (checklowercase()==false && checkuppercase()==true && checknumeric()==true && checkspecial()==false){
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  var charactersLength = characters.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
  r = characters.charAt(Math.floor(Math.random() * charactersLength));
  result = result +r;
 }
 return result;
}
//upper and special
else if(checklowercase()==false && checkuppercase()==true && checknumeric()==false && checkspecial()==true){
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
  r = characters.charAt(Math.floor(Math.random() * charactersLength));
  result = result +r;
 }
 return result;
}

//number and special 
else if(checklowercase()==false && checkuppercase()==false && checknumeric()==true && checkspecial()==true){
  var characters = '1234567890!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
  r = characters.charAt(Math.floor(Math.random() * charactersLength));
  result = result +r;
 }
 return result;
}

//lower, upper and number
else if(checklowercase()==true && checkuppercase()==true && checknumeric()==true && checkspecial()==false){
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}

//lower, upper and special 
else if(checklowercase()==true && checkuppercase()==true && checknumeric()==false && checkspecial()==true){
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}

//upper number and special 
else if(checklowercase()==false && checkuppercase()==true && checknumeric()==true && checkspecial()==true){
  var characters = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}
//lower, upper, numer and special
else if(checklowercase()==true && checkuppercase()==true && checknumeric()==true && checkspecial()==true){
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var charactersLength = characters.length;
  var result ='';
  for ( var i = 0; i < length; i++ ) {
    r = characters.charAt(Math.floor(Math.random() * charactersLength));
    result = result +r;
 }
 return result;
}
else{
  var result ='please choose at least one type'
  return result;
}
}
//check the length and generate password
function generatepassword(){
  var length = getlength();
  var result ='';
  if(length <8){
    alert("please enter a number larger than 8");
    result = 'password length input error';
    return result;
  }
  else if(length> 128){
    alert("please enter a number smaller than 128")
    result = 'password length input error';
    return result;
  }
  else{
    
    result = generatefunction(length);
    return result;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
