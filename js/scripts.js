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

myPizza.calculatePizzaSizeCost();
myPizza.calculatePizzaToppingsCost();
myPizza.calculateTotalPizzaCost();
console.log("$", myPizza.baseCost)
console.log("$", myPizza.pizzaToppingsCost);
console.log("$", myPizza.totalPizzaCost);



// User Interface Logic ---------
function handleFormSubmission(event) {
  event.preventDefault();

  const pizzaSizeSelect = document.getElementById("pizza-size");
  const pizzaToppingsSelect = document.getElementById("pizza-toppings");

  const selectedPizzaSize = pizzaSizeSelect.value;
  const selectedPizzaToppings = Array.from(pizzaToppingsSelect.selectedOptions).map(option => option.value);


  let myPizza = new Pizza(selectedPizzaSize, selectedPizzaToppings);

  myPizza.calculatePizzaSizeCost();
  myPizza.calculatePizzaToppingsCost();
  myPizza.calculateTotalPizzaCost();

  const totalCostDisplay = document.getElementById("total-cost");
  totalCostDisplay.textContent = `$${myPizza.totalPizzaCost}`;
}

const form = document.getElementById("pizza-form");
form.addEventListener("submit", handleFormSubmission);