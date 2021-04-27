function Order(price, crust, toppings) {
  this.price = price;
  this.crust = crust;
  this.toppings = toppings
}
Order.prototype.oderCost = function () {
  return this.price + this.crust + this.toppings
}

$(document).ready(function () {
  $('#btn0').click(function (event) {
   let inputPriceCost = parseInt(550);
   let inputCrust = $('#value0').val();
   if (inputCrust == "New York Pizza Crust") {
    var inputCrustCost = parseInt(150);
} else if (inputCrust == "Traditional pan Pizza") {
    var inputCrustCost = parseInt(220);
} else if (inputCrust == "Deep dish Pizaa") {
    var inputCrustCost = parseInt(100);
} else {
    var inputCrustCost = parseInt(0);
}

let inputTopping = $('#toppingsSmall').val();

        if (inputTopping == "Beef toppings") {
            var inputToppingCost = parseInt(100);
        } else if (inputTopping == "Chiken toppings") {
            var inputToppingCost = parseInt(200);
        } else if (inputTopping == "pineapple toppings") {
            var inputToppingCost = parseInt(120);
        } else {
            var inputToppingCost = parseInt(0);
        }

let newOrder = new Order (inputPriceCost, inputCrustCost, inputToppingCost);
$("ul#order").append("<li><span class='contact'>" + newOrder.oderCost() + "</span></li>");
  });
});