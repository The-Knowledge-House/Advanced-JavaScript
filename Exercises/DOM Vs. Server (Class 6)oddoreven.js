var someNums = [1, 12, 15, 18, 20, 23, 26, 10, 33, 134];
var num;
var oddOrEven;


var isEven = function(number){
	if (number%2 == 0){
		return true; 
	} else {
		return false;
	}; 
}

for (var i = 0, len = someNums.length; i<len; i++){
	num =  someNums[i];
	if (isEven(num) == true){
		oddOrEven = "Even"; 
	} else{
		oddOrEven = "Odd";
	};
	console.log( num + ' is ' + oddOrEven);
}
