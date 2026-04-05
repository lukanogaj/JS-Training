const todos = [
	{ id: 1, title: "Gym", completed: false, dueDate: "2026-03-10" },
	{ id: 2, title: "Code", completed: true, dueDate: "2026-05-08" },
	{ id: 3, title: "Shop", completed: true, dueDate: "2026-05-12" },
	{ id: 4, title: "Read", completed: false, dueDate: "2026-05-07" },
];

/// 05.04.2026 Sunday

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
