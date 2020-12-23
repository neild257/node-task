const firebase = require('firebase');
const firebaseConfig = require('../weather-app/src/keys').firebaseConfig;


firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const ref = db.ref("/user_data");
ref.set([
    {
        name: "Harshit Pareek",
        age: 28,
    },
    {
        name: "John Doe",
        age: 30,
    }
]);

ref.once('value', (snapshot) => {
    console.log('getting the value', snapshot.val());
});