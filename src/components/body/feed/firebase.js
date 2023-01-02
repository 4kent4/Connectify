import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyA4iHhhJSB37grQTuUlVmnBtFbc2FxasSw',
	authDomain: 'connectify-dbb63.firebaseapp.com',
	projectId: 'connectify-dbb63',
	storageBucket: 'connectify-dbb63.appspot.com',
	messagingSenderId: '315225368581',
	appId: '1:315225368581:web:ae683dc1c2b45c99fc946c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
