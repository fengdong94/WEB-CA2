// this is the contact button
var contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {
  window.location.href = "contact.html";
});





// THIS IS MY GALLERY 
// GET ALL THE ELEMENT
let showMoreBtn = document.getElementById("showMoreBtn");
let showLessBtn = document.getElementById("showLessBtn");
let extraGallery = document.getElementById("extra-gallery");

//WHEN CLICKS ON SEE MORE
showMoreBtn.addEventListener("click", function() {
  extraGallery.classList.remove("d-none"); // SHOW THE CARDS
  showMoreBtn.classList.add("d-none");     //HIDE THE SEE MORE BTN
  showLessBtn.classList.remove("d-none");  // SHOW THE SEE LESSBTN
});

// WHEN CLICKS ON SEE LESS
showLessBtn.addEventListener("click", function() {
  extraGallery.classList.add("d-none");    // HIDE THE EXTRAS CARDS
  showMoreBtn.classList.remove("d-none");  //DISPLAY SEE MORE BTN
  showLessBtn.classList.add("d-none");     // HIDE THE LESS BTN
});

// GET ALL THE CARDS
let cards = document.querySelectorAll(".dessert-card");


// WHEN THE MOUSE IS IN AND OUT
cards.forEach(function(card) {
  card.addEventListener("mouseenter", function() {
    card.classList.add("hovered"); // 
  });

  
  card.addEventListener("mouseleave", function() {
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
cards.forEach(function(card) {
  card.addEventListener("click", function() {
   
    let imgSrc = card.querySelector("img").src;
    let imgTitle = card.querySelector(".card-title").textContent;  // Título da sobremesa
    let imgText = card.querySelector(".card-text").textContent;   // Descrição da sobremesa

  
    lightboxImg.src = imgSrc;
    lightboxTitle.textContent = imgTitle;
    lightboxText.textContent = imgText;

    // DISPLAYS THE LIGHTBOX
    lightbox.classList.remove("d-none");
  });
});

// CLOSES WHEN CLICK  "X"
lightboxClose.addEventListener("click", function() {
  lightbox.classList.add("d-none"); // HIDE THE lightbox
  lightboxImg.src = "";             
  lightboxTitle.textContent = "";   
  lightboxText.textContent = "";    
});

// CLOSE LIGHTBOX WHEN CLICKS OUTSIDE THE IMAGE
lightbox.addEventListener("click", function(event) {
  if (event.target === lightbox) {
    lightbox.classList.add("d-none"); 
    lightboxImg.src = "";             
    lightboxTitle.textContent = "";   
    lightboxText.textContent = "";    
  }
});

var veganButton = document.getElementById("veganButton");

veganButton.addEventListener("click", function () {
  window.location.href = "vegan.html";
});
