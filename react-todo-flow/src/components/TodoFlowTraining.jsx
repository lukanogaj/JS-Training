import TodoSection from "./TodoSection";
import { mockTodos } from "../data/mockTodos";
import { getTodayTodosSorted } from "../../../js/todos/selectors/getTodayTodosSorted";
import { getOverdueTodosSorted } from "../../../js/todos/selectors/getOverdueTodosSorted";
import { getFutureTodosSorted } from "../../../js/todos/selectors/getFutureTodosSorted";
import { getCompletedTodosSorted } from "../../../js/todos/selectors/getCompletedTodosSorted";

const TodoFlowTraining = () => {
	const todayDate = new Date("2026-04-21T09:00:00");
	const todayTodos = getTodayTodosSorted(mockTodos, todayDate);
	const futureTodos = getFutureTodosSorted(mockTodos, todayDate);
	const overdueTodos = getOverdueTodosSorted(mockTodos, todayDate);
	const completedTodos = getCompletedTodosSorted(mockTodos);

	const todoSections = [
		{ heading: "Today Todos", todos: todayTodos },
		{ heading: "Future Todos", todos: futureTodos },
		{ heading: "Overdue Todos", todos: overdueTodos },
		{ heading: "Completed Todos", todos: completedTodos },
	];

	return (
		<div>
			<h1>Todo Flow Training </h1>
			{todoSections.map((section) => (
				<TodoSection
					heading={section.heading}
					todos={section.todos}
					key={section.heading}
				/>
			))}
		</div>
	);
};

export default TodoFlowTraining;
