// getting div.page for content changing
var page = document.querySelector(".page");
// getting all achor tag in navigation bar
const aboutAnchor = document.querySelector("a.about"),
  remodeling = document.querySelector("a.remodeling"),
  rennovations = document.querySelector("a.rennovations"),
  additions = document.querySelector("a.additions"),
  contact = document.querySelector("a.contact"),
  decks = document.querySelector("a.decks");

var pages = [aboutAnchor, remodeling, rennovations, additions, decks, contact];
var pageClass = [
  "about",
  "remodeling",
  "rennovations",
  "additions",
  "decks",
  "contact",
];

// fetch request html file to change div.page content
function renderView(view) {
  fetch(`./${view}.html`)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      page.innerHTML = text;
      remodelingPage(view);
      return;
    })
    .catch(() => {
      console.log("something went wrong");
    });
}

// appending click eventListener to each anchor tag in array above
for (let i = 0; i < pages.length; i++) {
  console.log(pageClass[i]);
  pages[i].addEventListener("click", () => {
    page.innerHTML = "<h1 style='color:white;'>Loading...</h1>";
    renderView(pageClass[i]);
  });
}

// for handling interacting with content in remodeling page
function remodelingPage(view) {
  // procedures for remodeling page
  if (view === "remodeling" || view === "decks") {
    lbimgs = document.querySelectorAll("img.lbimg");
    lightbox = document.querySelector("div.lightbox");
    lbimgs.forEach((img) => {
      img.addEventListener("click", () => {
        console.log(lightbox.classList);
        lightbox.classList += " lightbox-active";
        const largerImage = document.createElement("img");
        largerImage.src = img.src;
        if (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(largerImage);
      });
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) {
        console.log(e.currentTarget);
        return;
      }
      lightbox.classList.remove("lightbox-active");
    });
  }
}
