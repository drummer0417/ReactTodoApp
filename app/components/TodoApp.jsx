var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: true,
      searchText: '',
      todos: [
        { id: uuid(), text: 'Cycle to Best - Oirschot - FB', completed: false },
        { id: uuid(), text: 'Get a coffee', completed: false },
        { id: uuid(), text: 'Bikes to Patrick', completed: true },
        { id: uuid(), text: 'Car to KwikFit to fix tire', completed: true },
        { id: uuid(), text: 'Get cheep beers from EmTe', completed: false },
      ]
    }
  },
  handleAddTodo: function(text) {
    this.setState(
      {todos:  [
        ...this.state.todos,
        { id: uuid(), text, completed: false}
      ]}
  )},
  handleToggleCompleted: function(id) {
    console.log('in handleToggleCompleted, id ', id);
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText) {
    console.log('In handleSearch: text/compl: ', searchText + ' / ' + showCompleted);
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;
    return(
      <div>
        <h1>Todo App.nl </h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} handleAddTodo={this.handleAddTodo} onToggleCompleted={this.handleToggleCompleted} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
