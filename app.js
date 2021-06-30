console.log('------------- # 4');

function plus(num1, num2){
	console.log('Plus: ', num1 + num2);
}

function minus(num1, num2){
	console.log('Minus: ', num1 - num2);
}

function multiply(num1, num2){
	console.log('Multiply: ', num1 * num2);
}

function divide (num1, num2){
	console.log('Divide', num1 / num2);
}

plus(9, 6);
minus(17, 6);
multiply(3, 6);
divide(33, 3);


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
	console.log(result);
}

pow(5, 4);

console.log('------------- # 8');

function isBigger(num1, num2){
	if(num1 > num2){
		console.log(true);
	}else{
		console.log(false);
	}
}

isBigger(13, 5);
isBigger(6, 45);


console.log('------------- # 9');

function isSmaller(num1, num2){
	if(num1 < num2){
		console.log(true);
	}else{
		console.log(false);
	}
}

isSmaller(34, 45);
isSmaller(22, 12);







