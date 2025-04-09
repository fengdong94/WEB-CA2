// @author Dong

function showIngredients(index) {
  $("#ingredients" + index).css("display", "block");
  $("#nutrition" + index).css("display", "none");
  $("#ingredientsTab" + index).addClass("active");
  $("#nutritionTab" + index).removeClass("active");
}

function showNutrition(index) {
  $("#nutrition" + index).css("display", "block");
  $("#ingredients" + index).css("display", "none");
  $("#nutritionTab" + index).addClass("active");
  $("#ingredientsTab" + index).removeClass("active");
}
