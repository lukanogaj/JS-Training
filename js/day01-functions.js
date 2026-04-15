// /// 05.04.2026 Sunday
const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-08T07:00:00" },
	{ id: 2, title: "Code", completed: false, dueDate: "2026-04-11T18:30:00" },
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
const parseDate = (dateString) => {
	return new Date(dateString);
};

/* Ta funkcja sprawdza czas zeby okreslic, czy overdue czy nie , jesli czas minal to todo staje sie overdue */

const todoTimeStatus = (inputDate) => {
	//ponizej zamienaim daty na objekty
	const today = new Date(); // tu mam  dzien dzisiejszy
	const taskDate = new Date(inputDate);
	// Tutaj sprawdzam dzien dzisiejszy,rowniez czas
	if (
		today.getFullYear() === taskDate.getFullYear() &&
		today.getMonth() === taskDate.getMonth() &&
		today.getDate() === taskDate.getDate()
	)
		return "today";

	//Tutaj sprawdzam past , juz nie potrzebuje sprawdzac rok,miesiac,dzien , bo pierwszy if to robi
	if (taskDate < today) return "past";
	// Jak nie dzisiaj nie preszlosc to zostaje sam return future
	return "future";
};

console.log(todoTimeStatus("2026-04-10T21:00:00"));

const getTodoStatus = (todo) => {
	const todoDate = parseDate(todo.dueDate);
	const status = todoTimeStatus(todoDate);
	return status;
};

const deleteTodo = (todos, id) => {
	return todos.filter((todo) => todo.id !== id);
};

///
const getCompletedTodos = (todos) => {
	return todos.filter((todo) => todo.completed);
};

//
const getCompletedTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

//
const countActiveTodos = (todos) => {
	return todos.reduce((count, todo) => {
		if (!todo.completed) {
			count++;
		}
		return count;
	}, 0);
};

//
const getActiveTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (!todo.completed) {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

//
const getOverdueTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			return acc;
		}

		const status = getTodoStatus(todo);

		if (status === "overdue") {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

console.log(getOverdueTitles(todos));
//

const groupTodosByStatus = (todos) => {
	return todos.reduce(
		(acc, todo) => {
			const status = getTodoStatus(todo);
			if (todo.completed) {
				acc.completed.push(todo);
			} else if (status === "overdue") {
				acc.overdue.push(todo);
			} else if (status === "today") {
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

// Function for today date without time and compare the dates with getTime()

const getTodayTodos = (todos) => {
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			return acc;
		}
		const status = getTodoStatus(todo);
		if (status === "today") {
			acc.push(todo);
		}
		return acc;
	}, []);
};

console.log("TODAY:", getTodayTodos(todos));

const markTodoCompleted = (todos, id) => {
	return todos.map((todo) => {
		return todo.id === id ? { ...todo, completed: true } : todo;
	});
};

const getDashboardData = (todos) => {
	const stats = groupTodosByStatus(todos);
	return {
		total: todos.length,
		completed: stats.completed.length,
		overdue: stats.overdue.length,
		today: stats.today.length,
		future: stats.future.length,
	};
};

const sortTodosByDate = (todos) => {
	return [...todos].sort((todoA, todoB) => {
		const dateA = parseDate(todoA.dueDate).getTime();
		const dateB = parseDate(todoB.dueDate).getTime();

		return dateA - dateB; // najstarsze → najnowsze
	});
};

////////////////
// 09.04.2026

const getUpcomingTodos = (todos) => {
	return todos
		.filter((todo) => {
			return !todo.completed;
		})
		.filter((todo) => {
			const status = getTodoStatus(todo);
			return status === "future";
		})
		.sort((todoA, todoB) => {
			const dateA = parseDate(todoA.dueDate).getTime();
			const dateB = parseDate(todoB.dueDate).getTime();

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
			const status = getTodoStatus(todo);
			if (status !== "overdue") {
				return acc;
			}

			acc.push(todo);
			return acc;
		}, [])
		.sort((overdueA, overdueB) => {
			const dateA = parseDate(overdueA.dueDate).getTime();
			const dateB = parseDate(overdueB.dueDate).getTime();
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
			const status = getTodoStatus(todo);

			if (status === "overdue") {
				acc.overdue.push(todo);
				return acc;
			}
			if (status === "today") {
				acc.today.push(todo);
				return acc;
			}
			if (status === "future") {
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

		const status = getTodoStatus(todo);
		if (status === "today") {
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
