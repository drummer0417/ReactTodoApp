var moment = require('moment');
var uuid = require('node-uuid');


export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };

    case 'LOGOUT':
      return {};

    default:
      return state;
  };
}

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
}

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
}

export var todosReducer = (state = [], action) => {
  switch (action.type){

    case 'INITIALIZE_TODOS':
      return action.initialTodos;

    case 'ADD_TODO':
      return [...state,
        action.todo
      ];

    case 'UPDATE_TODO':
      var updatedTodos = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
            }
          } else {
            return todo;
        }
      });
      return updatedTodos;

    case 'LOGOUT':
        return [];

    default:
      return state;
  };
};
