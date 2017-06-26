var React = require('react');

var Todo = React.createClass({
	render: function () {
		var id = this.props.id;
		var text = this.props.text;
		var completed = this.props.completed;
		var onToggleTodo = this.props.onToggleTodo;
		return (
			<div id={id} onClick={() => {
				this.props.onToggleTodo(id);
			}}>
				<input type="checkbox" checked={completed} />
				{text}
			</div>
		)
	}
});

module.exports = Todo;