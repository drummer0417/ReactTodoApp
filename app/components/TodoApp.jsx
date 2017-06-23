var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApi = require('TodoApi');

var TodoApp = React.createClass({
  getInitialState: function() {
      return {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    }
  },
  componentDidUpdate: function() {
    // console.log('in componentDidUpdate: ', this.state.todos);
    TodoApi.setTodos(this.state.todos);
  },
  handleAddTodo: function(text) {
    this.setState(
      {todos:  [
        ...this.state.todos,
        { id: uuid(), text, completed: false}
      ]}
  )},
  handleToggleCompleted: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

    return(
      <div>
        <h1>Todo App.nl </h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} handleAddTodo={this.handleAddTodo} onToggleCompleted={this.handleToggleCompleted} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
