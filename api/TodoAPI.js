module.exports = {
  getTodos: function () {
    var data = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }

    if (Array.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  },
  setTodos: function (todos) {
    if (Array.isArray(todos)) {
      var data = JSON.stringify(todos);
      localStorage.setItem('todos', data);
    }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    filteredTodos = todos.filter(function (todo) {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter(function (todo) {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    filteredTodos.sort(function (a, b) {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}