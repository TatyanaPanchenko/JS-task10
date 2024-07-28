const signup = document.querySelector(".form-registration");
const login = document.querySelector(".form-login");
const { formReg } = document.forms;
const { formLog } = document.forms;
const { createEmail, createName, createPassword, confirmPassword } =
  formReg.elements;
const { enterEmail, enterPassword } = formLog.elements;
const error = document.querySelector(".error");
const message = document.querySelector(".message");
const array = [];

formReg.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    createEmail.value === "" ||
    createName.value === "" ||
    createPassword.value === ""
  ) {
    error.textContent = "Enter value";
    return;
  } else if (createPassword.value !== confirmPassword.value) {
    error.textContent = "Enter the same passwords";
    return;
  } else {
    error.textContent = "";
  }
  const userDate = {
    userEmail: createEmail.value,
    userName: createName.value,
    userPassword: createPassword.value,
  };
  array.push(userDate);

  formReg.reset();
});

formLog.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkDate = {
    userEmail: enterEmail.value,
    userPassword: enterPassword.value,
  };

  if (array.length === 0) {
    message.textContent = "First create an account";
  }
  array.forEach((element) => {
    if (
      element.userEmail === checkDate.userEmail &&
      element.userPassword === checkDate.userPassword
    ) {
      message.textContent = "Successful login";
    } else {
      message.textContent = "This user does not exist";
    }
  });
});

formReg.addEventListener("click", (event) => {
  if (event.target.matches(".link-login")) {
    signup.classList.add("none");
    login.classList.remove("none");
  }
});
formLog.addEventListener("click", (event) => {
  if (event.target.matches(".link-register")) {
    login.classList.add("none");
    signup.classList.remove("none");
  }
});
