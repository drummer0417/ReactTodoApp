var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      todos: [
        { id: 1, text: 'Cycle to Best - Oirschot - FB' },
        { id: 2, text: 'Get a coffee' },
        { id: 3, text: 'Bikes to Patrick' },
        { id: 4, text: 'Car to KwikFit to fix tire' },
        { id: 5, text: 'Get cheep beers from EmTe' },
      ]
    }
  },
  render: function() {
    var {todos} = this.state;
    return(
      <div>
        <h1>Todo App.nl </h1>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
