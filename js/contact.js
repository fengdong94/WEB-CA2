const contactForm = document.getElementById("contact-form");
const nameField = document.getElementById("Name");
const phoneField = document.getElementById("Phone");

// javascript validation
contactForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    event.stopPropagation();

    // validate name
    var alphaExp = /^[a-zA-Z]+$/;
    if (!nameField.value.match(alphaExp)) {
      alert("Please input only alphabets in name filed");
      nameField.focus();
      return;
    }
    // validate phone
    var numericExpression = /^[0-9]+$/;
    if (!phoneField.value.match(numericExpression)) {
      alert("Please input only numbers in phone filed");
      phoneField.focus();
      return;
    }
    // validate preference
    if (phoneField.value.length < 7 || phoneField.value.length > 11) {
      alert("Please input your phone between 7 and 11 characters");
      phoneField.focus();
      return;
    }

    alert("Form submitted successfully!");
  },
  false
);

function showTermsDetail() {
  alert(1111);
}
