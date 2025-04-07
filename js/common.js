// menu item highlight
if (location.pathname.endsWith("index.html")) {
  document.getElementById("link-homepage").className = "active";
}
if (location.pathname.endsWith("vegan.html")) {
  document.getElementById("link-vegan").className = "active";
}
if (location.pathname.endsWith("about.html")) {
  document.getElementById("link-about").className = "active";
}
if (location.pathname.endsWith("contact.html")) {
  document.getElementById("link-contact").className = "active";
}
if (location.pathname.endsWith("faq.html")) {
  document.getElementById("link-faq").className = "active";
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
