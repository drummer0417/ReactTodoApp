var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

  it('Should exist', () => {

    expect(TodoApp).toExist();
  });

  it('should add todo to state.todos on handleAddTodo', () => {
    var todoText = 'Add new todo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />)

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    var {todos} = todoApp.state;
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe(todoText);

  });
});
