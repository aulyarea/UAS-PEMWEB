const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function login() {
  // Define correct username and password
  const correctUsername = "admin";
  const correctPassword = "admin123";

  // Get input values
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  // Check if username and password match
  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    // Redirect to admin folder
    window.location.href = "backend.html"; // Replace with your admin folder path
  } else {
    // Show error message
    alert("Invalid username or password!");
  }
}

