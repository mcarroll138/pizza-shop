// Business Logic
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}

const pizzaSizes = ["Small", "Medium", "Large"];
const pizzaToppings = ["Vegan Cheese", "Vegan Pepperoni", "Onions", "Mushrooms", "Tomatoes", "Jalapinos", "Basil"];

let myPizza = new Pizza(pizzaSizes[2], pizzaToppings.slice(2, 4));



/*
const myPizzaLarge = new Pizza(1 , ["vegan cheese", "vegan pepperoni"]);
const myPizzaMed = new Pizza("medium", ["vegan cheese", "vegan pepperoni"]);

// UI Logic