import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'initFirebase';
import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

  it('Should generate searchText action', () => {
    var action =  {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some searchText'
    }
    expect(actions.setSearchText('Some searchText')).toEqual(action);
  });

  it('Should generate add initial todos action object', () => {
    var initialTodos = [
      {id: 1, text: 'todo 1', completed: false, createdAt: 23423434},
      {id: 2, text: 'todo 2', completed: true, createdAt: 23423444},
      {id: 3, text: 'todo 3', completed: false, createdAt: 23423554}
    ];
    var action = {
      type: 'INITIALIZE_TODOS',
      initialTodos: initialTodos
    };
    var res = actions.initializeTodos(initialTodos);
    expect(res).toEqual(action);
  })

  it('Should generate addTodo action', () => {
    var todo: {
      text: 'A new todo',
      completd: false,
      createdAt: 123,
      completedAt: undefined
    }
    var action =  {
      type: 'ADD_TODO',
      todo
    }
    expect(actions.addTodo(todo)).toEqual(action);
  });

  it('Should generate toggelShowCompleted action', () => {
    var action =  {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    expect(actions.toggleShowCompleted()).toEqual(action);
  });

  it('Should generate updateTodo action', () => {
    var id = '321';
    var updates = {
      completed: false,
      completedAt: 123123
    };
    var res =  {
      type: 'UPDATE_TODO',
      id: '321',
      updates: {
        completed: false,
        completedAt: 123123
      }
    }
    expect(actions.updateTodo(id, updates)).toContain(res);
  });

  it('Should generate login action object', () => {
    var action = {
      type: 'LOGIN',
      uid: 123
    }
    expect(actions.login(123)).toEqual(action);
  });

  it('Should generate logout action', () => {
    var action = {
      type: 'LOGOUT'
    };
    expect(actions.logout()).toEqual(action)
  });

  describe('Tests with firebase todos', () => {

    var testTodoRef;
    var uid;
    var todosRef;

    beforeEach ((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef.remove();
      }).then(() => {
        testTodoRef = todosRef.push();
        return testTodoRef.set({
          text: 'testTodo',
          completed: false,
          createdAt: 123123123
        });
      }).then(() => {
        done();
      }).catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });

    it('Should toggle todo and dispatch UPDATE_TODO action ', (done) => {
      const store = createMockStore({auth: {uid: uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        var mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        })
        expect(mockActions[0].updates.completedAt).toBeGreaterThan(0);
        done();
      }, done).catch(done);;
    });

    it('Should return all todos (1) in an array', (done) => {

      const store = createMockStore({auth: {uid: uid}});
      const action = actions.startInitializeTodos();
      store.dispatch(action).then(() => {
        var mockActions = store.getActions();

        expect(mockActions[0].initialTodos.length).toBe(1);
        expect(mockActions[0].type).toBe('INITIALIZE_TODOS');
        expect(mockActions[0].initialTodos[0]).toInclude(
            {id: testTodoRef.key, text: 'testTodo'}
          );
        done();
      }, done).catch(done);
    });

    it('Should create todo and dispatch ADD_TODO', (done) => {

      const store = createMockStore({auth: {uid: uid}});
      const todoText = 'Perform Async test';
      var id;
      store.dispatch(actions.startAddTodo(todoText)).then(() => {

        const actions = store.getActions();
        id = actions[0].todo.id;
        expect(actions[0]).toInclude({type: 'ADD_TODO'});
        expect(actions[0].todo).toInclude({text: todoText});
        firebaseRef.child('todos/' + id).remove();
        done();
      }).catch(done);
    });
  });
});
