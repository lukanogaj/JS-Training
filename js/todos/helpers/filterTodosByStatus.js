export const filterTodosByStatus = (todos, targetStatus) => {
	return todos.filter((todo) => {
		return todo.status === targetStatus;
	});
};
