console.log("congrats, you have activated the JS file.");

// function advancePage() {
//   window.location.href = "./order.html";
// }

window.onload = function(){
    var element = document.getElementById("form");
    console.log(element);
    if(element.addEventListener){
        element.addEventListener("submit", validate, true);
    }

    function validate(e){
        console.log("e", e);
        e.preventDefault();
        console.log("name", e.target[0].value);
        checkName(e.target[0].value);

    }
    function checkName(name){
        var regex = new RegExp(/^[a-zA-Z0-9_.-]*$[a-zA-Z_.-]*$/g);
        console.log(regex.test(name));
    }
}