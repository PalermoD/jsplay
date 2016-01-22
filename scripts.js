// example of a javascript object literal 
//  Good for saving the state of an object
// like if that object does not change 
var person = {
	firstName: "Palermo",
	lastName: "Deschamps",
	developer: true
}

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
	var randomNumber = Math.floor( Math.random() * dice.sides) + 1;
	console.log(randomNumber);
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

