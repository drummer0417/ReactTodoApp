var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      todos: [
        { id: 1, text: 'Cycle to Best - Oirschot - FB' },
        { id: 2, text: 'Get a coffee' },
        { id: 3, text: 'Bikes to Patrick' },
        { id: 4, text: 'Car to KwikFit to fix tire' },
        { id: 5, text: 'Get cheep beers from EmTe' },
      ],
      highestId: 5
    }
  },
  handleAddTodo: function(text) {

    var {todos, highestId} = this.state;
    var newId = highestId + 1;
    todos.push({id: newId, text});
    this.setState({todos, highestId: newId});
  },
  render: function() {
    var {todos} = this.state;
    return(
      <div>
        <h1>Todo App.nl </h1>
        <TodoList todos={todos} handleAddTodo={this.handleAddTodo} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
