// example of a javascript object literal 
// Good for saving the state of an object
// like if that object does not change 
var person = {
	firstName: "Palermo",
	lastName: "Deschamps",
	developer: true
};


console.log(person.firstName);


//dice roll function that produces random number from 1 - 6  
function diceRoll(){
	var sides = 6;
	var randomNumber = Math.floor( Math.random() * sides) + 1;
	console.log(randomNumber);
}


// object literal of the dice with a roll property 

var dice = {
	sides : 6,
	roll : function(){
	  var randomNumber = Math.floor( Math.random() * this.sides) + 1;
	  return randomNumber;
    }
}

console.log(dice.roll());


// example constuctor function 
function Contact( name, email ){
	this.name = name;
	this.email = email;
}

// Creating a new instance of contact constuctor function 
// good for creating multiple instances of similar objects like new contacts with diffrent values 
var palermo = new Contact("Palermo", "palermo.deschamps@gmail.com");

console.log(palermo);

// Turning dice object into a constuctor function 

function Dice(sides){
	this.sides = sides;
}




var randomNumber = function(num){
	var random = Math.floor( Math.random() * num) + 1;
	return random;
};

var counter = 0;

while ( counter < 100 ) {
	document.write(randomNumber(20) + "</br>");
	counter += 1;
}

// adding a prototype shared function for the roll method 
Dice.prototype.roll = function(){
	var randomNumber = Math.floor( Math.random() * this.sides) + 1;
	return randomNumber;
}


var dice1 = new Dice(6);

var getYear = function(){
	var year = new Date().getFullYear();
	return year;
};

var myarr = [1,2,3,4];
var newarr = [];
for ( var i = 0; i < myarr.length; i += 1){
       newarr.push(myarr[i] + 2);
       console.log(newarr);
}

