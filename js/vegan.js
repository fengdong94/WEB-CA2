//-- @author Carolina --//
// gallery
let image = document.querySelectorAll(".gallery-image");

image.forEach(function (image) {
  image.addEventListener("mouseenter", function () {
    image.classList.add("hovered");
  });

  image.addEventListener("mouseleave", function () {
    image.classList.remove("hovered");
  });
});
// Easy recipes
function changeRecipe() {
  const selected = document.getElementById("recipeSelect").value;
  const recipes = document.querySelectorAll(".recipe");
  const recipeImg = document.querySelectorAll(".recipe-img");

  recipes.forEach((recipe) => {
    console.log(recipe.style.display, recipe.id, selected);
    recipe.style.display = recipe.id === selected ? "block" : "none";

    // recipe.style.display = "block";

    // Reset tabs inside hidden recipes
    const tabs = recipe.querySelectorAll(".tab");
    const contents = recipe.querySelectorAll(".tab-content");
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));
  });
  // Change recipe image
  recipeImg.forEach((recipe) => {
    console.log(recipe.style.display, recipe.id, selected);
    recipe.style.display = recipe.id === selected + "Img" ? "block" : "none";
  });

  // Reset visible recipe's first tab
  const activeRecipe = document.getElementById(selected);
  activeRecipe.querySelector(".tabs").classList.add("active");
  activeRecipe.querySelector(".tab-content").classList.add("active");
}
// Show and hide tabs based on recipe selected
function showAndHideTab(tabId, hiddenTabId) {
  const tab = document.getElementById(tabId);
  const hiddenTab = document.getElementById(hiddenTabId);
  tab.style.display = "block";
  hiddenTab.style.display = "none";
}

function showTab(contentId, button) {
  const parent = button.closest(".recipe");
  const tabs = parent.querySelectorAll(".tab-button");
  const contents = parent.querySelectorAll(".tab-content");

  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  button.classList.add("active");
  document.getElementById(contentId).classList.add("active");
}
