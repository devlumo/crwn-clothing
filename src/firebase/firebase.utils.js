import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBleybloVD_jJnZgG760xaawqbM24B1J3g",
  authDomain: "crwn-db-20568.firebaseapp.com",
  projectId: "crwn-db-20568",
  storageBucket: "crwn-db-20568.appspot.com",
  messagingSenderId: "268518099244",
  appId: "1:268518099244:web:66b36d7ced655865ef0489",
  measurementId: "G-ZHBBJH398P",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
