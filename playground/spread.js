// function add (a, b) {   return a + b; }
//
// console.log(add(3, 4));
//
// var c = [3, 5];
//
// console.log(add(...c)); var groupA = ['Hans', 'Jacky']; var groupB = ['Cas', 'Anouk'];
//
// var final = [...groupA, 3, ...groupB];
//
// console.log(final);

var p1 = ['Hans', 55];
var p2 = ['Jacky', 50];

function sayHello(name, age) {
  console.log('My name is', name, 'and i\'m', age);
}

sayHello(...p1);
sayHello(...p2);

var names = ['Hans', 'Jacky'];
var allNames = ['Cas', ...names,  'Anouk'];

allNames.forEach( (name) => {
  console.log('Hi', name);
})

var todos =[];
var todo = [{id:1, text: 'a text', completed: false}];

todos = [...todo];
console.log('todos: ',todo);
