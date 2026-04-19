// /// 05.04.2026 Sunday
const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-08T07:00:00" },
	{ id: 2, title: "Code", completed: false, dueDate: "2026-04-19T18:30:00" },
	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12T12:00:00" },
	{ id: 4, title: "Read", completed: false, dueDate: "2026-04-10T21:00:00" },
	{
		id: 7,
		title: "Tomorrow task",
		completed: false,
		dueDate: "2026-04-14T10:00:00",
	},
	{
		id: 5,
		title: "Today morning",
		completed: false,
		dueDate: "2026-04-13T08:00:00",
	},
	{
		id: 6,
		title: "Today evening",
		completed: false,
		dueDate: "2026-04-13T21:00:00",
	},
];

// Function to normalize date string
// Funkcja ktora bierze string daty i zamienia go na objekt Date zeby mozna bylo porownywac
const getDateFromString = (dateString) => {
	return new Date(dateString);
};

/// Zrobilem 3 kategorie today,overdue, future
const todoTimeStatus = (inputDate) => {
	// W tej funkcji jest proste porownanie tylko dnia, nie godziny
	// dlatego uzywam setHours, najprosciej
	const today = new Date().setHours(0, 0, 0, 0); // dzisiejszy dzien, godziny wyzerowane
	const taskDate = new Date(inputDate).setHours(0, 0, 0, 0);

	// Tutaj sprawdzam dzien dzisiejszy
	if (taskDate === today) return "today";

	// Tutaj sprawdzam overdue, jak nie overdue to daje future
	return taskDate < today ? "overdue" : "future";
};

console.log(todoTimeStatus("2026-04-15T21:00:00"));

/// Function that checks a todo’s date and returns its status: "today", "overdue", or "future".
const getTodoDateCategory = (todo) => {
	const todoDate = getDateFromString(todo.dueDate);
	const category = todoTimeStatus(todoDate);
	return category;
};

// Function to delete todo
const deleteTodo = (todos, id) => {
	return todos.filter((todo) => todo.id !== id);
};

/// This function only check  boolean value of todo
const getCompletedTodos = (todos) => {
	return todos.filter((todo) => todo.completed);
};

//Function  to create new array with titles of completed todos
const getCompletedTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

//Function to count todos not done with today date and not done
const countActiveTodos = (todos) => {
	return todos.reduce((count, todo) => {
		if (!todo.completed) {
			count++;
		}
		return count;
	}, 0);
};

// Fucntion to check todo time and date , if not completed , create new array with the titles of active todo
const getActiveTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (!todo.completed) {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};
console.log(getActiveTitles(todos));

// Returns titles of all non-completed overdue todos using a helper to determine status.
const getOverdueTitles = (todos) => {
	// Ignore completed
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			return acc;
		}
		// return status od todo
		const category = getTodoDateCategory(todo);
		// Collects only overdue  and built new array with overdue
		if (category === "overdue") {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

console.log(getOverdueTitles(todos));

// Groups todos into categories: completed, overdue, today, and future using a helper function.
const groupTodosByStatus = (todos) => {
	return todos.reduce(
		(acc, todo) => {
			const category = getTodoDateCategory(todo);
			// Completed have priority , even if overdue completed will go to completed
			if (todo.completed) {
				acc.completed.push(todo);
			} else if (category === "overdue") {
				acc.overdue.push(todo);
			} else if (category === "today") {
				acc.today.push(todo);
			} else {
				acc.future.push(todo);
			}

			return acc;
		},
		{ today: [], completed: [], overdue: [], future: [] },
	);
};

console.log(groupTodosByStatus(todos));

// Returns all active todos that belong to "today" by filtering the list using time status and completion state
const getTodayTodos = (todos) => {
	return todos.filter((todo) => {
		const category = getTodoDateCategory(todo);
		return !todo.completed && category === "today";
	});
};

console.log("TODAY:", getTodayTodos(todos));

/// Checks for a todo by id and returns a new object with completed set to true.
const markTodoCompleted = (todos, id) => {
	return todos.map((todo) => {
		return todo.id === id ? { ...todo, completed: true } : todo;
	});
};

console.log(markTodoCompleted(todos));

/// Function
const getDashboardData = (todos) => {
	//Returns an object with counts of todos grouped by status.
	const stats = groupTodosByStatus(todos);

	return {
		total: todos.length,
		completed: stats.completed.length,
		overdue: stats.overdue.length,
		today: stats.today.length,
		future: stats.future.length,
	};
};

//Returns a new array of todos sorted by date from oldest to newest.
const sortTodosByDate = (todos) => {
	return [...todos].sort((todoA, todoB) => {
		const dateA = getDateFromString(todoA.dueDate).getTime();
		const dateB = getDateFromString(todoB.dueDate).getTime();

		return dateA - dateB; // najstarsze → najnowsze
	});
};

// Filters active future todos and returns them sorted by date from oldest to newest.
const getUpcomingTodos = (todos) => {
	return todos
		.filter((todo) => {
			// remove completed
			return !todo.completed;
		})
		.filter((todo) => {
			// filter future ones
			const category = getTodoDateCategory(todo);
			return category === "future";
		})
		.sort((todoA, todoB) => {
			// sort oldest to newest
			const dateA = getDateFromString(todoA.dueDate).getTime();
			const dateB = getDateFromString(todoB.dueDate).getTime();

			return dateA - dateB;
		});
};

console.log(getUpcomingTodos(todos));

const getCompletionRate = (todos) => {
	const total = todos.length;

	if (total === 0) {
		return 0;
	}

	const completed = todos.reduce((acc, todo) => {
		if (todo.completed) {
			return acc + 1;
		}
		return acc;
	}, 0);

	return Math.round((completed / total) * 100);
};

const getOverdueTodos = (todos) => {
	return todos
		.reduce((acc, todo) => {
			if (todo.completed) {
				return acc;
			}

			const category = getTodoDateCategory(todo);

			if (category !== "overdue") {
				return acc;
			}

			acc.push(todo);
			return acc;
		}, [])
		.sort((overdueA, overdueB) => {
			const dateA = getDateFromString(overdueA.dueDate).getTime();
			const dateB = getDateFromString(overdueB.dueDate).getTime();

			return dateA - dateB;
		});
};

///////////////////
const groupTodosByDate = (todos) => {
	return todos.reduce(
		(acc, todo) => {
			if (todo.completed) {
				return acc;
			}

			const category = getTodoDateCategory(todo);

			if (category === "overdue") {
				acc.overdue.push(todo);
				return acc;
			}

			if (category === "today") {
				acc.today.push(todo);
				return acc;
			}

			if (category === "future") {
				acc.future.push(todo);
				return acc;
			}

			return acc;
		},
		{ overdue: [], today: [], future: [] },
	);
};

console.log(groupTodosByDate(todos));

///////////////////
// 10.04.2026
//////////////////

const getTodayTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			return acc;
		}

		const category = getTodoDateCategory(todo);

		if (category === "today") {
			acc.push(todo.title);
		}

		return acc;
	}, []);
};

console.log(getTodayTitles(todos));

const getNearestUpcomingTodo = (todos) => {
	const upcoming = getUpcomingTodos(todos);
	return upcoming[0] || null;
};
