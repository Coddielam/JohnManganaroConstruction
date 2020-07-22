// service section
const serviceOverview = `<section class="service-overview">
  <div class="service addition"><h3>Additions & Carpentry Services</h3></div>
  <div class="service remodeling"><h3>Kitchen & Bathroom Remodeling</h3></div>
  <div class="service decks"><h3>Decks & Porches</h3></div>
</section>`;

var pageContent = document.querySelector(".page-content");
pageContent.innerHTML += serviceOverview;

// Bi-sectioner
function bisectionConstructor(
  content,
  className = [""],
  imageSrc,
  alt,
  reverse = false
) {
  className = className.join(" ");
  // divs
  const infoDiv = `<div class="info">${content}</div>`;
  const pictureDiv = `<div class="picture"> <img src="${imageSrc}" alt="${alt}"></div>`;
  // setting divs order (horizontal)
  const divOrder = reverse ? pictureDiv + infoDiv : infoDiv + pictureDiv;
  // final
  const bisectioner = `
  <section class="bisection ${className}">
    ${divOrder}
  </section>
  `;
  return bisectioner;
}

// jmc welcome
const JohnIntro = `
<h1>Manganaro Construction of Melrose, MA is a locally owned, owner-operated company.</h1>
<p>We provide quality, cost-effective construction, repair and home improvement services to the greater Melrose, MA area.</p>
<p>We have been in business since 1980. We have evolved and improved to meet our customers’ needs. We are fully Licensed, Bonded and Insured.</p>
`;

const JohnMWelcome = bisectionConstructor(
  JohnIntro,
  ["bisection1"],
  "/JohnManganaro/assets/JohnManganaro.jpg",
  "Picture of John Manganaro",
  true
);

pageContent.innerHTML += JohnMWelcome;

// covered projects
const projectsCovered = `
<h1>We tackle a wide variety of construction repairs and remodeling projects, including:</h1>
<ul class="bisec2">
  <li>Kitchen Remodeling</li>
  <li>Bathroom Remodeling</li>
  <li>Remodeling</li>
  <li>Renovations</li>
  <li>Additions</li>
  <li>Deck Building</li>
  <li>Porches</li>
  <li>Carpentry</li>
</ul>
`;

const coverProjects = bisectionConstructor(
  projectsCovered,
  ["bisection2"],
  "/JohnManganaro/assets/BestOfMelroseCert.jpg",
  "Best of Melrose 2018 Award Certificate"
);

pageContent.innerHTML += coverProjects;

// interior remodeling

const interiorRemodelPaint = `
<h3>Make Your Home Interior Look New Again!</h3>
<h1>Interior Remodeling & Painting</h1>
<div class="bisec3uls">
  <ul class="bisec3">
    <li>Painting</li>
    <li>Light Carpentry</li>
    <li>New Crown Molding</li>
    <li>New Window Trim</li>
    <li>New Door Trim</li>
  </ul>

  <ul>
   Contractor Resource:
   &nbsp;&nbsp;&nbsp;&nbsp;<li>Painting Contractor</li>
  <ul>
</div>
`;
const ineriorRemodelPaintSec = bisectionConstructor(
  interiorRemodelPaint,
  ["bisection3"],
  "",
  "Interior Remodeling and Painting Service",
  true
);
pageContent.innerHTML += ineriorRemodelPaintSec;

// form
const form = `
<form>
<h1>Contact John For Free Consultation</h1>
<p>* All fields required</p>
<label for="fname">First Name:</label>
<input type="text" name="fname" />
<label for="lname">Last Name:</label>
<input type="text" name="lname" />
<label for="phone">Phone Number:</label>
<input type="text" name="phone" />
<label for="email">Email:</label>
<input type="text" name="email" />
<label for="comment">Comment</label>
<input type="text" name="comment" class="comment" />
<input type="submit" class="submit"/>
</form>
`;
const contactFormSec = bisectionConstructor(form, ["bisection4"], "", "", true);
pageContent.innerHTML += contactFormSec;
