const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    alert("Email and password are required!");
    return;
  }

  const obj = { email: email.value.trim(), password: password.value.trim() };
  console.log(obj);

  form.reset();
});
