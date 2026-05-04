// // /// 05.04.2026 Sunday
// const todos = [
// 	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-08T07:00:00" },
// 	{ id: 2, title: "Code", completed: false, dueDate: "2026-04-19T18:30:00" },
// 	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12T12:00:00" },
// 	{ id: 4, title: "Read", completed: false, dueDate: "2026-04-10T21:00:00" },
// 	{
// 		id: 7,
// 		title: "Tomorrow task",
// 		completed: false,
// 		dueDate: "2026-04-14T10:00:00",
// 	},
// 	{
// 		id: 5,
// 		title: "Today morning",
// 		completed: false,
// 		dueDate: "2026-04-13T08:00:00",
// 	},
// 	{
// 		id: 6,
// 		title: "Today evening",
// 		completed: false,
// 		dueDate: "2026-04-13T21:00:00",
// 	},
// ];

// // Function to normalize date string
// // Parse date string into Date object
// const getDateFromString = (dateString) => {
// 	return new Date(dateString);
// };

// // Determine todo todoStatus: today, overdue, or future (based on day only)
// const todoTimeStatus = (inputDate) => {
// 	// normalize both dates to start of day (ignore time)
// 	const today = new Date().setHours(0, 0, 0, 0);
// 	const taskDate = new Date(inputDate).setHours(0, 0, 0, 0);

// 	// check if task is today
// 	if (taskDate === today) return "today";

// 	// check if task is overdue, otherwise it's future
// 	return taskDate < today ? "overdue" : "future";
// };

// console.log(todoTimeStatus("2026-04-15T21:00:00"));

// /// Function that checks a todo’s date and returns its todoStatus: "today", "overdue", or "future".
// const getTodoDateCategory = (todo) => {
// 	const todoDate = getDateFromString(todo.dueDate);
// 	const category = todoTimeStatus(todoDate);
// 	return category;
// };

// // Function to delete todo ,for small apps
// const deleteTodo = (todos, id) => {
// 	return todos.map((todo) => todo.id !== id);
// };
// /// Function to delete todos is we have thousands of them with method I found in MDN new Map, I don't know if this is a good approach just testing, still not fully understand this new Map method, code coied from mdn i google. I hope so this what you mean , by protect processor
// const deleteTodoById = (todos, id) => {
// 	const map = new Map(todos.map((todo) => [todo.id, todo]));

// 	map.delete(id);

// 	return Array.from(map.values());
// };

// /// This function only check  boolean value of todo
// const getCompletedTodos = (todos) => {
// 	return todos.filter((todo) => todo.completed);
// };

// //Function  to create new array with titles of completed todos
// const getCompletedTitles = (todos) => {
// 	return todos.reduce((acc, todo) => {
// 		if (todo.completed) {
// 			acc.push(todo.title);
// 		}
// 		return acc;
// 	}, []);
// };

// //Function to count todos not done with today date and not done
// const countActiveTodos = (todos) => {
// 	return todos.reduce((count, todo) => {
// 		if (!todo.completed) {
// 			count++;
// 		}
// 		return count;
// 	}, 0);
// };

// // Fucntion to check todo time and date , if not completed , create new array with the titles of active todo
// const getActiveTitles = (todos) => {
// 	return todos.reduce((acc, todo) => {
// 		if (!todo.completed) {
// 			acc.push(todo.title);
// 		}
// 		return acc;
// 	}, []);
// };
// console.log(getActiveTitles(todos));

// // Returns titles of all non-completed overdue todos using a helper to determine todoStatus.
// const getOverdueTitles = (todos) => {
// 	// Ignore completed
// 	return todos.reduce((acc, todo) => {
// 		if (todo.completed) {
// 			return acc;
// 		}
// 		// return todoStatus od todo
// 		const category = getTodoDateCategory(todo);
// 		// Collects only overdue  and built new array with overdue
// 		if (category === "overdue") {
// 			acc.push(todo.title);
// 		}
// 		return acc;
// 	}, []);
// };

// console.log(getOverdueTitles(todos));

// // Groups todos into categories: completed, overdue, today, and future using a helper function.
// // This function only create to learn reduce , nothing else ,,, if condition true element is add to the array...only to understan more reduce , nothing else
// const groupTodosByStatus = (todos) => {
// 	return todos.reduce(
// 		(acc, todo) => {
// 			const category = getTodoDateCategory(todo);
// 			// Completed have priority , even if overdue completed will go to completed
// 			if (todo.completed) {
// 				acc.completed.push(todo);
// 			} else if (category === "overdue") {
// 				acc.overdue.push(todo);
// 			} else if (category === "today") {
// 				acc.today.push(todo);
// 			} else {
// 				acc.future.push(todo);
// 			}

