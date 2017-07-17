import firebase, {firebaseRef, githubProvider} from 'initFirebase';
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
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
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
    var uid = getState().auth.uid;
    return firebaseRef.child(`users/${uid}/todos`).once('value').then((snapshot) => {
      var initialTodos = [];
      var todoKeysObject = snapshot.val() || {};
      var todoKeysArray = Object.keys(todoKeysObject);

      todoKeysArray.forEach((key) => {
        initialTodos = [...initialTodos, {id: key, ...todoKeysObject[key]}]
      })
      dispatch(initializeTodos(initialTodos));
    }, (error) => {
      console.log('error in startInitializeTodos: ', error);
    }).catch((error) => {
      console.log('in catch, error: ', error);
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
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
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

export var startLogin = () => {
  return (dispatch, getState) => {
    console.log('before call firebase');
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('user.uid', result.user.uid);
      // dispatch(login(result.user.uid));
    }, (error) => {
      console.log('Unable to authenticate: ', error);
    });
    // return firebase.auth().signInWithRedirect(githubProvider).then((result) => {
    //   console.log('Authentication OK: ', result);
    // }, (error) => {
    //   console.log('Unable to authenticate: ', error);
    // });
  };
}

export var startLogout = () => {
  return (dispatch, getState) =>  {
    return firebase.auth().signOut().then(() => {
      // dispatch(logout());
    });
  }
}

export var login = (uid) => {
  console.log('in actions.login(), uid: ', uid);
  return {
    type: 'LOGIN',
    uid
  }
}

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
}
