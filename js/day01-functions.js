// /// 05.04.2026 Sunday
const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-08T07:00:00" },
	{ id: 2, title: "Code", completed: false, dueDate: "2026-04-11T18:30:00" },
	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12T12:00:00" },
	{ id: 4, title: "Read", completed: false, dueDate: "2026-04-10T21:00:00" },
];

const getToday = () => new Date();

// Function to normalize date string
const parseDate = (dateString) => {
	return new Date(dateString);
};

/// Function to check
const todayCheck = (inputDate) => {
	const today = new Date();

	if (
		today.getFullYear() === inputDate.getFullYear() &&
		today.getMonth() === inputDate.getMonth() &&
		today.getDate() === inputDate.getDate()
	) {
		return "today";
	}

	if (inputDate.getFullYear() < today.getFullYear()) {
		return "past";
	}

	if (
		inputDate.getFullYear() === today.getFullYear() &&
		inputDate.getMonth() < today.getMonth()
	) {
		return "past";
	}

	if (
		inputDate.getFullYear() === today.getFullYear() &&
		inputDate.getMonth() === today.getMonth() &&
		inputDate.getDate() < today.getDate()
	) {
		return "past";
	}

	return "future";
};

const getTodoStatus = (todo) => {
	const todoDate = parseDate(todo.dueDate);
	const status = todayCheck(todoDate);
	return status;
};

const getTodoTimeStatus = (todo) => {
	const todayTimeStatus = getTodoStatus(todo);
	const date = new Date(todo.dueDate);
	const actualTime = new Date();
	if (todayTimeStatus !== "today") {
		return todayTimeStatus;
	}
	if (todayTimeStatus) {
		return date < actualTime ? "past" : "today";
	}

	return todayTimeStatus;
};

console.log(getTodoTimeStatus(todos));

const deleteTodo = (todos, id) => {
	return todos.filter((todo) => todo.id !== id);
};

///
const getCompletedTodos = (todos) => {
	return todos.filter((todo) => todo.completed);
};

//
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
const getTodosStats = (todos) => {
	return todos.reduce(
		(acc, todo) => {
			acc.total++;

			if (todo.completed) {
				acc.completed++;
			} else {
				acc.active++;
			}

			return acc;
		},
		{ total: 0, completed: 0, active: 0 },
	);
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
		const todoDate = parseDate(todo.dueDate);
		const status = todayCheck(todoDate);

		if (status === "past") {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

//

const groupTodosByStatus = (todos) => {
	return todos.reduce(
		(acc, todo) => {
			const todoDate = parseDate(todo.dueDate);
			const status = todayCheck(todoDate);
			if (todo.completed) {
				acc.completed.push(todo);
			} else if (status === "past") {
				acc.overdue.push(todo);
			} else {
				acc.active.push(todo);
			}
			return acc;
		},
		{ active: [], completed: [], overdue: [] },
	);
};

// Function for today date without time and compare the dates with getTime()

const getTodayTodos = (todos) => {
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			return acc;
		}
		const todoDate = parseDate(todo.dueDate);
		const status = todayCheck(todoDate);
		if (status === "today") {
			acc.push(todo);
		}
		return acc;
	}, []);
};

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
		active: stats.active.length,
		overdue: stats.overdue.length,
		today: getTodayTodos(todos).length,
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
			const todoDate = parseDate(todo.dueDate);
			const status = todayCheck(todoDate);
			return status === "future";
		})
		.sort((todoA, todoB) => {
			const dateA = parseDate(todoA.dueDate).getTime();
			const dateB = parseDate(todoB.dueDate).getTime();

			return dateA - dateB;
		});
};

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

			if (status !== "past") {
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
const groupActiveTodosByDate = (todos) => {
	return todos.reduce(
		(acc, todo) => {
			if (todo.completed) {
				return acc;
			}
			const status = getTodoStatus(todo);
			if (status === "past") {
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
console.log(groupActiveTodosByDate(todos));

///////////////////
// 10.04.2026
//////////////////

const getTodayTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (todo.completed) {
			return acc;
		}
		const todoDate = parseDate(todo.dueDate);
		const status = todayCheck(todoDate);
		if (status === "today") {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

const getNearestUpcomingTodo = (todos) => {
	const upcoming = getUpcomingTodos(todos);
	return upcoming[0] || null;
};
