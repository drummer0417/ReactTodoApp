//
// deep-freeze-strict is used to test that the parms of the reducers are not
// modified. This is not permitted as reducers should be pure functions

var df = require('deep-freeze-strict');
var expect = require('expect');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('Should return the searchText', () => {
      var state = '';
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "the searchText"
      }
      expect(reducers.searchTextReducer(df(state), df(action))).toBe('the searchText');
    });

    it('Should return the default searchText if unknow type, which is ""', () => {
      var state = '';
      var action = {
        type: "unknown",
        searchText: "the searchText"
      }
      expect(reducers.searchTextReducer(df(state), df(action))).toBe('');
    });
  });

  describe('showCompletedReducer', () => {

    it('Should return the toggled showCompleted value, true in this case', () => {
      var state = false;
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      expect(reducers.showCompletedReducer(df(state), df(action))).toBe(true);
    });

    it('Should return the toggled showCompleted value, false in this case', () => {
      var state = true;
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      expect(reducers.showCompletedReducer(df(state), df(action))).toBe(false);
    });

    it('Should return the toggled showCompleted value, true in this case', () => {
      var state = false;
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      expect(reducers.showCompletedReducer(df(state), df(action))).toBe(true);
    });

    it('Should return the default state if unknow type, which is false', () => {
      var state = false;
      var action = {
        type: "unknown",
        toggleShowCompleted: false
      }
      expect(reducers.showCompletedReducer(df(state), df(action))).toBe(false);
    });
  });

  describe('todosReducer', () => {

    it('Should return array with new todo', () => {
      var state = [];
      var todo = {
        id: '123',
        text: 'implement todosReducer test case',
        completed: false,
        completedAt: undefined
      };
      var action = {
        type: 'ADD_TODO',
        todo
      }

      expect(reducers.todosReducer(df(state), df(action)).length).toBe(1);
      expect(reducers.todosReducer(df(state), df(action))[0]).toContain(todo);
    });

    it('Should toggle state to completed and fill date completed', () => {
      var state = [
        {id: 100, text: 'first todo', createdAt: moment().unix(), completed: false, completedAt: undefined},
        {id: 123, text: 'implement todosReducer test case', createdAt: moment().unix(), completed: false, completedAt: undefined},
        {id: 200, text: 'last todo', createdAt: moment().unix(), completed: false, completedAt: undefined}
      ];
      var action = {
        type: 'UPDATE_TODO',
        id: 123,
        updates: {completed: true, completedAt: 435454345},
      };

      var newTodos = reducers.todosReducer(df(state), df(action));
      expect(newTodos[1].completed).toBe(true);
      expect(newTodos.length).toBe(3);;
      var seconds = parseInt(newTodos[1].completedAt);
      expect(seconds).toBe(435454345);
    });

    it('Should toggle state completed to false and clear date completed', () => {
      var state = [
        {id: 100, text: 'first todo', createdAt: moment().unix(), completed: false, completedAt: undefined},
        {id: 123, text: 'implement todosReducer test case', createdAt: moment().unix(), completed: true, completedAt: 123232131},
        {id: 200, text: 'last todo', createdAt: moment().unix(), completed: false, completedAt: undefined}
      ];
      var action = {
        type: 'UPDATE_TODO',
        id: 123,
        updates: {completed: false, completedAt: undefined},
      };
      var newTodos = reducers.todosReducer(df(state), df(action));

      expect(newTodos.length).toBe(3);
      expect(newTodos[1].completed).toBe(false);
      expect(newTodos[1].completedAt).toBe(undefined);
    });

    it('Should add initial todos', () => {
      var initialTodos = [
        {id: 1, text: 'todo 1', completed: false, createdAt: 23423434},
        {id: 2, text: 'todo 2', completed: true, createdAt: 23423444},
        {id: 3, text: 'todo 3', completed: false, createdAt: 23423554}
      ];
      var action = {
        type: 'INITIALIZE_TODOS',
        initialTodos: initialTodos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(initialTodos.length);
      expect(res[1]).toEqual(initialTodos[1]);
    })

    it('Should cleanup todos on logout', () => {
      var initialTodos = [
        {id: 1, text: 'todo 1', completed: false, createdAt: 23423434},
        {id: 2, text: 'todo 2', completed: true, createdAt: 23423444},
        {id: 3, text: 'todo 3', completed: false, createdAt: 23423554}
      ];
      var cleanedUpTodos = [];
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.todosReducer(df(initialTodos), df(action));

      expect(res.length).toBe(0);
    })

  });

  describe('authReducer', () => {

      it('should store uid on login', () => {
        var action = {
          type: 'LOGIN',
          uid: '123abc'
        }
        var res = reducers.authReducer(undefined, df(action));
        expect(res).toEqual({
          uid: action.uid
        });
      });
      it('should remove uid on logout', () => {
        var action = {
          type: 'LOGOOUT'
        }
        var res = reducers.authReducer(undefined, df(action));
        expect(res).toEqual({});
      });
  });
});
