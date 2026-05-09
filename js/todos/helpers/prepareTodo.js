import { PRIORITY_ORDER } from "../constants/priorityOrder.js";
import { normalizeToDay } from "./normalizeToDay.js";
import { getTodoStatus } from "./getTodoStatus.js";
export const prepareTodo = (todo, todayDate) => {
	return {
		...todo,
		status: getTodoStatus(todo, todayDate),
		priorityOrder: PRIORITY_ORDER[todo.priority] || 3,
		dayTime: normalizeToDay(todo.dueDate).getTime(),
	};
};
