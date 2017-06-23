var expect = require('expect');

var TodoApi = require('TodoApi');

beforeEach(() => {
  localStorage.removeItem('todos');
});

describe('TodoApi', () => {

  it('Should exist', () => {

    expect(TodoApi).toExist();
  })

  describe('SetTodos', () =>{

    it('Should get a valid todos array from localStorage', () => {
      var todos = [{id: 1, text: 'aTodoText', completed: false}];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toInclude({id: 1, text: 'aTodoText', completed: false});
    })

    it('Should not set an invalid array', () =>{
      localStorage.removeItem('todos');

      var invalidArray = {id: 1, text: 'text', completed: false};
      TodoApi.setTodos(invalidArray);

      var actual = localStorage.getItem('todos');
      expect(actual).toBe(null);
    })
  });

  describe('GetTodos', () =>{

    it('Should set valid todos array in localStorage', () => {
      var todos = [{id: 1, text: 'aTodoText', completed: false}];
      TodoApi.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      var actualTodo = actualTodos[0];

      expect(actualTodo).toInclude({id: 1, text: 'aTodoText', completed: false});
    })

    it('Should return an empty array', () => {
      localStorage.setItem('todos', {id: 1, text: 'sdfdfsfs', completed: false})
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos.length).toBe(0);
    });
  });

});
