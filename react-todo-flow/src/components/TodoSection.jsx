import TodoItem from "./TodoItem";

const TodoSection = ({ todos, heading }) => {
	return (
		<section className='todo-section'>
			<h2>{heading}</h2>
			<ul className='todo-list'>
				{todos.map((todo) => (
					<TodoItem
						todo={todo}
						key={todo.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default TodoSection;
