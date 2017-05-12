var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While Loop")
var index = 0;
while (index < ingredients.length) {
	console.log(ingredients[index]);
	index++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nFor Loop")
for (var i = 0; i < ingredients.length; i++) {
	console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nBackwards While Loop")
var index = ingredients.length-1;
while (index >= 0) {
	console.log(ingredients[index]);
	index--;
}

console.log("\nBackwards For Loop")
for (var i=ingredients.length-1; i>=0; i--) {
	console.log(ingredients[i]);
}
