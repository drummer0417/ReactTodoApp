var moment = require('moment');
var uuid = require('node-uuid');

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
      var timestamp = moment().unix();
      return [...state,
        { id: uuid(),
          text: action.text,
          createdAt: timestamp,
          completedAt: undefined,
          completed: false
        }];

    case 'TOGGLE_TODO':

      var updatedTodos = state.map((todo) => {
        if (todo.id === action.id) {
          var newTodo = {
            ...todo,
            completed: !todo.completed,
            completedAt: todo.completed? undefined: moment().unix()
            }
          return newTodo;
          } else {
            return todo;
        }
      });
      // return state;
      return updatedTodos;
    default:
      return state;
  };
};
