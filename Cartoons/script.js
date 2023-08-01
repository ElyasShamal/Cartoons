// humburger menu
let humburger = document.querySelector(".humburger");
let navMenu = document.querySelector(".nav-menu");

humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    humburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//end of humburger
