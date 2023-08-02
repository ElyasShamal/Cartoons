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

// fetch request to get the data
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.sampleapis.com/cartoons/cartoons2D")
    .then((response) => response.json())
    .then((data) => data.forEach((element) => getData(element)));
});

// create the getData function
const getData = (element) => {
  let card = document.createElement("div");
  card.classList.add("data");

  let img = document.createElement("img");
  img.classList.add("image");
  img.src = element.image;

  let h3 = document.createElement("h3");
  h3.classList.add("title");
  h3.textContent = element.title;

  let span = document.createElement("span");
  span.textContent = "Title" + element.creator;

  card.append(img, h3, span);

  document.getElementById("collection").appendChild(card);
};

fetch("https://api.sampleapis.com/cartoons/cartoons2D")
  .then((res) => res.json())
  .then((data) => console.log(data));
