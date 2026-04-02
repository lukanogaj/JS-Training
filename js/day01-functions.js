// // // Checking odds number
// // const isEven = (number) => {
// // 	if (number % 2 === 0) {
// // 		return true;
// // 	} else {
// // 		return false;
// // 	}
// // };

// // // /// Shorter
// // const isEven1 = (number) => {
// // 	return number % 2 === 0;
// // };

// // // //Mid level
// // const isEven2 = (number) => number % 2 === 0;

// // console.log(isEven(2), isEven1(7), isEven2(10));

// // // Function to sum numbers
// // const sum = (a, b) => a + b;

// // console.log(sum(4, 5));

// // //Function to return max nuber
// // const maxNumber = (a, b) => {
// // 	if (a > b) {
// // 		return a;
// // 	} else if (b > a) {
// // 		return b;
// // 	}
// // 	return a; // With two numbers even
// // };

// // console.log(maxNumber(4, 8));

// // //Shorter versions
// // const maxNumber1 = (a, b) => {
// // 	if (a > b) return a;
// // 	return b;
// // };

// // const maxNumber2 = (a, b) => (a > b ? a : b);

// // // Function to check adult age
// // const isAdult = (age) => (age >= 18 ? true : false);
// // console.log(isAdult(17));

// // // Shorter
// // const isAdult1 = (age) => age >= 18;

// // // Function to check if string is empty
// // const isEmptyString = (string) => (string === "" ? true : false);

// // console.log(isEmptyString("hello"));

// // // Shorter
// // const isEmptyString1 = (string) => string === "";

// // 18.03.2026 Wednesday

// ////////////////////////////////////
// // Even Number form array
// /////////////////////////////

// // const getEvenNumbers = (numbers) => {
// // 	return numbers.filter((number) => number % 2 === 0);
// // };
// // console.log(getEvenNumbers([1, 2, 3, 4]));
// // //Shorter
// // const getEvenNumbers1 = (numbers) =>
// // 	numbers.filter((number) => number % 2 === 0);

// // // Get Adults

// // const getAdults = (ages) => ages.filter((age) => age >= 18);

// // console.log(getAdults([12, 18, 25]));

// // /// SUm arrays

// // const sumArray = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
// // // initial value starting value

// // console.log(sumArray([1, 2, 3]));

// // ///🔥 TASK 1 — getCompletedTodos
// // const todos = [
// // 	{ id: 1, title: "Task 1", completed: false },
// // 	{ id: 2, title: "Task 2", completed: true },
// // ];
// // const getCompletedTodos = (todos) => todos.filter((todo) => todo.completed);

// // console.log(getCompletedTodos(todos));

// // /// Mark completed
// // const markCompleted = (todos, id) =>
// // 	todos.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo));
// // console.log(markCompleted(todos, 1));

// // // use map
// // const names = ["Lukasz", "Anna"];

// // const greetNames = (names) => {
// // 	return names.map((name) => `Hello  ${name}`);
// // };

// // console.log(greetNames(names));

// // //Get todo titles
// // const getTodoTitles = (todos) => todos.map((todo) => todo.title);

// // console.log(getTodoTitles(todos));
// /*

// 🔹 BLOCK 1 — TODAY TASKS (JS)
// 🧠 PART 1 — STRING METHODS
// 🔥 Task 1 — containsWord

// Check if text contains a word

// containsWord("Hello Lukasz", "Lukasz") // true
// containsWord("Hello world", "lukasz") // false
// 🔥 Task 2 — normalize

// Clean text for search

// 👉 remove spaces + lowercase

// normalize("  Lukasz ") // "lukasz"
// normalize("  HELLO ")  // "hello"
// 🔥 Task 3 — truncate

// Short preview (UI logic)

// truncate("Hello world", 5) // "Hello..."
// truncate("Hi", 5) // "Hi"
// 🧠 PART 2 — DATE BASICS

// 👉 Use new Date()

// 🔥 Task 4 — isToday
// isToday("2026-03-19") // true (if today is 19 March 2026)
// isToday("2026-03-10") // false
// 🔥 Task 5 — isOverdue

// 👉 earlier than today

// isOverdue("2026-03-10") // true
// isOverdue("2026-03-25") // false
// 🔥 Task 6 — formatDate

// 👉 simple UI format

