import { getActiveTodos } from "./getActiveTodos.js";
import { filterTodosByStatus } from "./filterTodosByStatus.js";
import { sortTodosByPriorityThenDate } from "./sortTodosByPriorityThenDate.js";
import { prepareTodoList } from "./prepareTodoList.js";

export const selectSortedActiveTodosByStatus = (
	todos,
	targetStatus,
	todayDate,
) => {
	const activeTodos = getActiveTodos(todos);
	const preparedTodos = prepareTodoList(activeTodos, todayDate);
	const filteredTodos = filterTodosByStatus(preparedTodos, targetStatus);
	return sortTodosByPriorityThenDate(filteredTodos);
};
