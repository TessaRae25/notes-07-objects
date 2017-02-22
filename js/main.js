/* Object are essential to programming of OOP (Object Oriented Programming). Objects allow to exapsulate data inside of a container (the object) so that we can reuse, modify or act upon them. An object is a concept of something, and whatever properties that cancept may have. */

/* Below, we have an object called myHouse. This object, has a variety of properties (which are variables that are declared in an object). This object is also using a special object creation method called the 'Literal method' */
var myHouse = {
	number: 1882,
	garage: true,
	bedrooms: 4,
	bathroom: 2,
	extras: ['air condition', 'patio', 'corner lot']
}; /* Unlike functions, you can close an object declaration with a semicolon at the end. */
document.getElementById('myHouseObject'). textContent = myHouse.bedrooms + ' Bedrooms, ' + myHouse.number + ' House Number';

/* There are other ways to create Javascript objects. Each of these ways is called an object creation patterm, and each has a 'best use' scenario. */

/* Object Literal Pattern- Similar to the literal method above. It's useful for creating a single object and is the easiest way to make an object. */
var person = new Object();

person.name = 'Caroline Mason', 
person.birthyear = 1954,
person.getAge = function() {
	var age = 2017 - this.birthyear;
	return age;
};
document.getElementById('personObject'). textContent = person.name + '\'s age is ' + person.getAge();

/* Literal Pattern - Creates a single object without keywords and uses colors instead of referencing the object name. */
 var car = {
 	brand: 'Lexus',
 	model: 'RX',
 	year: 2011,
 	getAge: function(current) {
 		var carAge = current - this.year;
  		return carAge;
 	}
 }

document.getElementById('carObject'). textContent = 'Car\'s age: ' + car.getAge(2017) + 'brand: ' + car.brand + 'model: ' + car.model;


/* Object Constructor Pattern - Where the patterns above create one object at a time, the constructor patterns can create multiple objects. */
function family(name, surname, age, job) {
	this.theirName = name;
	this.theirLast = surname;
	this.theirAge = age;
	this.theirJob = job;
	this.familyMember = function() {
		document.getElementById('familyObject'). textContent = 'Family Member: ' + name + ' ' + surname + ', ' + age + ', ' + job;


	}
}

	var father = new family('Michael', 'Hayden', 48, 'Accountant');
	var mother = new family('Sally,', 'Hayden', 46, 'Nurse');
	var son = new family('Jake', 'Hayden', 19, 'Cashier');
	var daughter = new family('Elise', 'Hayden', 12, 'student');

	daughter.familyMember();

	document.getElementById('familyObject2').textContent = son.theirName + ', ' + father.theirName;

	/* Factory Pattern - Very well known and used often in software engineering. This pattern is similar to the constructor pattern above, but it does not use the 'this' keyword. */
	function createRecipe(name, serving, course) {
		var recipe = new Object();
		recipe.name = name;
		recipe.serving = serving;
		recipe.course = course;
		recipe.list = function() {
			document.getElementById('recipeObject'). textContent + 'This is a recipe for ' + recipe.name;
		}
		return recipe;
	}

	var cakeRecipe = createRecipe('Chocolate Cake', 12, 'Dessert');
	var loafRecipe = createRecipe('Meat Loaf', 6, 'Dinner');

	cakeRecipe.list();

	/* The Prototype Pattern - while constructor and factory patterns are useful, you may be creating direct copies of variables while using these patterns. This causes a lot of waste because you may not need copies of entire variables to accomplish your task. */
	function theBakery() {
		theBakery.prototype.name = 'Joey\'s Baked Goods';
		theBakery.prototype.address = '34 Walnut Lane';
		theBakery.prototype.best = 'Red Velvet Cupcakes';
		theBakery.prototype.announce = function() {
			document.getElementById('bakeryObject'). textContent = 'Our best selling item ' + this.best;
		}
	}
/* Create a new bakery1 object and invoke the above method. */
var bakery1 = new theBakery();
bakery1.announce();

/* Create another new bakery2 object and replace some of its values. */
var bakery2 = new theBakery();
bakery2.name = 'Sweet Breads';
bakery2.best = 'Coconut Cream Pie';



