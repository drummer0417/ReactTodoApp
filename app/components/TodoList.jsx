var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {

      console.log('in renderTodos()');
      return todos.map((todo) => {
        console.log('todo key:', todo.id);
        return (<Todo key={todo.id} {...todo}/>)
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
