var React = require('react');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// var TodoApp = require('TodoApp');
import firebase from 'firebase';
import Login from 'Login';
import TodoApp from 'TodoApp';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
}

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('todos');
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="/todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
)
