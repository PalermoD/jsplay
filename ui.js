var printNumber = function(number){
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function(){
	var result = dice1.roll();
	printNumber(result);
}