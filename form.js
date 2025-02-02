const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".ul");
const regis = document.getElementById("regis");
 
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});
document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
  })
);