// formatDate("2026-03-19") // "19 Mar"
// formatDate("2026-12-01") // "1 Dec"

// */

// // const helloLukasz = "Hello Lukasz";
// // // const helloLuk = helloLukasz.toLocaleLowerCase();
// // const helloWorld = "Hello world";
// // // const helloWor = helloWorld.toLocaleLowerCase();

// // // console.log(helloLuk, helloWor);

// // const containWord = (text, word) => {
// // 	return text.includes(word);
// // };

// // console.log(containWord("Hello Lukasz", "Lukasz"));

// // /////////////
// // // Normalize

// // const word1 = "  Lukasz  ";
// // const word2 = " Hello ";

// // const removeSpace = (word) => {
// // 	return word.trim().toLowerCase();
// // };

// // console.log(removeSpace(word1));

// // // Truncate text , make shorter , cut the text if is longer than. need it
// // const truncate = (text, limit) => {
// // 	return text.length > limit ? text.slice(0, limit) + "..." : text;
// // };

// // console.log(truncate("Hello lukasz", 5));

// // // COmpare the dates
// // const isToday = (dateString) => {
// // 	//Date to check
// // 	const inputDate = new Date(dateString);
// // 	const today = new Date();
// // 	return (
// // 		inputDate.getFullYear() === today.getFullYear() &&
// // 		inputDate.getMonth() === today.getMonth() &&
// // 		inputDate.getDate() === today.getDate()
// // 	);
// // };

// // // console.log(isToday("2026-03-19"));

// // /// Is Overdue
// const isOverdue = (dateString) => {
// 	const inputDate = new Date(dateString);
// 	const today = new Date();

// 	inputDate.setHours(0, 0, 0, 0);
// 	today.setHours(0, 0, 0, 0);

// 	return inputDate < today;
// };

// // // Format date

// // /*
// // const formatDate = (dateString) => {
// //   // convert to Date
// //   // get day
// //   // get month index
// //   // use month index to get month name from months array
// // };
// // */
// // const months = [
// // 	"Jan",
// // 	"Feb",
// // 	"Mar",
// // 	"Apr",
// // 	"May",
// // 	"Jun",
// // 	"Jul",
// // 	"Aug",
// // 	"Sep",
// // 	"Oct",
// // 	"Nov",
// // 	"Dec",
// // ];
// // const formatDate = (dateString) => {
// // 	const inputDate = new Date(dateString);

// // 	const day = inputDate.getDate();
// // 	const monthIndex = inputDate.getMonth();

// // 	return day + " " + months[monthIndex];
// // };

// // console.log(formatDate("2026-03-19")); // "19 Mar"

// // ///////////////////////////////////////////
// // /*🔥 NEW BLOCK — COMBINED JS (REAL TASKS)

// // Now you stop doing isolated functions. */

// // const todos = [
// // 	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-10" },
// // 	{ id: 2, title: "Code", completed: true, dueDate: "2026-03-21" },
// // 	{ id: 3, title: "Shop", completed: false, dueDate: "2026-03-21" },
// // ];

// // // getCompletedTodos

// // const getCompletedTodos = (todos) => {
// // 	return todos.filter((todo) => todo.completed);
// // };

// // console.log(getCompletedTodos(todos));

// // //////////////////////////////////////

// // /*
// // 🎯 TASK 2 — getTodoTitles

// // 👉 use .map()

// // // ["Gym", "Code", "Shop"]
// // */

// // const getTodoTitles = (todos) => {
// // 	return todos.map((todo) => todo.title);
// // };

// // console.log(getTodoTitles(todos));

// // /*
// // 🎯 TASK 3 — getOverdueTodos

// // 👉 combine:

// // date logic (isOverdue)

// // .filter()
// // */

// // const getOverdueTodos = (todos) => {
// // 	return todos.filter((todo) => isOverdue(todo.dueDate));
// // };

// // console.log(getOverdueTodos(todos));

// // /// markCompleted
// // const markCompleted = (todos, id) => {
// // 	return todos.map((todo) =>
// // 		todo.id === id ? { ...todo, completed: true } : todo,
// // 	);
// // };

// // console.log(markCompleted(todos, 1));

// // ///////////////
// // /*
// // block

// // 🔥 TASK 5 — formatTodosForUI

// // 👉 This is real frontend work

