document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!username || !email || !password) {
    message.textContent = "Please fill in all fields!";
    message.style.color = "red";
    return;
  }

  // Simulate saving user (you can connect to backend later)
  const userData = { username, email, password };
  localStorage.setItem("user", JSON.stringify(userData));

  message.textContent = "Signup successful! 🎉";
  message.style.color = "green";

  // Optional redirect
  setTimeout(() => {
    window.location.href = "dashboard.html"; // if you create dashboard later
  }, 2000);
});
