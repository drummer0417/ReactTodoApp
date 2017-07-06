import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBveYhNFrGbgug71fX63MZuP5_BnmRuK_w",
    authDomain: "hanstodoapp.firebaseapp.com",
    databaseURL: "https://hanstodoapp.firebaseio.com",
    projectId: "hanstodoapp",
    storageBucket: "hanstodoapp.appspot.com",
    messagingSenderId: "1088487406021"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
      app: {name: 'Hans\' Todo App', version: '0.9.1'},
      user: {name: 'Hans van Meurs', age: 55},
      isRunning: true
    })

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('todo added, key:', snapshot.key, snapshot.val());
  });

  todosRef.push().set({
    text: 'My first todo',
    completed: false
  });

  todosRef.push().set({
    text: 'The second todo',
    completed: false
  });

  // firebaseRef.child('user').on('value', (snapshot) => {
  //   console.log('user: ', snapshot.val());
  // });
  // firebaseRef.child('app').on('value', (snapshot) => {
  //   console.log('user: ', snapshot.val());
  // });
  //
  // firebaseRef.update({'user/age': 18});
  // firebaseRef.update({'app/version': '0.9.2'});
  //
  // firebaseRef.child('app').off();
  //
  // firebaseRef.update({'user/age': 25});
  // firebaseRef.update({'app/version': '0.9.3'});

  // var notesRef = firebaseRef.child('notes');
  // notesRef.on('child_added', (snapshot) => {
  //   console.log('note added: ', snapshot.key, snapshot.val());
  // })
  //
  // notesRef.on('child_changed', (snapshot) => {
  //   console.log('note changed: ', snapshot.key, snapshot.val());
  // })
  //
  // notesRef.on('child_removed', (snapshot) => {
  //   console.log('note removed: ', snapshot.key, snapshot.val());
  // })
  //
  // var newNoteRef = notesRef.push();
  // newNoteRef.set({
  //   name: 'jaja',
  //   ok: false
  // })
  // newNoteRef = notesRef.push({
  //   name: 'neenee',
  //   ok: true
  // })
  //
  // newNoteRef.update({name: 'misschien'})
  //
  // newNoteRef = notesRef.push().set({
  //   name: 'goodbye, i will be removed',
  //   ok: false
  // })

  // fireebaseRef.child('root/user').once('value').then((snapshot) => {
  //   console.log('snapshot:' + snapshot.key);
  //   console.log(snapshot.val());
  // }, (e) =>{
  //   console.group('Error: ' + e);
  // });

  // firebaseRef.child('root/isRunning').on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // });
  //
  // firebaseRef.child('root/isRunning').off();

  // var logData = (snapshot) => {
  //   console.log('logger1', snapshot.val());
  // };
  //
  // var logData2 = (snapshot) => {
  //   console.log('logger2', snapshot.val())
  // };
  //
  // firebaseRef.on('value', logData);
  // firebaseRef.on('value', logData2);
  //
  // firebaseRef.update({'root/isRunning': false});
  // firebaseRef.update({'root/isRunning': true});
  //
  // firebaseRef.off('value', logData2);
  // // firebaseRef.off(logData);
  //
  //
  // firebaseRef.child('root').update({isRunning: false});
  // firebaseRef.child('root').update({isRunning: true});