// // You take raw data → transform it → ready for UI

// // */
// // const formatTodosForUI = (todos) => {
// // 	return todos.map((todo) => ({
// // 		id: todo.id,
// // 		title: truncate(todo.title, 5),
// // 		due: formatDate(todo.dueDate),
// // 		completed: todo.completed,
// // 	}));
// // };
// // console.log(formatTodosForUI(todos));

// // // 21.03.2026 Saturday
// // // Get DashboardData
// // /*
// // {
// //   total: number,
// //   completed: number,
// //   active: number,
// //   overdue: number,
// //   today: number,
// // }
// //   */

// // const getVisibleTodos = (todos, filterType) => {
// // 	if (filterType === "all") {
// // 		return todos;
// // 	}

// // 	if (filterType === "active") {
// // 		return todos.filter((todo) => !todo.completed);
// // 	}

// // 	if (filterType === "completed") {
// // 		return todos.filter((todo) => todo.completed);
// // 	}

// // 	if (filterType === "overdue") {
// // 		return todos.filter((todo) => isOverdue(todo.dueDate) && !todo.completed);
// // 	}

// // 	// fallback (wrong filterType)
// // 	return todos;
// // };
// // console.log(getVisibleTodos(todos, "abc"));

// ////////////////////
// //22.03.2026 Sunday. DAY 1

// const todos = [
// 	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-10" },
// 	{ id: 2, title: "Code", completed: true, dueDate: "2026-03-21" },
// 	{ id: 3, title: "Shop", completed: false, dueDate: "2026-03-21" },
// 	{ id: 4, title: "Test", completed: true, dueDate: "2026-03-24" },
// ];

// ////////////////////
// // Find todo by id number
// const findTodosById = (todos, id) => {
// 	return todos.find((todo) => todo.id === id);
// };

// // console.log(findTodosById(todos, 3));

// ////////////////////////////
// // Find completed todos

// const hasCompletedTodos = (todos) => {
// 	return todos.some((todo) => todo.completed);
// };

// ///////////////////////////
// // FInd if all completed

// const areaAllTodosCompleted = (todos) => {
// 	return todos.every((todo) => todo.completed);
// };

// // /////////////////
// // Show active todos

// const getActiveTodosCount = (todos) => {
// 	return todos.filter((todo) => !todo.completed).length;
// };

// //////////////////////
// /// Put all together
// // const getOverdueTodos = (todos) => {
// // 	return todos.filter((todo) => isOverdue(todo.dueDate)).length;
// // };

// // const getDashboardData = (todos) => {
// // 	return {
// // 		total: todos.length,
// // 		completed: todos.filter((todo) => todo.completed).length,
// // 		active: getActiveTodosCount(todos),
// // 		overdue: todos.filter((todo) => isOverdue(todo.dueDate)).length,
// // 	};
// // };

// /////////////////////////////
// // 23.03.2026 Day

// const getCompletedTodos = (todos) => {
// 	return todos.filter((todo) => todo.completed);
// };

// const getTodoTitles = (todos) => {
// 	return todos.map((todo) => todo.title);
// };

// const toggleTodoCompleted = (todos, id) => {
// 	return todos.map((todo) =>
// 		todo.id === id ? { ...todo, completed: !todo.completed } : todo,
// 	);
// };

// const deleteTodoById = (todos, id) => {
// 	return todos.filter((todo) => todo.id !== id);
// };

// const getCompletedTitles = (todos) => {
// 	return getCompletedTodos(todos).map((todo) => todo.title);
// };

// const getActiveTitles = (todos) => {
// 	return todos.filter((todo) => !todo.completed).map((todo) => todo.title);
// };

// ////////////////////////////
// // 25.03.2026 Wednesday

// const markTodoCompletedById = (todos, id) => {
// 	return todos.map((todo) =>
// 		todo.id === id ? { ...todo, completed: true } : todo,
// 	);
// };

// console.log(markTodoCompletedById(todos, 2));

// const getOverdueTodos = (todos) => {
// 	const today = new Date();
// 	today.setHours(0, 0, 0, 0);

// 	return todos.filter((todo) => {
// 		const todoDate = new Date(todo.dueDate);
// 		todoDate.setHours(0, 0, 0, 0);

// 		return !todo.completed && todoDate < today;
// 	});
// };

