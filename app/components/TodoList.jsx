var React = require('react');
var Todo = require('./Todo.jsx');

var TodoList = React.createClass({
	render: function() {
		var {todos, onToggle} = this.props;
		var renderTodos = function() {
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggleTodo={onToggle}/>
				)
			});
		};
		return(
      <div>
			 {renderTodos()}
      </div>
		);
	}
});

module.exports = TodoList;