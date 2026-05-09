import { normalizeToDay } from "./normalizeToDay.js";
import { TODO_STATUS } from "../constants/todoStatus.js";
export const getTodoStatus = (todo, todayDate) => {
	const today = normalizeToDay(todayDate).getTime();
	const date = normalizeToDay(todo.dueDate).getTime();
	if (today === date) {
		return TODO_STATUS.TODAY;
	} else if (date < today) {
		return TODO_STATUS.OVERDUE;
	} else {
		return TODO_STATUS.FUTURE;
	}
};
