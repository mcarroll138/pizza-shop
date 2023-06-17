# **Lil' Pizza Shop**

### By Michael Carroll

A website created to demonstrate the use of object constructors, prototype method and branching. The user can order a pizza and add toppings and will recieve the total cost of the pizza based on their choices.

## Technologies used 
- HTML
- CSS
- JavaScript

## Complete setup/installation instructions 
- Clone this repository from github
- Launch index/index.html in text editor program

## Known Bugs

## License
MIT

Copyright (c) 2023 Michael Carroll

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

TDD:
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

Test: "It will create a base cost for different size pizzas"
Code: Pizza.prototype.calculatePizzaSizeCost = function
Expected Output = this.baseCost = 20

Test: "It will calculate toppings cost based on what is ordered"
Code: Pizza.prototype.calculateToppingsCost = function
Expected Output = this.ToppingsCost = 6

Test: "It will calculate total cost of pizza based on size and number of toppings"
Code: myPizza.calculateTotalPizzaCost();
Expected Output = this.totalPizzaCost = $26