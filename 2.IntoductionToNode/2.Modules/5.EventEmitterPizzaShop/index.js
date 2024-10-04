const PizzaShop = require("./5.1EventEmitterPizzaShop");

const pizzaShop = new PizzaShop();

pizzaShop.on("neworder", (orderNumber, size, toppings) => {
	console.log("order received", orderNumber, size, toppings);

	// message user
	// message supervisor
	// message MCdonalds headquaters
	// message amith
	// message India supervisor
});

// SOME USER  has orderd the pizza.
pizzaShop.order("medium", 10);
