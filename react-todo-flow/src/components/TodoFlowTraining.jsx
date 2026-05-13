import { mockTodos } from "../data/mockTodos";
import { getTodayTodosSorted } from "../../../js/todos/selectors/getTodayTodosSorted";
import { getOverdueTodosSorted } from "../../../js/todos/selectors/getOverdueTodosSorted";
import { getFutureTodosSorted } from "../../../js/todos/selectors/getFutureTodosSorted";

const TodoFlowTraining = () => {
	const todayDate = new Date("2026-04-21T09:00:00");
	const todayTodos = getTodayTodosSorted(mockTodos, todayDate);
	const overdueTodos = getOverdueTodosSorted(mockTodos, todayDate);
	const futureTodos = getFutureTodosSorted(mockTodos, todayDate);

	return (
		<div>
			<h1>Todo Flow Training </h1>
			<section className='todo-section'>
				<h2>Today Todos</h2>
				<ul className='todo-list'>
					{todayTodos.map((todo) => (
						<li
							className='todo-item'
							key={todo.id}>
							{todo.title}
						</li>
					))}
				</ul>
			</section>
			<section className='todo-section'>
				<h2>Overdue Todos</h2>
				<ul className='todo-list'>
					{overdueTodos.map((todo) => (
						<li
							className='todo-item'
							key={todo.id}>
							{todo.title}
						</li>
					))}
				</ul>
			</section>
			<section className='todo-section'>
				<h2>Future Todos</h2>
				<ul className='todo-list'>
					{futureTodos.map((todo) => (
						<li
							className='todo-item'
							key={todo.id}>
							{todo.title}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default TodoFlowTraining;
