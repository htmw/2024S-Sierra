import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm6AzKIkSgyFqpUVXcf-DcRY0iqBBV8SE",
  authDomain: "freshlens-e2cc4.firebaseapp.com",
  projectId: "freshlens-e2cc4",
  storageBucket: "freshlens-e2cc4.appspot.com",
  messagingSenderId: "298310083659",
  appId: "1:298310083659:web:c5e55777e650b04e4399ce",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
