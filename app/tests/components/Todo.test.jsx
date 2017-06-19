var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {

  it('Should exist', () => {

    expect(Todo).toExist();
  });

  it('Should call onToggleCompleted with te right ID', () => {
    var spy = expect.createSpy();
    var todoItem = {id: 14, text: 'a Text', completed: false};
    var todo = TestUtils.renderIntoDocument(<Todo {...todoItem} onToggleCompleted={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(14);
  });
});
