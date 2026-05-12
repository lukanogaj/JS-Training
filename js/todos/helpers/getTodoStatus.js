import { normalizeToDay } from "./normalizeToDay.js";
import { TODO_STATUS } from "../constants/todoStatus.js";
export const getTodoStatus = (todo, todayDate) => {
	const today = normalizeToDay(todayDate);
	const date = normalizeToDay(todo.dueDate);
	if (date === null) {
		return TODO_STATUS.NO_DATE;
	}
	const todayTime = today.getTime();
	const dateTime = date.getTime();

	if (todayTime === dateTime) {
		return TODO_STATUS.TODAY;
	} else if (todayTime > dateTime) {
		return TODO_STATUS.OVERDUE;
	} else if (todayTime < dateTime) {
		return TODO_STATUS.FUTURE;
	}
};
