var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var store = require('configureStore').configure();
var {hashHistory} = require('react-router');

// var TodoApp = require('TodoApp');
var TodoApi = require('TodoApi');
var actions = require('actions');
import firebase from 'firebase';
import router from 'router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startInitializeTodos());
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
    store.dispatch(actions.logout());
  }
});
// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load css: actually scss / sass
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById("app")
);
