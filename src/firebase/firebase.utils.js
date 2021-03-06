import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

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
export const db = getFirestore();

// Passed to sign in / sign up component
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap);
  } else {
    // doc.data() will be undefined in this case
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }
  return docSnap;
};

// Can be used to add a new collection and documents to it in firebase when called
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
// .then((result) => {
//   // // This gives you a Google Access Token. You can use it to access the Google API.
//   // const credential = GoogleAuthProvider.credentialFromResult(result);
//   // const token = credential.accessToken;
//   // // The signed-in user info.
//   // const user = result.user;
//   // console.log(token, user);
// })
// .catch((error) => {
//   // Handle Errors here.
//   // console.log(error);
//   // ...
// });
