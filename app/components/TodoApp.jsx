var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'Cycle to Best - Oirschot - FB' },
        { id: uuid(), text: 'Get a coffee' },
        { id: uuid(), text: 'Bikes to Patrick' },
        { id: uuid(), text: 'Car to KwikFit to fix tire' },
        { id: uuid(), text: 'Get cheep beers from EmTe' },
      ]
    }
  },
  handleAddTodo: function(text) {
    this.setState(
      {todos:  [
        ...this.state.todos,
        { id: uuid(), text}
      ]}
  )},
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
        <TodoList todos={todos} handleAddTodo={this.handleAddTodo} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
