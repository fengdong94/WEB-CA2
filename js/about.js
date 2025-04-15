//this is the contact button
// When you click the Contact button
var contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {
  //its going to redirect to the contact page
  window.location.href = "contact.html";
});

// this is our favorite section with images that swap places
// Get each cake by its ID
var cake1 = document.getElementById("cake1");
var cake2 = document.getElementById("cake2");
var cake3 = document.getElementById("cake3");

// Set initial positions (order) of each cake
cake1.style.order = "1";
cake2.style.order = "2"; // center
cake3.style.order = "3";

// This function will switch the clicked cake with the center one
function switchCake(clickedCake) {
  var centerCake;

  // Check which cake is currently in the center
  if (cake1.style.order === "2") {
    centerCake = cake1;
  } else if (cake2.style.order === "2") {
    centerCake = cake2;
  } else {
    centerCake = cake3;
  }

  // If the clicked cake is already the center,nothing happens
  if (clickedCake === centerCake) {
    return;
  }

  // Save the current position of the clicked cake
  var clickedOrder = clickedCake.style.order;

  // Swap the clicked cake with the center cake
  clickedCake.style.order = "2";
  centerCake.style.order = clickedOrder;

  // Remove the 'select' class from all cakes
  cake1.classList.remove("select");
  cake2.classList.remove("select");
  cake3.classList.remove("select");

  // Add the 'select' class to the new center cake
  clickedCake.classList.add("select");
}

// Add click event listeners to each cake
cake1.addEventListener("click", function () {
  switchCake(cake1);
});

cake2.addEventListener("click", function () {
  switchCake(cake2);
});

cake3.addEventListener("click", function () {
  switchCake(cake3);
});

//this is the seeMore button
//when you click it, it opens the MenuPage
var viewMoreButton = document.getElementById("viewMoreButton");

viewMoreButton.addEventListener("click", function () {
  window.location.href = "menu.html";
});
