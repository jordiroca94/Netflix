import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyCX42H6-eknjo0ZSON28JTTczJhi4nF72g",
  authDomain: "netflix-baa9b.firebaseapp.com",
  projectId: "netflix-baa9b",
  storageBucket: "netflix-baa9b.appspot.com",
  messagingSenderId: "12649779575",
  appId: "1:12649779575:web:0ac05ff66048f56ca89172",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
