import { prepareTodo } from "./prepareTodo.js";
export const prepareTodoList = (todos, todayDate) => {
	return todos.map((todo) => {
		return prepareTodo(todo, todayDate);
	});
};
