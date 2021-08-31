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
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      // ...
    });
