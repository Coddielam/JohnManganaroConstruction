const navbarContent = `
<div class="brand">
  <h2>
    <img class="logo" src="/assets/JohnManganaroLogo.png"> 
    <span class="brand-name">John Manganaro Construction</span> 
  </h2>
</div>
<ul class="nav-items">
    <li class="nav"><a href="/" class="home">Home</a></li>
    <li class="nav"><a href="#about" class="about">About Us</a></li>
    <li class="nav nav-dropdown">
        <a>Services <i class="dropdown-caret" style="font-size:12px">&#9660;</i> </a>
        <ul class="dropdown-content">
            <li class="dropdown-item"><a href="#remodeling" class="remodeling">Remodeling</a></li>
            <li class="dropdown-item"><a href="#renovations" class="rennovations">Renovations</a></li>
            <li class="dropdown-item"><a href="#additions" class="additions">Additions</a></li>
            <li class="dropdown-item"><a href="#decks" class="decks">Decks</a></li>
        </ul>
    </li>
    <li class="nav"><a href="#contacts" class="contact">Contact</a></li>
    <li class="nav call-john"><a href="tel:7816650538">Call John</a></li>
</ul>
<div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
</div>
`;

// burger menu
const navigation = document.querySelector("nav");
navigation.innerHTML += navbarContent;

const burger = document.querySelector(".burger"),
  nav = document.querySelector(".nav-items"),
  navItemsLi = document.querySelectorAll(".nav-items li.nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("crossed");

  navItemsLi.forEach((li, index) => {
    li.style.animation
      ? (li.style.animation = "")
      : (li.style.animation = `upAppear 0.3s ease forwards ${
          index / 8 + 0.4
        }s`);
  });
});

// dropdown menu
const dropdownbtn = document.querySelector(".nav-dropdown"),
  dropdown = document.querySelector(".dropdown-content"),
  dropdownCaret = document.querySelector(".dropdown-caret");

dropdownbtn.addEventListener("click", () => {
  dropdown.style.display === "none"
    ? (dropdown.style.display = "flex")
    : (dropdown.style.display = "none");
  dropdown.style.display === "none"
    ? (dropdownCaret.innerHTML = "&#9660;")
    : (dropdownCaret.innerHTML = "&#9650;");
});
