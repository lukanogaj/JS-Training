import { prepareTodoList } from "../helpers/prepareTodoList.js";

export const getDashboardDataCounts = (todos, todayDate) => {
	const dashboardDataCounts = prepareTodoList(todos, todayDate).reduce(
		(acc, todo) => {
			if (todo.completed) {
				acc.completed += 1;
			} else {
				acc.active += 1;

				acc[todo.status] += 1;
			}

			return acc;
		},
		{ today: 0, overdue: 0, future: 0, completed: 0, active: 0 },
	);
	return dashboardDataCounts;
};
