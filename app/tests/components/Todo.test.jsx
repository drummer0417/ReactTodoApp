var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var actions = require('actions');
var {Todo} = require('Todo');

describe('Todo', () => {

  it('Should exist', () => {

    expect(Todo).toExist();
  });

  it('Should call dispatch toggleTodo action on click', () => {
    var spy = expect.createSpy();
    var todoItem = {id: 14, text: 'a Text', completed: false, completedAt: '321'};
    var action = actions.startToggleTodo(todoItem.id, !todoItem.completed);

    var todo = TestUtils.renderIntoDocument(<Todo {...todoItem} dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
