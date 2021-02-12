console.log("congrats, you have activated the JS file.");

function advancePage() {
  window.location.href = "./order.html";
}

var element = document.getElementById("form");
if (element.addEventListener) {
  element.addEventListener("submit", validate.true);
}

function validate(e) {
  console.log(e);
  e.preventDefault();
  console.log("name", e.target[0].value);
}
