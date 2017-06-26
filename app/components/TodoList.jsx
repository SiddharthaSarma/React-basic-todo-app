var React = require('react');
var Todo = require('./Todo.jsx');

var TodoList = React.createClass({
	render: function () {
		var todos = this.props.todos;
		var onToggle = this.props.onToggle;
		var renderTodos = function () {
			return todos.map(function (todo) {
				return (
					<Todo key={todo.id} {...todo} onToggleTodo={onToggle} />
				)
			});
		};
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;