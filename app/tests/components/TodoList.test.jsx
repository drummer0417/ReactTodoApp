var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
import {Provider} from 'react-redux';
// var TodoList = require('TodoList'); ------- replace this require by import to be able to
//                                     ------- grab the defalt (export default....)
// var Todo = require('Todo');
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {

  it('Should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render 5 todo items', () => {
    // create mock data
    var todos =  [
      { id: 1, text: 'Cycle to Best - Oirschot - FB', completed: false, completedAt: undefined, createdAt: 500 },
      { id: 2, text: 'Get a coffee', completed: false, completedAt: undefined, createdAt: 500 },
      { id: 3, text: 'Bikes to Patrick', completed: false, completedAt: undefined, createdAt: 500 },
      { id: 4, text: 'Car to KwikFit to fix tire', completed: false, completedAt: undefined, createdAt: 500 },
      { id: 5, text: 'Get cheep beers from EmTe', completed: false, completedAt: undefined, createdAt: 500 },
    ];
    var store = configure({todos});
    // var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todoComponents.length).toBe(5);

  });

  it('Should render "No todo\'s" message if no todos to display', () => {
    // create mock data
    var todos =  [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
