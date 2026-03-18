// // Checking odds number
// const isEven = (number) => {
// 	if (number % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// /// Shorter
// const isEven1 = (number) => {
// 	return number % 2 === 0;
// };

// //Mid level
// const isEven2 = (number) => number % 2 === 0;

// console.log(isEven(2), isEven1(7), isEven2(10));

// // Function to sum numbers
// const sum = (a, b) => a + b;

// console.log(sum(4, 5));

// //Function to return max nuber
// const maxNumber = (a, b) => {
// 	if (a > b) {
// 		return a;
// 	} else if (b > a) {
// 		return b;
// 	}
// 	return a; // With two numbers even
// };

// console.log(maxNumber(4, 8));

// //Shorter versions
// const maxNumber1 = (a, b) => {
// 	if (a > b) return a;
// 	return b;
// };

// const maxNumber2 = (a, b) => (a > b ? a : b);

// // Function to check adult age
// const isAdult = (age) => (age >= 18 ? true : false);
// console.log(isAdult(17));

// // Shorter
// const isAdult1 = (age) => age >= 18;

// // Function to check if string is empty
// const isEmptyString = (string) => (string === "" ? true : false);

// console.log(isEmptyString("hello"));

// // Shorter
// const isEmptyString1 = (string) => string === "";

// 18.03.2026 Wednesday

////////////////////////////////////
// Even Number form array
/////////////////////////////

const getEvenNumbers = (numbers) => {
	return numbers.filter((number) => number % 2 === 0);
};
console.log(getEvenNumbers([1, 2, 3, 4]));
//Shorter
const getEvenNumbers1 = (numbers) =>
	numbers.filter((number) => number % 2 === 0);

// Get Adults

const getAdults = (ages) => ages.filter((age) => age >= 18);

console.log(getAdults([12, 18, 25]));

/// SUm arrays

const sumArray = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
// initial value starting value

console.log(sumArray([1, 2, 3]));

///🔥 TASK 1 — getCompletedTodos
const todos = [
	{ id: 1, title: "Task 1", completed: false },
	{ id: 2, title: "Task 2", completed: true },
];
const getCompletedTodos = (todos) => todos.filter((todo) => todo.completed);

console.log(getCompletedTodos(todos));

/// Mark completed
const markCompleted = (todos, id) =>
	todos.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo));
console.log(markCompleted(todos, 1));

// use map
const names = ["Lukasz", "Anna"];

const greetNames = (names) => {
	return names.map((name) => "Hello " + name);
};

console.log(greetNames(names));

//Get todo titles
const getTodoTitles = (todos) => todos.map((todo) => todo.title);

console.log(getTodoTitles(todos));
