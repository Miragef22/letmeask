import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY="AIzaSyAT43LrbgzyvKkUJjJ5W77eDkn0TFslpUw",
        authDomain: process.env.REACT_APP_AUTH_DOMAIN="letmeask-ae653.firebaseapp.com",
        databaseURL: process.env.REACT_APP_PROJECT_URL="https://letmeask-ae653-default-rtdb.firebaseio.com",
        projectId: process.env.REACT_APP_PROJECT_ID="letmeask-ae653",
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET="letmeask-ae653.appspot.com",
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID="1083808610034",
        appId: process.env.REACT_APP_APP_ID="1:1083808610034:web:b2eb091cec0acf866f426b"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();


export { firebase, auth, database }