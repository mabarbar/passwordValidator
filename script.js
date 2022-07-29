const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 12;

const showMsg = () => {
  if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = "The password complies with the principles of good password assignment. Good job!";
    p.style.color = "#00FF44";
  } else if (pass.value.length < minValue) {
    p.textContent = "Password is too short";
    p.style.color = "yellow";
  } else if (!pass.value.match(letters)) {
    p.textContent = "Password doesn't contain letters";
    p.style.color = "yellow";
  } else if (!pass.value.match(numbers)) {
    p.textContent = "Password doesn't contain numbers";
    p.style.color = "yellow";
  } else if (!pass.value.match(special)) {
    p.textContent = "Password doesn't contain special symbols";
    p.style.color = "yellow";
  }
};

const checkPassword = () => {
  if (pass.value !== "") showMsg();
  else {
    p.textContent = "You haven't entered your password yet...";
    p.style.color = "";
  }
};

pass.addEventListener("keyup", checkPassword);