// 			return acc;
// 		},
// 		{ today: [], completed: [], overdue: [], future: [] },
// 	);
// };

// console.log(groupTodosByStatus(todos));

// // Returns all active todos that belong to "today" by filtering the list using time todoStatus and completion state
// const getTodayTodos = (todos) => {
// 	return todos.filter((todo) => {
// 		const category = getTodoDateCategory(todo);
// 		return !todo.completed && category === "today";
// 	});
// };

// console.log("TODAY:", getTodayTodos(todos));

// /// Checks for a todo by id and returns a new object with completed set to true.

// const markTodoCompleted = (todos, id) => {
// 	return todos.map((todo) => {
// 		return todo.id === id ? { ...todo, completed: true } : todo;
// 	});
// };

// // Here I copy code form google and mnd , still not fully understand new Map method
// const markTodoCompletedById = (todosById, id) => {
// 	const todo = todosById.get(id);

// 	if (!todo) {
// 		return todosById;
// 	}

// 	const nextMap = new Map(todosById);
// 	nextMap.set(id, { ...todo, completed: true });

// 	return nextMap;
// };

// console.log(markTodoCompleted(todos));

// /// Function
// const getDashboardData = (todos) => {
// 	//Returns an object with counts of todos grouped by todoStatus.
// 	const stats = groupTodosByStatus(todos);

// 	return {
// 		total: todos.length,
// 		completed: stats.completed.length,
// 		overdue: stats.overdue.length,
// 		today: stats.today.length,
// 		future: stats.future.length,
// 	};
// };

// //Returns a new array of todos sorted by date from oldest to newest.
// const sortTodosByDate = (todos) => {
// 	return [...todos].sort((todoA, todoB) => {
// 		const dateA = getDateFromString(todoA.dueDate).getTime();
// 		const dateB = getDateFromString(todoB.dueDate).getTime();

// 		return dateA - dateB; // oldest  → newest
// 	});
// };

// // Filters active future todos and returns them sorted by date from oldest to newest.
// const getUpcomingTodos = (todos) => {
// 	return todos
// 		.filter((todo) => {
// 			// remove completed
// 			return !todo.completed;
// 		})
// 		.filter((todo) => {
// 			// filter future ones
// 			const category = getTodoDateCategory(todo);
// 			return category === "future";
// 		})
// 		.sort((todoA, todoB) => {
// 			// sort oldest to newest
// 			const dateA = getDateFromString(todoA.dueDate).getTime();
// 			const dateB = getDateFromString(todoB.dueDate).getTime();

// 			return dateA - dateB;
// 		});
// };

// console.log(getUpcomingTodos(todos));

// /// Function below calculate percentage of completed todos
// const getCompletionRate = (todos) => {
// 	// get total number of todos
// 	const total = todos.length;

// 	if (total === 0) {
// 		return 0;
// 	}
// 	// Count completed todos
// 	const completed = todos.reduce((acc, todo) => {
// 		if (todo.completed) {
// 			return acc + 1;
// 		}
// 		return acc;
// 	}, 0);
// 	// return percentage
// 	return Math.round((completed / total) * 100);
// };

// /// Function returns overdue todos (not completed), sorted from oldest to newest
// const getOverdueTodos = (todos) => {
// 	// filter active overdue todos
// 	return (
// 		todos
// 			.filter((todo) => {
// 				const category = getTodoDateCategory(todo);
// 				return !todo.completed && category === "overdue";
// 			})
// 			// sort them oldest to newest
// 			.sort((overdueA, overdueB) => {
// 				const dateA = getDateFromString(overdueA.dueDate).getTime();
// 				const dateB = getDateFromString(overdueB.dueDate).getTime();

// 				return dateA - dateB;
// 			})
// 	);
// };

