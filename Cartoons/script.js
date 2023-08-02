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
document.addEventListener("click", () => {
  fetch("https://api.sampleapis.com/cartoons/cartoons2D")
    .then((response) => response.json())
    .then((data) => data.forEach((element) => getData(element)));
});

const getData = (element) => {
  let card = document.createElement("div");
  card.classList.add("data");

  let img = document.createElement("img");
  img.src = element.image;

  card.append(img);

  document.getElementById("collection").appendChild(card);
};
