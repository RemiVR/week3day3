// Create a variable with your name as a content and print it.
var myName = "Remi"

console.log(myName)
// Create a function, with one argument, to say hello to the name. Use it with your name variable
function greet(){
	console.log("Hello");
}
// Create a loop to show the numbers from 1 to 5.
for (var i = 0; i<6; i++){
	console.log(i);
}
// Create an array with some colors
var colors = ["red", "blue", "green"]
// Iterate the color array and print the colors in different lines.
colors.foreach(function(food){
	console.log(food);
}
// Filter the array to exclude the red color (the array should contain all the previous colors except the red one).
var red = colors.filter(function(color){
	return color !== "red";
});
console.log(red)
// Transform the array to add "!!" at the end of each color. (The result should be something like: "red!!", "blue!!", "green!!"... )

var bright = colors.reduce(function(shout){
	return shout + "!!"
}
console.log(bright)
// Create an object with name, surname and age as a properties and create a function to show the person information as "Luis Rovirosa has 32 years".
var person = {
	name: "Remi",
	surname: "Varnagiris",
	age: 23
}

function details(){
	console.log(person)
}
