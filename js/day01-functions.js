const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-10" },
	{ id: 2, title: "Code", completed: true, dueDate: "2026-05-08" },
	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12" },
	{ id: 4, title: "Read", completed: false, dueDate: "2026-05-07" },
];

/// 05.04.2026 Sunday

const markTodoCompleted = (todos, id) => {
	return todos.map((todo) =>
		todo.id === id ? { ...todo, completed: true } : todo,
	);
};

const toggleTodoCompleted = (todos, id) => {
	return todos.map((todo) =>
		todo.id === id ? { ...todo, completed: !todo.completed } : todo,
	);
};

const updateTodoTitle = (todos, id, newTitle) => {
	return todos.map((todo) =>
		todo.id === id ? { ...todo, title: newTitle } : todo,
	);
};

const getCompletedTodos = (todos) => {
	return todos.filter((todo) => todo.completed);
};

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

const getActiveTitles = (todos) => {
	return todos.reduce((acc, todo) => {
		if (!todo.completed) {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};

const getOverdueTitles = (todos) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	return todos.reduce((acc, todo) => {
		const todoDate = new Date(todo.dueDate);
		todoDate.setHours(0, 0, 0, 0);

		if (!todo.completed && todoDate < today) {
			acc.push(todo.title);
		}
		return acc;
	}, []);
};
