var expect = require('expect');
var React = require('react');
var {Provider} = require('react-redux');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
import {TodoApp} from 'TodoApp';

// var TodoList = require('TodoList') // ------- replace this require by import to be able to
//                                       ------- grab the defalt (export default....)
import TodoList from 'TodoList';

beforeEach(() => {
  localStorage.removeItem('todos');
});

describe('TodoApp', () => {

  it('Should exist', () => {

    expect(TodoApp).toExist();
  });

  it('Should render TodoList', () => {

    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )

    // grab TodoList component ane make sure it exists
    // first grab the TodoApp component from provider
    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    // next grab the TodoList component from TodoApp
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toBe(1);
  });
});
