Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizzaLarge = new Pizza ("large",["vegan cheese", "vegan pepperoni"]);
Expected Output: Pizza { pizzaSize: "large" pizzaToppings: ["vegan cheese" , vegan pepperoni"]}

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizzaMed = new Pizza ("medium",["vegan cheese", "vegan pepperoni"]);
Expected Output: Pizza { pizzaSize: "medium" pizzaToppings: ["vegan cheese" , vegan pepperoni"]}

Test: "It should create a variable array for pizza sizes."
Code: const pizzaSizes = ["Small", "Medium", "Large"]
Expected Output: pizzaSizes = ["Small", "Medium", "Large"]

Test: "It should create a variable array for pizza toppings."
Code: const pizzaToppings = ["Vegan Cheese","Vegan Pepperoni","Onions","Mushrooms","Tomatoes","Jalapinos","Basil"];
Expected Output: pizzaToppings = ["Vegan Cheese","Vegan Pepperoni","Onions","Mushrooms","Tomatoes","Jalapinos","Basil"];

Test: "It should create a new pizza with size and a topping"
Code: let myPizza = new Pizza(pizzaSizes[2],pizzaToppings[2];
Expected Output = myPizza [Large, Onions]

Test: "It should create a single one size pizza with mulitiple toppings"
Code: function Pizza(pizzaSize, pizzaToppings) {
let myPizza = new Pizza(pizzaSizes[2], pizzaToppings.slice(2, 4));
Expected Output = myPizza ["large", "Onions", "Mushrooms"]

