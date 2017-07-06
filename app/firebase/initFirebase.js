import firebase from 'firebase';

try {
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
} catch (e) {

} finally {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
