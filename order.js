console.log("heyo this works now too, if only we could reach this page.");

function advancePage() {
  window.location.href = "./thank_you.html";
}
var pizzaOrder = {
  size: "",
  sauce: "",
  toppings: [],
};

function updateToppings() {
  var sbox = Array.from(document.getElementsByName("topping"));
  pizzaOrder.toppings = []; // empty the array before rebuilding it
  sbox.forEach(function (v) {
    if (v.checked) {
      pizzaOrder.toppings.push(v.value);
    }
  });
  // console output for demo
  console.log(pizzaOrder.toppings); // array
}
function order(){
  console.log("button working");
  pizzaOrder.size = document.getElementById("sizeSelect").value;
  pizzaOrder.sauce = getRadioVal(document.getElementById("orderForm"), "sauce");
  console.log(pizzaOrder);
}
function getRadioVal(form, name){
  var val;
  var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].id; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val;
}