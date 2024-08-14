
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4GqCx7MSxSQxmPfqtm9FOK3JcWbNb1sY",
  authDomain: "discode-clone-3b280.firebaseapp.com",
  projectId: "discode-clone-3b280",
  storageBucket: "discode-clone-3b280.appspot.com",
  messagingSenderId: "939829703139",
  appId: "1:939829703139:web:3fc0b1e5698a521094b0d6"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider,db};