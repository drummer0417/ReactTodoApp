var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import {connect} from 'react-redux';

export var TodoApi = require('TodoApi');

var TodoApp = React.createClass({
  getInitialState: function() {
      return {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    }
  },
  componentDidUpdate: function() {
    TodoApi.setTodos(this.state.todos);
  },
  // handleAddTodo: function(text) {
  //   var timestamp = moment().unix();
  //   this.setState(
  //     {todos:  [
  //       ...this.state.todos,
  //       { id: uuid(),
  //         text,
  //         createdAt: timestamp,
  //         completedAt: undefined,
  //         completed: false
  //       }
  //     ]}
  // )},
  // handleToggleCompleted: function(id) {
  //   var updatedTodos = this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed? moment().unix(): undefined;
  //     }
  //     return todo;
  //   });
  //   this.setState({todos: updatedTodos});
  // },
  // handleSearch: function(showCompleted, searchText) {
  //   this.setState({
  //     showCompleted,
  //     searchText: searchText
  //   })
  // },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

    return(
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className='row'>
          <div className='column small-centered small-12 medium-11 large-5 '>
            <div className='container'>
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList />
              <AddTodo  />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
// export default connect((state) => {
//   return state;
// }) (TodoApp);
