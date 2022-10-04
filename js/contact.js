const form = document.getElementById("form");
const nameField = document.getElementById("nameInput");
const emailField = document.getElementById("emailInput");
const commentsField = document.getElementById("commentsInput");
const radioBtns = document.querySelectorAll(".radio-button");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("input", () => {
  if (
    nameField.value.length > 0 &&
    emailField.value.length > 0 &&
    emailField.value.includes("@") &&
    commentsField.value.length > 0  
   ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "disabled");
  }
});




//I could't find a way to validate if radio buttons are checked.
// I tried a to loop through the node list and check if radioBtn.checked but I didn't success.
