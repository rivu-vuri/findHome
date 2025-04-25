document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting

    // Get values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get error elements
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset errors
    emailError.classList.add("d-none");
    passwordError.classList.add("d-none");

    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      emailError.classList.remove("d-none");
      isValid = false;
    }

    // Password validation
    if (!password) {
      passwordError.classList.remove("d-none");
      isValid = false;
    }

    // If valid, proceed
    if (isValid) {
      alert("Login successful!");
      // You can proceed with AJAX or form.submit()
    }
  });
