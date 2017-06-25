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

  describe('FilterTodos', () => {

    var todos  = [
      {id: 1, text: 'some text here', completed: true},
      {id: 2, text: 'other Text' , completed: false},
      {id: 3, text: 'and even more text here', completed: true}
    ];

     it('Should return all values if completed is true', () => {
       var filteredTodos = TodoApi.filterTodos(todos, true, '');
       expect(filteredTodos.length).toBe(3);
     });

     it('Should only return totos if completed is false', () => {
       var filteredTodos = TodoApi.filterTodos(todos, false, '');
       expect(filteredTodos.length).toBe(1);
     });

     it('Should sort by completed, not completed first', () => {
       var filteredTodos = TodoApi.filterTodos(todos, true, '');
       expect(filteredTodos[0].completed).toBe(false);
     });

     it('Should return all todos if searchText is empty', () => {
       var filteredTodos = TodoApi.filterTodos(todos, true, '');
       expect(filteredTodos.length).toBe(3);
     })

     it('Should return all todos if searchText is empty', () => {
       var filteredTodos = TodoApi.filterTodos(todos, true, '');
       expect(filteredTodos.length).toBe(3);
     })

     it('Should return all todos with searchText equal to the given searchText', () => {
       var filteredTodos = TodoApi.filterTodos(todos, true, 'OTHER Text');
      //  expect(filteredTodos.length).toBe(1);
       expect(filteredTodos[0].text).toBe('other Text');
     })
   });
});
