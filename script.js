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
    .then((data) => data.map((element) => getData(element)));
});

// create the getData function
const getData = (element) => {
  let div = document.createElement("div");
  div.classList.add("data");

  let img = document.createElement("img");
  img.classList.add("image");
  img.src = element.image;

  let h3 = document.createElement("h3");
  h3.classList.add("title");
  h3.textContent = element.title;

  let p = document.createElement("p");
  p.textContent = element.genre;

  let span2 = document.createElement("span");
  span2.textContent = element.year;

  let addBtn = document.createElement("button");
  addBtn.classList.add("like-btn");
  addBtn.textContent = "Add";
  addBtn.addEventListener("click", () => {
    if (addBtn.textContent === "Add") {
      addBtn.textContent = "Added";
    } else {
      addBtn.textContent = "Add";
    }
  });

  div.append(img, h3, p, span2, addBtn);

  document.getElementById("collection").appendChild(div);
};

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", debounce(handleSearch, 300));

async function handleSearch() {
  const query = searchInput.value.trim();

  if (query === "") {
    searchResults.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(
      `https://api.sampleapis.com/cartoons/cartoons2D`
    );
    const data = await response.json();

    const results = data.filter((cartoon) =>
      cartoon.title.toLowerCase().includes(query.toLowerCase())
    );

    displayResults(results);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = "No results found.";
    return;
  }

  const resultHTML = results
    .map((cartoon) => `<div>${cartoon.title}</div>`)
    .join("");
  searchResults.innerHTML = resultHTML;
}

// Debounce function to limit API calls
function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}
