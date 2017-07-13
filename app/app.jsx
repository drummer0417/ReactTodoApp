var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// var TodoApp = require('TodoApp');
import TodoApp from 'TodoApp';
import Login from 'Login';
var TodoApi = require('TodoApi');
var actions = require('actions');

// import './../playground/firebase/index';

store.dispatch(actions.startInitializeTodos());
// store.dispatch(actions.initializeTodos(initialTodos));

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load css: actually scss / sass
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="/todos" component={TodoApp}/>
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
