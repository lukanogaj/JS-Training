import { selectSortedActiveTodosByStatus } from "../helpers/selectSortedActiveTodosByStatus.js";
import { TODO_STATUS } from "../constants/todoStatus.js";
export const getOverdueTodosSorted = (todos, todayDate) => {
	return selectSortedActiveTodosByStatus(todos, TODO_STATUS.OVERDUE, todayDate);
};
