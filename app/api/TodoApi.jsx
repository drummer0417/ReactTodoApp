var $ = require('jQuery');

var setTodos = function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos',  JSON.stringify(todos));
      return todos;
    }
}
var getTodos = function() {
  var todosString = localStorage.getItem('todos');
  var todos = [];
  try {
     todos = JSON.parse(todosString);
  } catch (e) {
    // ignore... empty array will be returneed
  }
  return $.isArray(todos) ? todos: [];
}

var filterTodos = function(todos, showCompleted, searchText){

searchText = searchText?  searchText.toLowerCase() : "";

// filter first
  var filteredTodos = todos.filter((todo) => {
      return showCompleted || !todo.completed ;
  });

  // filter on searchText
  filteredTodos = filteredTodos.filter((todo) => {
    if (!searchText || searchText.length == 0 ) {
      return true;
    } else if (todo.text.toLowerCase().indexOf(searchText) === -1) {
      return false;
    } else {
      return true;
    }
  });

  // then sort
  filteredTodos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else { // a.completed and b.completed are equal

      var sortDateA = a.completed? a.completedAt: a.createdAt;
      var sortDateB = b.completed? b.completedAt: b.createdAt;

      if (sortDateA > sortDateB) {
        return -1;
      } else if (sortDateA < sortDateB){
        return 1;
      } else {
        return 0;
      }
    }
  });

  return filteredTodos;
}

module.exports = {setTodos, getTodos, filterTodos};
