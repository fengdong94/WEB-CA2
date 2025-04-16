//------- @author Carolina
// Reviews shown in the carousel (one-by-one)
const reviews = [
  "It tasted just like my grandma’s baking... maybe even better (sorry, Abuela😅). The apple pie was warm, flaky, and pure magic. I’ll be back for the macarons next! -Jessica Q.",
  "I ordered a custom vegan chocolate cake for my girlfriend’s birthday. She cried. I cried. It was that good. CakeZilla doesn’t just bake, they create memories. -Niall H.",
  "Everything was sooooo cute and delicious! The doughnuts were soft, colorful, and perfect with my matcha latte. I didn’t want to eat them... but I did. And I’m glad I did. -James B.",
  "The staff is lovely, the flavors are insane, and every bite feels like a hug. The pecan pie reminded me of holidays with my Nana. Thank you for the sweetness, CakeZilla! -Michael C.",
  "I ordered the apple pie for an office party, and it was the star of the show!! After experiencing the deliciousness nobody asked for a raise, it saved the business!🤑 So much money I can now afford my yacht payments🚢⚓. Thank you for the staff and capitalism💸📈 - Alejandro de la Cruz",
];

let currentIndex = 0;

function showReview() {
  const reviewBox = document.getElementById("review-display");
  reviewBox.textContent = reviews[currentIndex];
}

function nextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview();
}

function previousReview() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview();
}


//
// showReview();

function showResult() {
  const question1 = document.getElementById("question1").value;
  const question2 = document.getElementById("question2").value;
  const question3 = document.getElementById("question3").value;
  const result = document.getElementById("quizResult");

  if (!question1 || !question2 || !question3) {
    result.textContent = "Please answer all questions.";
    return;
  }
  let cakeType = " ";

  if (
    question1 === "adventurous" &&
    question2 === "adventures" &&
    question3 === "strawberry"
  ) {
    cakeType = "Strawberry Ice Cream Cake 🍓. ";
  } else if (
    question1 === "creative" &&
    question2 === "dancing" &&
    question3 === "lemon"
  ) {
    cakeType = "PassionFruit Cake✨";
  } else if (
    question1 === "funny" &&
    question2 === "baking" &&
    question3 === "chocolate"
  ) {
    cakeType = "Naked Cake";
  } else if (
    question1 === "thoughtful" &&
    question2 === "reading" &&
    question3 === "vanilla"
  ) {
    cakeType = "Brazilian Manjar🍮";
  } else if (
    question1 === "adventurous" &&
    question2 === "dancing" &&
    question3 === "chocolate"
  ) {
    cakeType = "Brownies";
  } else if (
    question1 === "creative" &&
    question2 === "reading" &&
    question3 === "strawberry"
  ) {
    cakeType = "Classic Cheesecake";
  } else if (
    question1 === "funny" &&
    question2 === "adventures" &&
    question3 === "lemon"
  ) {
    cakeType = "Brazilian Manjar";
  } else if (
    question1 === "thoughtful" &&
    question2 === "baking" &&
    question3 === "vanilla"
  ) {
    cakeType = "Cupcake🧁";
  } else if (
    question1 === "creative" &&
    question2 === "baking" &&
    question3 === "chocolate"
  ) {
    cakeType = "Orange Cake🍊";
  } else if (
    question1 === "adventurous" &&
    question2 === "baking" &&
    question3 === "chocolate"
  ) {
    cakeType = "Harry Potter's Birthday Cake 🎂🧙";
  } else if (
    question1 === "funny" &&
    question2 === "baking" &&
    question3 === "strawberry"
  ) {
    cakeType = "Red Velvet Cake";
  } else if (
    question1 === "thoughtful" &&
    question2 === "dancing" &&
    question3 === "vanilla"
  ) {
    cakeType = "Almond Cake";
  } else if (
    question1 === "creative" &&
    question2 === "adventures" &&
    question3 === "strawberry"
  ) {
    cakeType = "Piñata Cake🪅";
  } else {
    cakeType = "Doughnut🍩";
  }
  result.textContent = "Your cake type is a: " + cakeType;
}
