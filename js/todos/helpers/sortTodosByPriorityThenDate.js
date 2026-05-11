export const sortTodosByPriorityThenDate = (todos) => {
	const sortedTodos = [...todos].sort((todoA, todoB) => {
		const priorityResult = todoA.priorityOrder - todoB.priorityOrder;
		return priorityResult || todoA.dayTime - todoB.dayTime;
	});
	return sortedTodos;
};
