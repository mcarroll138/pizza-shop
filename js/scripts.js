// Business Logic
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.pizzaSize

const myPizzaLarge = new Pizza("large", ["vegan cheese", "vegan pepperoni"]);
const myPizzaMed = new Pizza("medium", ["vegan cheese", "vegan pepperoni"]);

// UI Logic