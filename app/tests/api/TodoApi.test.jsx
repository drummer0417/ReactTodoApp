var expect = require('expect');

var TodoApi = require('TodoApi');

beforeEach(() => {
  localStorage.removeItem('todos');
});

describe('TodoApi', () => {

  it('Should exist', () => {

    expect(TodoApi).toExist();
  })

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
