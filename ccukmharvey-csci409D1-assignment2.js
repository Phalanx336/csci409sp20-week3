// JavaScript Document

var $num;
for (let $num = 0; $num < 101; $num++) {
	if ($num % 3) {
		console.log("fizz");
	}
	else if ($num % 5) {
		console.log("buzz");
	}
	else if (($num % 5) && ($num % 3))  {
		console.log("fizzbuzz");
	}
	else (!($num % 5) && !($num % 3))  
		console.log("$num");
	
}


