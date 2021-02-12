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
function getRadioValue(form, name){
  var val;
  var radios = form.elements[name];   
    
    for (var i=0, length=radios.length; i<length; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].id; 
            break; 
        }
    }
    return val;
}
function order(){
  console.log("button working");
  pizzaOrder.size = document.getElementById("sizeSelect").value;
  pizzaOrder.sauce = getRadioValue(document.getElementById("orderForm"), "sauce");
  buildOutput(pizzaOrder);
  console.log(pizzaOrder);
}
function buildOutput(pizza){
    document.getElementById("orderComplete").classList.remove("invisible");
    document.getElementById("orderComplete").classList.add("visible");
    var node = document.getElementById("pizzaOrdered");
    var toppingString = pizza.toppings.reduce(function(pre, next){
      return pre + ', and ' + next;
    })
    console.log("toppingstring", toppingString);
    var completeString = "You ordered a " + pizza.size + " pizza with " + pizza.sauce + " and the following toppings " + toppingString +".";
    console.log("completeSTring", completeString);
}