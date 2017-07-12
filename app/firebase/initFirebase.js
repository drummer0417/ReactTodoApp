import firebase from 'firebase';

console.log('in initFirebase');
console.log('apiKey', process.env.API_KEY);
console.log('authDomain', process.env.AUTH_DOMAIN);
console.log('databaseURL', process.env.DATABASE_URL);
console.log('storageBucket', process.env.STORAGE_BUCKET);

try {
  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };
  console.log('fb config', config);

  firebase.initializeApp(config);

} catch (e) {
  console.log('error init firebase:', e);
} finally {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
