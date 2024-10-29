const container = document.querySelector(".container");
const button = document.getElementById("subscribe");
const emailCheck = document.getElementById("email");
const error = document.querySelector(".error-message");
const thanksMessage = document.querySelector(".active-state");
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener("click", () => {
  if (
    emailCheck.value.length === 0 ||
    !emailCheck.value.match(emailValidation)
  ) {
    // alert("Email Salah");
    thanksMessage.style.display = "none";
    error.style.display = "inline-block";
    emailCheck.style.border = "2px solid red";
    emailCheck.placeholder = "ash#loremcompany.com";
  } else {
    // alert("Email Valid");
    thanksMessage.style.display = "inline-block";
    container.style.display = "none";
  }
});
