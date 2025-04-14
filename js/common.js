// @author Dong

// menu item highlight
if (location.pathname.endsWith("index.html")) {
  document.getElementById("link-homepage").className = "active";
}
if (location.pathname.endsWith("vegan.html")) {
  document.getElementById("link-vegan").className = "active";
}
if (location.pathname.endsWith("menu.html")) {
  document.getElementById("link-menu").className = "active";
}
if (location.pathname.endsWith("about.html")) {
  document.getElementById("link-about").className = "active";
}
if (location.pathname.endsWith("recipe.html")) {
  document.getElementById("link-recipe").className = "active";
}
if (location.pathname.endsWith("contact.html")) {
  document.getElementById("link-contact").className = "active";
}

// minigame
const minigamePopup = document.getElementById("minigame-popup");
function showMinigame() {
  minigamePopup.style.visibility = "visible";
}
function closeMinigame() {
  minigamePopup.style.visibility = "hidden";
}
function guessCake(cakeNum) {
  const answerNum = Math.floor(Math.random() * 3);
  if (cakeNum === answerNum) {
    alert(
      "🍰 Congratulations! You found the cake! Please contact us with the discount code: CAKEZILLA-XYZ-ABC"
    );
  } else {
    alert("😢 No cake here. Try again!");
  }
}
