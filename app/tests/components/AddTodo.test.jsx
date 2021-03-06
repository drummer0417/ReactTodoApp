var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import  {AddTodo} from 'AddTodo';
import * as actions from 'actions';

describe('AddTodo', () => {

  it('Should exist', () => {

    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid todoText entered', () => {
    var spy = expect.createSpy();
    var todoText = 'This is a new Todo';
    var action = actions.startAddTodo(todoText);

    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);

  })

  it('Should not dispatch ADD_TODO when invalid todoText entered', () => {
    var spy = expect.createSpy();

    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = "";

    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  })


});
