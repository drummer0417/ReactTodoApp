var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('Store: New state: ' + JSON.stringify(store.getState(), undefined, 2));
});

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
