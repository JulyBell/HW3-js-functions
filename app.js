console.log('------------- # 4');

function plus(num1, num2){
	return num1 + num2;
}

function minus(num1, num2){
	return num1 - num2;
}

function multiply(num1, num2){
	return num1 * num2;
}

function divide (num1, num2){
	return num1 / num2;
}

console.log(plus(9, 6));
console.log(minus(17, 6));
console.log (multiply(3, 6));
console.log(divide(33, 3));


console.log('------------- # 5');

function numRange(n){
	for(let i = 1; i <= n; i++){
		console.log(i);
	}
}

numRange(5);

console.log('------------- # 6');

function backRange(n){
	for(let i = n; i >= 1; i--){
		console.log(i);
	}
}

backRange(5);

console.log('------------- # 7');

function pow(x, n){
	let result = Math.pow(x, n);
	return result;
}

console.log(pow(5, 4));

console.log('------------- # 8');

function isBigger(num1, num2){
	let comp = (num1 > num2) ? true : false;
	return comp;

	}


console.log(isBigger(13, 5));
console.log(isBigger(6, 45));


console.log('------------- # 9');

function isSmaller(num1, num2){
	let comp = (num1 < num2) ? true : false
	return comp;
}

console.log(isSmaller(34, 45));
console.log(isSmaller(22, 12));







