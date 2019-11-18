import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyCoyoBYr521eP2KL9ToRUNnNQ1PDRsR6z8",
  authDomain: "shopp-online.firebaseapp.com",
  databaseURL: "https://shopp-online.firebaseio.com",
  projectId: "shopp-online",
  storageBucket: "shopp-online.appspot.com",
  messagingSenderId: "337616035617",
  appId: "1:337616035617:web:45bcde63786611151e6860",
  measurementId: "G-48H7TL6FVF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
