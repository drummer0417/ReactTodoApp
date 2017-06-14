var React = require('react');

var Test = require('Test');

var TodoApp = React.createClass({

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
