var React = require('react');
var {connect} = require('react-redux');

// var Todo = require('Todo');         ------- replace this require by import to be able to
//                                     ------- grab the defalt (export default....)
import Todo from 'Todo';
var AddTodo = require('AddTodo');

export var TodoList = React.createClass({

  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return<p className="container__message">You've got nothing to do</p>
      }
      return todos.map((todo) => {
        return (<Todo key={todo.id} {...todo} />)
      });
    };

    return (
      <div name='todo'>
        {renderTodos()}
      </div>
    );
  }
});

export default connect((state) => {
  return {
    todos: state.todos
  };
}) (TodoList);
