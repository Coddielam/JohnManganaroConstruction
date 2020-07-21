const bannerText = document.querySelector(".banner-text");
const bannerChildren = bannerText.childElementCount;

for (let i = 0; i < bannerChildren; i++) {
  let delay = 0.3;
  bannerText.children[i].style.animation += `upAppear 0.8s ease forwards ${
    0.5 + delay * i
  }s`;
}