// /// 21.04.2026 Tuesday
// const todos = [
// 	{
// 		id: 1,
// 		title: "Morning workout",
// 		completed: false,
// 		dueDate: "2026-04-21T07:00:00",
// 		priority: "high",
// 	},
// 	{
// 		id: 2,
// 		title: "Finish React task",
// 		completed: false,
// 		dueDate: "2026-04-21T18:30:00",
// 		priority: "high",
// 	},
// 	{
// 		id: 3,
// 		title: "Buy groceries",
// 		completed: true,
// 		dueDate: "2026-04-20T12:00:00",
// 		priority: "low",
// 	},
// 	{
// 		id: 4,
// 		title: "Read documentation",
// 		completed: false,
// 		dueDate: "2026-04-19T21:00:00",
// 		priority: "medium",
// 	},
// 	{
// 		id: 5,
// 		title: "Call family",
// 		completed: false,
// 		dueDate: "2026-04-22T08:00:00",
// 		priority: "low",
// 	},
// 	{
// 		id: 6,
// 		title: "Fix bug in modal",
// 		completed: false,
// 		dueDate: "2026-04-18T10:00:00",
// 		priority: "high",
// 	},
// 	{
// 		id: 7,
// 		title: "Deploy portfolio",
// 		completed: true,
// 		dueDate: "2026-04-17T09:00:00",
// 		priority: "high",
// 	},
// 	{
// 		id: 8,
// 		title: "Prepare dashboard data",
// 		completed: false,
// 		dueDate: "2026-04-23T14:00:00",
// 		priority: "medium",
// 	},
// ];

// ///
// //
// const TODO_STATUS = {
// 	TODAY: "today",
// 	OVERDUE: "overdue",
// 	FUTURE: "future",
// };

// ///m
// // 21.04.2026 Tuesday

// // Set date for begin of the day
// const normalizeToDay = (dateInput) => {
// 	const date = new Date(dateInput);
// 	date.setHours(0, 0, 0, 0);
// 	return date;
// };

// // normalizeToDay();
// const todayDate = new Date("2026-04-21T09:00:00");

// const getTodoStatus = (todo, todayDate) => {
// 	const today = normalizeToDay(todayDate).getTime();
// 	const date = normalizeToDay(todo.dueDate).getTime();
// 	if (today === date) {
// 		return TODO_STATUS.TODAY;
// 	} else if (date < today) {
// 		return TODO_STATUS.OVERDUE;
// 	} else {
// 		return TODO_STATUS.FUTURE;
// 	}
// };

// console.log(getTodoStatus(todos[2], todayDate));

// ////////////

// const getTodayTodos = (todos) => {
// 	return todos
// 		.filter((todo) => {
// 			return !todo.completed;
// 		})
// 		.filter((todo) => {
// 			const todoStatus = getTodoStatus(todo, todayDate);
// 			return todoStatus === TODO_STATUS.TODAY;
// 		});
// };

// console.log(getTodayTodos(todos));

// //////////////////////
// // 22.04.2026 Wednesday

// // learning version
// // first approach before abstraction

// //////
// // reusable production helper
// const getTodosByStatusSorted = (todos, statusFilter) => {
// 	return todos
// 		.filter((todo) => {
// 			const todoStatus = getTodoStatus(todo, todayDate);
// 			return !todo.completed && todoStatus === statusFilter;
// 		})
// 		.sort((todoA, todoB) => {
// 			const dateA = normalizeToDay(todoA.dueDate).getTime();
// 			const dateB = normalizeToDay(todoB.dueDate).getTime();
// 			return dateA - dateB;
// 		});
// };
// console.log(getTodosByStatusSorted(todos, TODO_STATUS.FUTURE));

// ////////////
// console.log(getTodosByStatusSorted(todos, TODO_STATUS.FUTURE));
// const getOverdueTodos = (todos) => {
// 	return todos.filter((todo) => {
// 		const todoStatus = getTodoStatus(todo, todayDate);
// 		return !todo.completed && todoStatus === TODO_STATUS.OVERDUE;
// 	});
// };

// console.log(getOverdueTodos(todos));

// ///////////////
// const getOverdueTodosSorted = (todos) => {
// 	const overdueTodos = getTodosByStatusSorted(todos, TODO_STATUS.OVERDUE);
// 	return overdueTodos;
// };

// console.log(getOverdueTodosSorted(todos));

// /////////////
// const getFutureTodosSorted = (todos) => {
// 	const futureTodos = getTodosByStatusSorted(todos, TODO_STATUS.FUTURE);
// 	return futureTodos;
// };

// console.log(getFutureTodosSorted(todos));

// ///////
// const getTodayTodosSorted = (todos) => {
// 	const todayTodosSorted = getTodosByStatusSorted(todos, TODO_STATUS.TODAY);
// 	return todayTodosSorted;
// };

// console.log(getTodayTodosSorted(todos));

//////
// SORT THE PRIORITY OF TODOS
// 27.04.2026 Monday

/////////////////

