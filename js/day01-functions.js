const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-08" },
	{ id: 2, title: "Code", completed: true, dueDate: "2026-05-08" },
	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12" },
	{ id: 4, title: "Read", completed: false, dueDate: "2026-05-07" },
];

// /// 05.04.2026 Sunday

const getToday = () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return today;
};

// Function to normalize date string

const normalizeDate = (dateString) => {
	const date = new Date(dateString);
	date.setHours(0, 0, 0, 0);
	return date;
};

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
	return todos.filter((todo) => todo.completed).map((todo) => todo.title);
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
	const today = getToday();
	return todos.reduce((acc, todo) => {
		const todoDate = normalizeDate(todo.dueDate);

		if (!todo.completed && todoDate < today) {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

//

const groupTodosByStatus = (todos) => {
	const today = getToday();
	return todos.reduce(
		(acc, todo) => {
			const todoDate = normalizeDate(todo.dueDate);
			if (todo.completed) {
				acc.completed.push(todo);
			} else if (todoDate < today) {
				acc.overdue.push(todo);
			} else {
				acc.active.push(todo);
			}
			return acc;
		},
		{ active: [], completed: [], overdue: [] },
	);
};

console.log(groupTodosByStatus(todos));

// Function for today date without time and compare the dates with getTime()

const getTodayTodos = (todos) => {
	const today = getToday();
	return todos.reduce((acc, todo) => {
		const todoDate = normalizeDate(todo.dueDate);
		if (!todo.completed && todoDate.getTime() === today.getTime()) {
			acc.push(todo);
		}
		return acc;
	}, []);
};

console.log(getTodayTodos(todos));

const markTodoCompleted = (todos, id) => {
	return todos.map((todo) => {
		return todo.id === id ? { ...todo, completed: true } : todo;
	});
};

console.log(markTodoCompleted(todos, 2));

const getDashBoardData = (todos) => {
	const stats = groupTodosByStatus(todos);
	return {
		total: todos.length,
		completed: stats.completed.length,
		active: stats.active.length,
		overdue: stats.overdue.length,
		today: getTodayTodos(todos).length,
	};
};

console.log(getDashBoardData(todos));

const getTodayTodosFilter = (todos) => {
	const today = getToday();
	return todos.filter((todo) => {
		const todoDate = normalizeDate(todo.dueDate);
		return !todo.completed && todoDate.getTime() === today.getTime();
	});
};

console.log(getTodayTodosFilter(todos));

const sortTodosByDate = (todos) => {
	return [...todos].sort((todoA, todoB) => {
		const dateA = normalizeDate(todoA.dueDate).getTime();
		const dateB = normalizeDate(todoB.dueDate).getTime();

		return dateA - dateB; // najstarsze → najnowsze
	});
};

console.log(sortTodosByDate(todos));

////////////////
// 09.04.2026

const getUpcomingTodos = (todos) => {
	const today = getToday();
	return todos
		.filter((todo) => {
			const todoDate = normalizeDate(todo.dueDate);
			return !todo.completed && todoDate > today;
		})
		.sort((todoA, todoB) => {
			const dateA = normalizeDate(todoA.dueDate).getTime();
			const dateB = normalizeDate(todoB.dueDate).getTime();

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

console.log(getCompletionRate(todos));

const getOverdueTodos = (todos) => {
	const today = getToday();
	console.log(todos);
	return todos
		.filter((todo) => {
			const todoDate = normalizeDate(todo.dueDate);

			return !todo.completed && todoDate < today;
		})
		.sort((overdueA, overdueB) => {
			const dateA = normalizeDate(overdueA.dueDate).getTime();
			const dateB = normalizeDate(overdueB.dueDate).getTime();
			return dateA - dateB;
		});
};

console.log(getOverdueTodos(todos));

///////////////////
const groupActiveTodosByDate = (todos) => {
	const today = getToday().getTime();

	return todos.reduce(
		(acc, todo) => {
			const todoDate = normalizeDate(todo.dueDate).getTime();
			if (!todo.completed && todoDate < today) {
				acc.overdue.push(todo);
				return acc;
			} else if (!todo.completed && todoDate === today) {
				acc.today.push(todo);
				return acc;
			} else if (!todo.completed && todoDate > today) {
				acc.future.push(todo);
				return acc;
			}
			return acc;
		},
		{ overdue: [], today: [], future: [] },
	);
};

console.log(groupActiveTodosByDate(todos));
