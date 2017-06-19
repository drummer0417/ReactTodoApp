var React = require('react');

var Todo = require('Todo');
var AddTodo = require('AddTodo');

var TodoList = React.createClass({

  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return (<Todo key={todo.id} {...todo} onToggleCompleted={this.props.onToggleCompleted}/>)
      });
    };

    return (
      <div name='todo'>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
