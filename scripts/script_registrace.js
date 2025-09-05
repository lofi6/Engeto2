// Navbar Sign Up page
fetch("../nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

// Password check
function valid() {
  const password1 = document.getElementById("pass1");
  const password2 = document.getElementById("pass2");

  const pass1 = password1.value;
  const pass2 = password2.value;

  if (pass1 !== pass2) {
    password1.classList.add("invalid");
    password2.classList.add("invalid");
    password1.classList.remove("valid");
    password2.classList.remove("valid");
    return false;
  } else {
    password1.classList.add("valid");
    password2.classList.add("valid");
    password1.classList.remove("invalid");
    password2.classList.remove("invalid");
    return true;
  }
}

document.getElementById("pass1").addEventListener("input", valid);
document.getElementById("pass2").addEventListener("input", valid);
