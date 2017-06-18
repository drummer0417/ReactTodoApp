var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {

  it('Should exist', () => {

    expect(AddTodo).toExist();
  });

  it('Should call handleAddTodo and pass entered text', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = "Hello";

    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith("Hello");
  })

  it('Should not call handleAddTo as there is no valid text entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = "";

    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  })


});
