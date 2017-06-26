var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {

  it('Should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render 5 todo items', () => {
    // create mock data
    var todos =  [
      { id: 1, text: 'Cycle to Best - Oirschot - FB' },
      { id: 2, text: 'Get a coffee' },
      { id: 3, text: 'Bikes to Patrick' },
      { id: 4, text: 'Car to KwikFit to fix tire' },
      { id: 5, text: 'Get cheep beers from EmTe' },
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    // var $el = $(ReactDOM.findDOMNode(todoList)); console.log('todos $el: ', $el); var $todos =
    // $el.find('div'); expect($todos.length).toBe(5);

    expect(todoComponents.length).toBe(5);

  });

  it('Should render no todo\'s message if no todos to display', () => {
    // create mock data
    var todos =  [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