// console.log(getOverdueTodos(todos));

// const getTodayTodos = (todos) => {
// 	const today = new Date();
// 	today.setHours(0, 0, 0, 0);
// 	return todos.filter((todo) => {
// 		const todoDate = new Date(todo.dueDate);
// 		todoDate.setHours(0, 0, 0, 0);

// 		return !todo.completed && todoDate.getTime() === today.getTime();
// 	});
// };

// console.log(getTodayTodos(todos));

// const getDashboardData = (todos) => {
// 	return {
// 		total: todos.length,
// 		completed: getCompletedTodos(todos).length,
// 		active: getActiveTodosCount(todos),
// 		overdue: getOverdueTodos(todos).length,
// 		today: getTodayTodos(todos).length,
// 	};
// };

// console.log(getDashboardData(todos));

///  01.04.2026 Wednesday

// Even
// const isEven = (number) => {
// 	if (number % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// const isEvenTernary = (number) => (number % 2 === 0 ? true : false);

// const isEvenShort = (number) => number % 2 === 0;

// /// Sum

// const sum = (a, b) => a + b;

// // console.log(sum(4, 5));

// // maxNumber
// const maxNumber = (a, b) => {
// 	if (a === b) return "even";
// 	return a > b ? a : b;
// };

// // is Adult

// const isAdult = (age) => age >= 18;

// // console.log(isAdult(17));

// /// is Empty String

// const isEmptyString = (value) => {
// 	if (value.length === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// const isEmptyString1 = (value) => value.length === 0;

// console.log(isEmptyString(""));
// console.log(isEmptyString1("Hello"));

/// toggle completed todos
// const todos = [
// 	{ id: 1, title: "Gym", completed: false },
// 	{ id: 2, title: "Code", completed: true },
// 	{ id: 3, title: "Shop", completed: true },
// ];

// const toggleTodoCompleted = (todos, id) => {
// 	return todos.map((todo) =>
// 		todo.id === id ? { ...todo, completed: !todo.completed } : todo,
// 	);
// };

// // console.log(toggleTodoCompleted(todos, 1));

// /// delete todo by id

// const deleteTodoById = (todos, id) => {
// 	return todos.filter((todo) => todo.id !== id);
// };

// // getCompletedTodos

// const getCompletedTodos = (todos) => {
// 	return todos.filter((todo) => todo.completed);
// };

// console.log(getCompletedTodos(todos));

// // short version without return
// const getCompletedTodos1 = (todos) => todos.filter((todo) => todo.completed);

// ///
// // Get active todos
// const getActiveTodos = (todos) => {
// 	return todos.filter((todo) => todo.completed === false);
// };

// // short version
// const getActiveTodos1 = (todos) => todos.filter((todo) => !todo.completed);

// // console.log(getActiveTodos(todos));
// // console.log(getActiveTodos1(todos));

// // get Completed Titles
// const getCompletedTitles = (todos) => {
// 	return todos.filter((todo) => todo.completed).map((todo) => todo.title);
// };

// // Shorter
// const getCompletedTitles1 = (todos) =>
// 	todos.filter((todo) => todo.completed).map((todo) => todo.title);

// console.log(getCompletedTitles(todos));

// // getDashboardData
// const getDashboardData = (todos) => {
// 	return {
// 		total: todos.length,
// 		completed: getCompletedTodos(todos).length,
// 		active: getActiveTodos(todos).length,
// 	};
// };

// console.log(getDashboardData(todos));

// 02.04.2026 Thursday

const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-05-10" },
	{ id: 2, title: "Code", completed: true, dueDate: "2026-05-08" },
	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12" },
	{ id: 4, title: "Read", completed: false, dueDate: "2026-05-07" },
];

const countCompletedTodos = (todos) => {
	return todos.reduce((acc, todo) => {
		return todo.completed ? acc + 1 : acc;
	}, 0);
};

const countCompletedTodosShort = (todos) =>
	todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

// console.log(countCompletedTodos(todos), countCompletedTodosShort(todos));

////

const groupTodos = (todos) => {
	return todos.reduce(
		(acc, todo) => {
			if (todo.completed) {
				acc.completed.push(todo);
			} else {
				acc.active.push(todo);
			}

			return acc;
		},
		{ completed: [], active: [] },
	);
};

console.log(groupTodos(todos));
