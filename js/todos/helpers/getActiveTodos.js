export const getActiveTodos = (todos) => {
	return todos.filter((todo) => {
		return !todo.completed;
	});
};