const todos = [
	{
		id: 1,
		title: "Morning workout",
		completed: false,
		dueDate: "2026-04-21T07:00:00",
		priority: "high",
	},
	{
		id: 2,
		title: "Finish React task",
		completed: false,
		dueDate: "2026-04-21T18:30:00",
		priority: "high",
	},
	{
		id: 3,
		title: "Buy groceries",
		completed: true,
		dueDate: "2026-04-20T12:00:00",
		priority: "low",
	},
	{
		id: 4,
		title: "Read documentation",
		completed: false,
		dueDate: "2026-04-19T21:00:00",
		priority: "medium",
	},
	{
		id: 5,
		title: "Call family",
		completed: false,
		dueDate: "2026-04-22T08:00:00",
		priority: "low",
	},
	{
		id: 6,
		title: "Fix bug in modal",
		completed: false,
		dueDate: "2026-04-18T10:00:00",
		priority: "high",
	},
	{
		id: 7,
		title: "Deploy portfolio",
		completed: true,
		dueDate: "2026-04-17T09:00:00",
		priority: "high",
	},
	{
		id: 8,
		title: "Prepare dashboard data",
		completed: false,
		dueDate: "2026-04-23T14:00:00",
		priority: "medium",
	},
];

///
//TODO STATUS
const TODO_STATUS = {
	TODAY: "today",
	OVERDUE: "overdue",
	FUTURE: "future",
};

/// TODO PRIORITY
const PRIORITY_ORDER = {
	high: 1,
	medium: 2,
	low: 3,
};

///m
// 21.04.2026 Tuesday

// Set date for begin of the day
const normalizeToDay = (dateInput) => {
	const date = new Date(dateInput);
	date.setHours(0, 0, 0, 0);
	return date;
};

// normalizeToDay();
const todayDate = new Date("2026-04-21T09:00:00");

const getTodoStatus = (todo, todayDate) => {
	const today = normalizeToDay(todayDate).getTime();
	const date = normalizeToDay(todo.dueDate).getTime();
	if (today === date) {
		return TODO_STATUS.TODAY;
	} else if (date < today) {
		return TODO_STATUS.OVERDUE;
	} else {
		return TODO_STATUS.FUTURE;
	}
};

console.log(getTodoStatus(todos[2], todayDate));

////////////

const getTodayTodos = (todos) => {
	return todos
		.filter((todo) => {
			return !todo.completed;
		})
		.filter((todo) => {
			const todoStatus = getTodoStatus(todo, todayDate);
			return todoStatus === TODO_STATUS.TODAY;
		});
};

console.log(getTodayTodos(todos));

//////////////////////
// 22.04.2026 Wednesday

// learning version
// first approach before abstraction

//////
// reusable production helper
const getTodosByStatusSorted = (todos, statusFilter, todayDate) => {
	return todos
		.map((todo) => {
			return { ...todo, status: getTodoStatus(todo, todayDate),priorityOrder: };
		})
		.filter((todo) => {
			return !todo.completed && todo.status === statusFilter;
		})
		.sort((todoA, todoB) => {
			const priorityA = todoA.priority;
			const priorityB = todoB.priority;
			const priority = PRIORITY_ORDER[priorityA] - PRIORITY_ORDER[priorityB];
			if (priority !== 0) {
				return priority;
			}
			const dateA = normalizeToDay(todoA.dueDate).getTime();
			const dateB = normalizeToDay(todoB.dueDate).getTime();
			return dateA - dateB;
		});
};
console.log(getTodosByStatusSorted(todos, TODO_STATUS.FUTURE, todayDate));

////////////
console.log(getTodosByStatusSorted(todos, TODO_STATUS.FUTURE));
const getOverdueTodos = (todos) => {
	return todos.filter((todo) => {
		const todoStatus = getTodoStatus(todo, todayDate);
		return !todo.completed && todoStatus === TODO_STATUS.OVERDUE;
	});
};

console.log(getOverdueTodos(todos));

///////////////
const getOverdueTodosSorted = (todos) => {
	const overdueTodos = getTodosByStatusSorted(todos, TODO_STATUS.OVERDUE);
	return overdueTodos;
};

console.log(getOverdueTodosSorted(todos));

/////////////
const getFutureTodosSorted = (todos) => {
	const futureTodos = getTodosByStatusSorted(todos, TODO_STATUS.FUTURE);
	return futureTodos;
};

console.log(getFutureTodosSorted(todos));

///////
const getTodayTodosSorted = (todos) => {
	const todayTodosSorted = getTodosByStatusSorted(todos, TODO_STATUS.TODAY);
	return todayTodosSorted;
};

console.log(getTodayTodosSorted(todos));
