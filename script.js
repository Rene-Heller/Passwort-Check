

function isPasswordValid(password) {
  const checkedPassword = password.length >= 8 && password.length <= 16;
  const passwordMatch = arePasswordsMatching(password)
  return checkedPassword && passwordMatch
}

function arePasswordsMatching(password){
  const repeatedPassword = document.getElementById('passwordRepeatInput').value.trim()
  return password === repeatedPassword
}

function checkPassword() {
  const password = document.getElementById('passwordInput').value
  const message = document.getElementById("message");

  if (isPasswordValid(password)) {
    message.textContent = "✅ Passwort ist gültig";
    message.className = "result ok";
  } else {
    message.textContent = "❌ Nur 8 bis 16 Zeichen erlaubt";
    message.className = "result error";
  }
}


// function setRepeatPasswordValue(value){
//   document.getElementById('passwordRepeatInput').value = value;
// }