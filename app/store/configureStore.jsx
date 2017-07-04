var redux = require('redux');

var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');


export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  // create store... if browser supports devTools then pass in the devTools otherwise
  // just pass in the function.
  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension? window.devToolsExtension(): f => f
  ));

  return store;
};
