const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-10" },
	{ id: 2, title: "Code", completed: true, dueDate: "2026-05-08" },
	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12" },
	{ id: 4, title: "Read", completed: false, dueDate: "2026-05-07" },
];

/// 05.04.2026 Sunday
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

//

const groupTodosByStatus = (todos) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return todos.reduce(
		(acc, todo) => {
			const todoDate = new Date(todo.dueDate);
			todoDate.setHours(0, 0, 0, 0);
			if (todo.completed) {
				acc.completed.push(todo);
			} else if (!todo.completed && todoDate < today) {
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
