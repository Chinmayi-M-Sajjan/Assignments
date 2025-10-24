document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Dummy login check (you can replace with real validation)
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    alert("Login successful! Redirecting to home page...");
    window.location.href = "home.html";
  } else {
    alert("Please enter valid credentials.");
  }
});

document.getElementById("registerLink").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "register.html";
});

document.getElementById("homeLink").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "home.html";
});


