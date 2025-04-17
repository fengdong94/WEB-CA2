// @author LICIA
// this is the contact button
var contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {
  window.location.href = "contact.html";
});

// THIS IS MY GALLERY
// GET ALL THE ELEMENT
let showMoreButton = document.getElementById("showMoreButton");
let showLessButton = document.getElementById("showLessButton");
let extraGallery = document.getElementById("extra-gallery");

//WHEN CLICKS ON SEE MORE
showMoreButton.addEventListener("click", function () {
  extraGallery.classList.remove("d-none"); // SHOW THE CARDS
  showMoreButton.classList.add("d-none"); //HIDE THE SEE MORE BTN
  showLessButton.classList.remove("d-none"); // SHOW THE SEE LESSBTN
});

// WHEN CLICKS ON SEE LESS
showLessButton.addEventListener("click", function () {
  extraGallery.classList.add("d-none"); // HIDE THE EXTRAS CARDS
  showMoreButton.classList.remove("d-none"); //DISPLAY SEE MORE BTN
  showLessButton.classList.add("d-none"); // HIDE THE LESS BTN
});

// GET ALL THE CARDS
let cards = document.querySelectorAll(".dessert-card");

// WHEN THE MOUSE IS IN AND OUT
cards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    //when the moyseover the card, adds the hover effetc
    card.classList.add("hovered"); //
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("hovered");
  });
});

// this is my lightbox

// GET THE ELEMENTS FOR LIGHTBOX
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let lightboxTitle = document.getElementById("lightbox-title");
let lightboxText = document.getElementById("lightbox-text");
let lightboxClose = document.getElementById("lightbox-close");

// ADD CLICK
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    let imgSrc = card.querySelector("img").src;
    let imgTitle = card.querySelector(".card-title").textContent; // dessert title
    let imgText = card.querySelector(".card-text").textContent; // dessert description

    lightboxImg.src = imgSrc;
    lightboxTitle.textContent = imgTitle;
    lightboxText.textContent = imgText;

    // DISPLAYS THE LIGHTBOX
    lightbox.classList.remove("d-none");
  });
});

// CLOSES WHEN CLICK  "X"
lightboxClose.addEventListener("click", function () {
  lightbox.classList.add("d-none"); // HIDE THE lightbox
  lightboxImg.src = ""; //clean the image
  lightboxTitle.textContent = ""; //clean the title
  lightboxText.textContent = ""; //clean the text
});

// CLOSE LIGHTBOX WHEN CLICKS OUTSIDE THE IMAGE
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.classList.add("d-none");
    lightboxImg.src = "";
    lightboxTitle.textContent = "";
    lightboxText.textContent = "";
  }
});
// this is my vegan highlight
var veganButton = document.getElementById("veganButton");

veganButton.addEventListener("click", function () {
  window.location.href = "vegan.html";
});
