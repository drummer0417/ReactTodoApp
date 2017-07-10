import firebase, {firebaseRef} from 'initFirebase';
import moment from 'moment';

import actions from 'actions';

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      createdAt: moment().unix(),
      completedAt: null,
      completed: false
    };
    var todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
          ...todo,
          id: todoRef.key
      })
    )});
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startInitializeTodos = () => {
  return (dispatch, getState) => {
    return firebaseRef.child('todos').once('value').then((snapshot) => {
      var initialTodos = [];
      var todoKeysObject = snapshot.val() || {};
      var todoKeysArray = Object.keys(todoKeysObject);

      todoKeysArray.forEach((key) => {
        initialTodos = [...initialTodos, {id: key, ...todoKeysObject[key]}]
      })
      dispatch(initializeTodos(initialTodos));
    });
  }
};

export var initializeTodos = (todos) => {

  return {
    type: 'INITIALIZE_TODOS',
    initialTodos: todos
  };
};

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var startToggleTodo = (id, completed) => {

  return (dispatch, getState) => {
    var todoRef = firebaseRef.child('todos/' + id);
    var updates = {
      completed: completed,
      completedAt: completed? moment().unix(): null
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
}

export var updateTodo = (id, updates)  => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};
