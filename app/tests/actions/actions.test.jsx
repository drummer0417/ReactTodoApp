import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import expect from 'expect';

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

  it('Should create todo and dispatch ADD_TODO', (done) => {

    const store = createMockStore({});
    const todoText = 'Perform Async test';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {

      const actions = store.getActions();
      expect(actions[0]).toInclude({type: 'ADD_TODO'});
      expect(actions[0].todo).toInclude({text: todoText});
      done();
     }).catch(done);
   });

  it('Should generate toggelShowCompleted action', () => {
    var action =  {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    expect(actions.toggleShowCompleted()).toEqual(action);
  });

  it('Should generate toggleTodo action', () => {
    var action =  {
      type: 'TOGGLE_TODO',
      id: 1234
    }

    expect(actions.toggleTodo(1234)).toEqual(action);
  });

});
