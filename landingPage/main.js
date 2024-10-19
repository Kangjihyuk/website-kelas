const navbar = document.querySelector(".navbar");
const burger = document.querySelector("#burger");
const head = document.querySelector(".head");
const user = document.querySelector(".bxs-user-circle");
const dropdown = document.querySelector(".dropdown");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  dropdown.classList.remove("active");
});

user.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  navbar.classList.remove("active");
  burger.checked = false;
});

window.onscroll = () => {
  navbar.classList.remove("active");
  burger.checked = false;
  if (window.scrollY > 0) {
    head.classList.add("active");
    dropdown.classList.remove("active");
  } else {
    head.classList.remove("active");
  }
};
