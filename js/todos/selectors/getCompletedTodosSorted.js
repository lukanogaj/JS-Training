export const getCompletedTodosSorted = (todos) => {
	return todos.filter((todo) => {
		return todo.completed;
	});
};

export default getCompletedTodosSorted;
