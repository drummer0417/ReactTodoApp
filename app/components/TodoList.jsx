var React = require('react');
var {connect} = require('react-redux');

// var Todo = require('Todo');         ------- replace this require by import to be able to
//                                     ------- grab the defalt (export default....)
import Todo from 'Todo';
import TodoApi from 'TodoApi';
import AddTodo from 'AddTodo';

export var TodoList = React.createClass({

  render: function () {
    var {todos, showCompleted, searchText, auth} = this.props;

    var renderTodos = () => {
      // console.log('uid::::::::: ', auth.uid);
      var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return<p className="container__message">You've got nothing to do</p>
      }
      return filteredTodos.map((todo) => {
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
  return state
}) (TodoList);
