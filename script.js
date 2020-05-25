var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*(){}[]=<>/,.";
var password = "";
var tempPass ='';



// while (!uppercase && !lowercase && !numbers && !symbols) {
//   alert("You must select at least one character type!");
//   uppercase = confirm("Do you like to use uppercase letters?");
//   lowercase = confirm("Do you like to use lowercase letters?");
//   numbers = confirm("Do you like to use numbers?");
//   symbols = confirm("Do you like to use special characters?");
// }

generateBtn.addEventListener('click', function() {
  writePassword();
});

function writePassword() {
    var length = Number(prompt("How many characters would you like your password to be?"));
    while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

    var uppercase = confirm("Do you like to use uppercase letters?");
    var lowercase = confirm("Do you like to use lowercase letters?");
    var numbers = confirm("Do you like to use numbers?");
    var symbols = confirm("Do you like to use special characters?");

    var allowed = {};
    if (uppercase) password += rando(allowed.uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (lowercase) password += rando(allowed.lowers = "abcdefghijklmnopqrstuvwxyz");
    if (numbers) password += rando(allowed.numbers = "1234567890");
    if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

    for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}
