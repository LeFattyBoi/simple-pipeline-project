const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  nameInput.classList.remove("input-error");
  emailInput.classList.remove("input-error");
  successMsg.textContent = "";

  let hasError = false;

  // Check name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("input-error");
    hasError = true;
  }

  // Check email
  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    emailError.textContent = "Please enter a valid email.";
    emailInput.classList.add("input-error");
    hasError = true;
  }

  if (!hasError) {
    successMsg.textContent = "Form sent successfully!";
  }
});
