// Business Logic
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.baseCost = 0;
  this.pizzaToppingsCost = 0;
  this.totalPizzaCost = 0;
}
Pizza.prototype.calculatePizzaSizeCost = function () {
  if (this.pizzaSize === "small") {
    this.baseCost = 10;
  } else if (this.pizzaSize === "medium") {
    this.baseCost = 15;
  } else if (this.pizzaSize === "large") {
    this.baseCost = 20;
  } else if (this.pizzaSize === "xlarge") {
    this.baseCost = 25;
  } else {
    return "Please indicate a pizza size for your order";
  }
};

Pizza.prototype.calculatePizzaToppingsCost = function () {
  this.pizzaToppingsCost = this.pizzaToppings.length * 2;
};

Pizza.prototype.calculateTotalPizzaCost = function () {
  this.totalPizzaCost = this.baseCost + this.pizzaToppingsCost;
  return this.totalPizzaCost;
};

const pizzaSizes = ["small", "medium", "large", "xlarge"];
const pizzaToppings = ["Vegan Cheese", "Vegan Pepperoni", "Onions", "Mushrooms", "Tomatoes", "Jalapinos", "Basil"];

let myPizza = new Pizza();

function handleFormSubmission(event) {
  event.preventDefault();
  const selectedSize = document.querySelector('input[name="sizePizza"]:checked');
  const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked'));

  if (selectedSize && selectedToppings.length > 0) {
    const pizzaSize = selectedSize.value;
    const pizzaToppings = selectedToppings.map(topping => topping.value);

    myPizza = new Pizza(pizzaSize, pizzaToppings);
    myPizza.calculatePizzaSizeCost();
    myPizza.calculatePizzaToppingsCost();
    const totalCost = myPizza.calculateTotalPizzaCost();

    document.getElementById("total-cost").textContent = "$" + totalCost;
  } else {
    alert("Please select a pizza size and at least one topping.");
  }
}

// User Interface Logic
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});