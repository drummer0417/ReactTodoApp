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
    var todoRef = firebaseRef.child('todos').push(todo)

    todoRef.then(() =>{
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
    firebaseRef.child('todos').once('value')
    .then((snapshot) => {
      var todosArray = [];
      var todoElements = undefined;
      var todosKeys = Object.keys(snapshot.val());
      // console.log('todos: ', todos);
      todos.forEach((key) => {
        todoValues = todoKesy[key];
        todosArray = [...todosArray, {id: key, ...todoElements}]
      })
      dispatch(initializeTodos(todosArray));
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

export var toggleTodo = (id)  => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
