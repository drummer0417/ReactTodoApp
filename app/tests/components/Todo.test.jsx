var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {Todo} = require('Todo');

describe('Todo', () => {

  it('Should exist', () => {

    expect(Todo).toExist();
  });

  it('Should call dispatch toggleTodo action on click', () => {
    var spy = expect.createSpy();
    var todoItem = {id: 14, text: 'a Text', completed: false};
    var todo = TestUtils.renderIntoDocument(<Todo {...todoItem} dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoItem.id
    });
  });
});
