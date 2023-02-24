const form = document.getElementById("register-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const inputsArr = [...document.getElementsByTagName("input")];

// Functions
function showError(input, message) {
  const formInput = input.parentElement;
  formInput.className = formInput.classList[0] + " error";
  const small = formInput.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formInput = input.parentElement;
  formInput.className = formInput.classList[0] + " success";
}

// Check valid email address
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Capitalize first letter
function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Check required fields
function checkRequired(inArr) {
  inArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${capital(input.name)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check length
function checkLength(input, min, max) {
  if (input.value.trim().length < min) {
    showError(input, `${capital(input.id)} must be at least ${min} characters`);
  } else if (input.value.trim().length > max) {
    showError(
      input,
      `${capital(input.id)} must be less than ${max} characters`
    );
  }
}

// Check if passwords match
function checkPasswordsMatch(pw1, pw2) {
  if (!pw1.value || pw1.value.trim() !== pw2.value.trim()) {
    showError(pw2, `Your passwords must match`);
  } else {
    showSuccess(pw2);
  }
  // console.log(pw1.value, pw2.value);
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired(inputsArr);
  checkLength(name, 3, 15);
  checkLength(password1, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password1, password2);
});

export { form, name, email, password1, password2 };
