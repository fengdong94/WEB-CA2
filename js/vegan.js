function changeRecipe() {
    const selected = document.getElementById("recipeSelect").value;
    const recipes = document.querySelectorAll(".recipe");

    recipes.forEach(recipe => {
      recipe.style.display = recipe.id === selected ? "block" : "none";

      // Reset tabs inside hidden recipes
      const tabs = recipe.querySelectorAll(".tab");
      const contents = recipe.querySelectorAll(".tab-content");
      tabs.forEach(tab => tab.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));
    });

    // Reset visible recipe's first tab
    const activeRecipe = document.getElementById(selected);
    activeRecipe.querySelector(".tab").classList.add("active");
    activeRecipe.querySelector(".tab-content").classList.add("active");
  }

  function showTab(contentId, button) {
    const parent = button.closest(".recipe");
    const tabs = parent.querySelectorAll(".tab");
    const contents = parent.querySelectorAll(".tab-content");

    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(contentId).classList.add("active");
  }