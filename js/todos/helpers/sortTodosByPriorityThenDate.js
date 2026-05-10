export const sortTodosByPriorityThenDate = (todos) => {
	const sortedTodos = todos.sort((todoA, todoB) => {
		const priorityResult = todoA.priorityOrder - todoB.priorityOrder;
		if (priorityResult !== 0) {
			return priorityResult;
		}
		return todoA.dayTime - todoB.dayTime;
	});
	return sortedTodos;
};
