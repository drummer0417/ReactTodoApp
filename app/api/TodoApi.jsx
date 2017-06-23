var $ = require('jQuery');

var setTodos = function(todos) {
    if ($.isArray(todos)) {
      console.log('in setTodos, todos: ', todos);
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
  var filteredTodos = todos;

  // Filer by showCompleted
  filteredTodos = filteredTodos.filter((todo) =>{
    return showCompleted || !todo.completed ;
  });
  console.log('filteredTodos:', JSON.stringify(filteredTodos, undefined, 2));
  return filteredTodos;
}

module.exports = {setTodos, getTodos, filterTodos};
