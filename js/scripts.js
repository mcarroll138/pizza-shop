// Business Logic
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.baseCost = 0;
  this.pizzaToppingsCost = 0;
  this.totalPizzaCost = 0;
}
Pizza.prototype.calculatePizzaSizeCost = function () {
  if (this.pizzaSize === "Small") {
    this.baseCost = 10;
  } else if (this.pizzaSize === "Medium") {
    this.baseCost = 15;
  } else if (this.pizzaSize === "Large") {
    this.baseCost = 20;
  } else if (this.pizzaSize === "Extra Large") {
    this.baseCost = 25;
  } else {
    return "Please indicate a pizza size for your order"
  }
}

Pizza.prototype.calculatePizzaToppingsCost = function () {
  this.pizzaToppingsCost = this.pizzaToppings.length * 2;
}

Pizza.prototype.calculateTotalPizzaCost = function () {
  this.totalPizzaCost = this.baseCost += this.pizzaToppingsCost;
  return this.totalPizzaCost
}

const pizzaSizes = ["Small", "Medium", "Large", "Extra Large"];
const pizzaToppings = ["Vegan Cheese", "Vegan Pepperoni", "Onions", "Mushrooms", "Tomatoes", "Jalapinos", "Basil"];

let myPizza = new Pizza(pizzaSizes[2], [pizzaToppings[0], pizzaToppings[1], pizzaToppings[3]]);


myPizza.calculatePizzaSizeCost();
myPizza.calculatePizzaToppingsCost();
myPizza.calculateTotalPizzaCost();
console.log("$", myPizza.baseCost)
console.log("$", myPizza.pizzaToppingsCost);
console.log("$", myPizza.totalPizzaCost);

// UI Logic