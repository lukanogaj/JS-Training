// Checking odds number
const isEven = (number) => {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
};

/// Shorter
const isEven1 = (number) => {
	return number % 2 === 0;
};

//Mid level
const isEven2 = (number) => number % 2 === 0;

console.log(isEven(2), isEven1(7), isEven2(10));

// Function to sum numbers
const sum = (a, b) => a + b;

console.log(sum(4, 5));

//Function to return max nuber
const maxNumber = (a, b) => {
	if (a > b) {
		return a;
	} else if (b > a) {
		return b;
	}
	return a; // With two numbers even
};

console.log(maxNumber(4, 8));

//Shorter versions
const maxNumber1 = (a, b) => {
	if (a > b) return a;
	return b;
};

const maxNumber2 = (a, b) => (a > b ? a : b);

// Function to check adult age
const isAdult = (age) => (age >= 18 ? true : false);
console.log(isAdult(17));

// Shorter
const isAdult1 = (age) => age >= 18;

// Function to check if string is empty
const isEmptyString = (string) => (string === "" ? true : false);

console.log(isEmptyString("hello"));

// Shorter
const isEmptyString1 = (string) => string === "";
