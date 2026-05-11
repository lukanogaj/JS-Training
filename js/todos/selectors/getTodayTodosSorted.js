import { selectSortedActiveTodosByStatus } from "../helpers/selectSortedActiveTodosByStatus.js";
import { TODO_STATUS } from "../constants/todoStatus.js";
export const getTodayTodosSorted = (todos, todayDate) => {
	return selectSortedActiveTodosByStatus(todos, TODO_STATUS.TODAY, todayDate);
};
