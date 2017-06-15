var React = require('react');

var Test = require('Test');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      todos: [
        { id: 1, text: 'Walk he dog' },
        { id: 2, text: 'Get a coffee' },
        { id: 3, text: 'Have lunch, get a sandwich' },
      ]
    }
  },
  render: function() {
    return(
      <div>
        <h1>Todo App.nl </h1>
        <Test ccase='Kees' />
      </div>
    );
  }
});

module.exports = TodoApp;
