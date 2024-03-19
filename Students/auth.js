function animateButton() {
    var button = document.querySelector(".login-btn");
    button.classList.add("pressed");

    setTimeout(function () {
      button.classList.remove("pressed");
    }, 100);
  }

  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var toggleButton = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.innerHTML =
        '<i class="ri-eye-off-fill" style="border: none;"></i>';
    } else {
      passwordInput.type = "password";
      toggleButton.innerHTML =
        '<i class="ri-eye-fill" style="border: none;"></i>';
    }
  }

  function cnfmTogglePasswordVisibility() {
    var cnfmPasswordInput = document.getElementById("cnfmpasswordInput");
    var cnfmToggleButton = document.getElementById("toggleCnfmPassword");

    if (cnfmPasswordInput.type === "password") {
      cnfmPasswordInput.type = "text";
      cnfmToggleButton.innerHTML =
        '<i class="ri-eye-off-fill" style="border: none;"></i>';
    } else {
      cnfmPasswordInput.type = "password";
      cnfmToggleButton.innerHTML =
        '<i class="ri-eye-fill" style="border: none;"></i>';
    }
  }

  function redirectToIndex() {
    // You can adjust the URL as needed
    window.location.href = "index.html";
  }