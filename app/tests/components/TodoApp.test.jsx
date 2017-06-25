var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

beforeEach(() => {
  localStorage.removeItem('todos');
});

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
    var todo = todos[0];
    // expect(todos.length).toBe(1);
    expect(todo.text).toBe(todoText);
    expect(todo.createdAt).toBeA('number');
    expect(todo.completedAt).toNotExist();
  });

    it('Should call onToggleCompleted with te right ID', () => {

      var todoItem = [{
        id: 1,
        text: "A text",
        createdAt: 0,
        completedAt: undefined,
        completed: false
      }];
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({todos: todoItem})
      expect(todoApp.state.todos[0].completed === false);

      todoApp.handleToggleCompleted(1);
      var todo = todoApp.state.todos[0];
      expect(todo.completed === true);
      expect(todo.completedAt).toBeA('number');

    });

    it('Should remove completedAt when toggled from completed to not compled', () => {

      var todoItem = [{
        id: 1,
        text: "A text",
        createdAt: 4324323424,
        completedAt: 234424,
        completed: true
      }];
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({todos: todoItem});
      expect(todoApp.state.todos[0].completed === true);

      todoApp.handleToggleCompleted(1);
      expect(todoApp.state.todos[0].completed === false);
      expect(todoApp.state.todos[0].completedAt).toNotExist();
    });

});
