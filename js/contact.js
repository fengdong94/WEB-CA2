// @author Dong

const contactForm = document.getElementById("contact-form");
const nameField = document.getElementById("Name");
const phoneField = document.getElementById("Phone");
const termsPopup = document.getElementById("terms-popup");

// javascript validation
contactForm.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    event.stopPropagation();

    // validate name
    const alphaExp = /^[a-zA-Z]+$/;
    if (!nameField.value.match(alphaExp)) {
      alert("Please input only alphabets in name filed");
      nameField.focus();
      return;
    }
    // validate phone
    const numericExpression = /^[0-9]+$/;
    if (!phoneField.value.match(numericExpression)) {
      alert("Please input only numbers in phone filed");
      phoneField.focus();
      return;
    }
    if (phoneField.value.length < 7 || phoneField.value.length > 11) {
      alert("Please input your phone between 7 and 11 characters");
      phoneField.focus();
      return;
    }

    alert("Form submitted successfully!");
  },
  false
);

// manipulate the termsPopup
function showTermsDetail() {
  termsPopup.style.visibility = "visible";
}
function closeTermsDetail() {
  termsPopup.style.visibility = "hidden";
}

const FAQData = [
  {
    type: "ordering",
    question: "How do I place an order?",
    answer:
      "You can order by contacting us by email, phone, or visit us in-store.",
  },
  {
    type: "ordering",
    question: "Do I need to pay in advance?",
    answer:
      "Not always, many items are available daily, but pre-ordering is best for large quantities.",
  },
  {
    type: "ordering",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, Revolut, PayPal, and mobile payments.",
  },
  {
    type: "ordering",
    question: "Can I cancel my order?",
    answer: "Yes, if you cancel at least 24 hours before pickup.",
  },
  {
    type: "ordering",
    question: "Do you have any discounts or loyalty programs?",
    answer:
      "Yes, try the minigame in our website's header to get a discount, we also offer rewards points and seasonal promotions for members.",
  },
  {
    type: "products",
    question: "What kind of baked goods do you sell?",
    answer:
      "We offer bread, pastries, muffins, cookies, croissants, cakes and more.",
  },
  {
    type: "products",
    question: "re your products baked fresh daily?",
    answer: "Yes, all our items are freshly baked every morning.",
  },
  {
    type: "products",
    question: "Do you use organic ingredients?",
    answer: "Some of our ingredients are organic, especially flour and eggs.",
  },
  {
    type: "products",
    question: "Do your products contain nuts or dairy?",
    answer: "Some items do. Please let us know if you have allergies.",
  },
  {
    type: "products",
    question: "Do you offer seasonal or holiday specials?",
    answer:
      "Absolutely! We feature themed items for holidays and special occasions.",
  },
  {
    type: "products",
    question: "Do you have vegan options?",
    answer:
      "Yes, we offer vegan cakes, please check our vegan page to get more detail.",
  },
  {
    type: "store",
    question: "Where are you located?",
    answer:
      "We have three branches in dublin, pleace check contact page to get more detail.",
  },
  {
    type: "store",
    question: "Do you have seating inside the bakery?",
    answer: "Yes, we have a small café area for dine-in.",
  },
  {
    type: "store",
    question: "Do you serve drinks?",
    answer: "Yes, we offer coffee, tea, and fresh juices.",
  },
  {
    type: "store",
    question: "Do you sell items other than baked goods?",
    answer: "Yes, we also sell jams, spreads, baking kits, and gift boxes.",
  },
  {
    type: "delivery",
    question: "Do you offer home delivery?",
    answer: "Yes, we deliver to homes, offices, and party venues.",
  },
  {
    type: "delivery",
    question: "Can I order off-site and pick up in store?",
    answer: "Yes, you can choose pickup at checkout.",
  },
  {
    type: "delivery",
    question: "How do I know my order is ready for pickup?",
    answer: "We’ll send you a message or email when it’s ready.",
  },
  {
    type: "delivery",
    question: "Can someone else pick up my order?",
    answer: "Yes, just let us know the name of the person in advance.",
  },
  {
    type: "delivery",
    question: "Is contactless delivery available?",
    answer: "Yes, just mention it when placing your order.",
  },
];

const questions = this.document.getElementById("questions");

// default render ordering FAQ items to page when page loaded
window.addEventListener("load", function () {
  FAQData.filter(function (FAQItem) {
    return FAQItem.type === "ordering";
  }).forEach(renderFAQItem);
});

// render FAQ items according to the selected type
function filterFAQ(type) {
  const oldActivedButton = document.getElementsByClassName(
    "tab me-4 active"
  )[0];

  if (type !== oldActivedButton.id) {
    questions.innerHTML = ""; // clear FAQ items
    oldActivedButton.className = "tab me-4"; // remove old button active class

    // add new button active class
    const newActivedButton = document.getElementById(type);
    newActivedButton.classList.add("active");

    // render filtered items
    FAQData.filter(function (FAQItem) {
      return FAQItem.type === type;
    }).forEach(renderFAQItem);
  }
}

function renderFAQItem(FAQItem, index) {
  // accordion-item
  accordionItem = document.createElement("div");
  accordionItem.setAttribute("class", "accordion-item");

  // accordion-header
  accordionHeader = document.createElement("h2");
  accordionHeader.setAttribute("class", "accordion-header");
  accordionButton = document.createElement("accordion-button");
  accordionButton.setAttribute("class", "accordion-button collapsed");
  accordionButton.setAttribute("type", "button");
  accordionButton.setAttribute("data-bs-toggle", "collapse");
  accordionButton.setAttribute("data-bs-target", "#flush-collapse" + index);
  accordionButton.setAttribute("aria-expanded", "false");
  accordionButton.setAttribute("aria-controls", "flush-collapse" + index);
  accordionButton.innerText = FAQItem.question;
  accordionHeader.appendChild(accordionButton);

  // accordion-collapse
  accordionCollapse = document.createElement("div");
  accordionCollapse.setAttribute("class", "accordion-collapse collapse");
  accordionCollapse.setAttribute("id", "flush-collapse" + index);
  accordionCollapse.setAttribute("data-bs-parent", "#questions");
  accordionBody = document.createElement("div");
  accordionBody.setAttribute("class", "accordion-body");
  accordionBody.innerText = FAQItem.answer;
  accordionCollapse.appendChild(accordionBody);

  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionCollapse);
  questions.appendChild(accordionItem);
}
