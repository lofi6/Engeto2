// Scroll to top button
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    toTop.classList.add("visible");
    toTop.classList.remove("invisible");
  } else {
    toTop.classList.add("invisible");
    toTop.classList.remove("visible");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
