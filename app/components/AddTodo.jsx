var React = require('react');

var AddTodo = React.createClass({
  handleAddTodo: function (event) {
    event.preventDefault();
    if (this.refs.todoText.value.length > 0) {
      this.props.addTodo(this.refs.todoText.value);
      this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <form onSubmit={this.handleAddTodo}>
        <input type="text" ref="todoText" placeholder="Ex: Need to convert basic todo app to redux" />
        <button type="submit">Add</button>
      </form>
    );
  }
});

module.exports = AddTodo;