
function registerUser(event) {
  event.preventDefault();
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim().toLowerCase();
  const password = document.getElementById("register-password").value;

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "index.html";
  return false;
}

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah!");
  }
  return false;
}
