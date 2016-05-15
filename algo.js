// testing algorithms in javascript

var isPrime = function(num){
	var divisor = 2;

	while( num > divisor ){
		if ( num % divisor === 0 ){
			return false;
		} else {
           divisor++; 
		}
	}
	return true; 
}; 


var primeFactors = function(num){
	var factors = [];
	var divisor = 2;

	while( num > 2){
		if( num % divisor == 0 ){
			factors.push(divisor);
			num = num / divisor;
		} else {
			divisor++;
		}

	}

	return factors;
}

var primes100 = primeFactors(100);
console.log(primes100);