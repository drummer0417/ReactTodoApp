var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
var { Route, Router, IndexRoute, hashHistory } = require('react-router');


var TodoApp = require('TodoApp');
var TodoApi = require('TodoApi');
var actions = require('actions');

store.subscribe(() => {
  var state = store.getState();
  TodoApi.setTodos(state.todos);
  console.log('Store: New state: ' + JSON.stringify(state, undefined, 2));
});

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.initializeTodos(initialTodos));
// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load css: actually scss / sass
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,

  document.getElementById("app")
);
