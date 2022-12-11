import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
        } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,

} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDtc6BNp23WJQdPzFNI6q9EJut6822vtd0",
    authDomain: "crwn-clothing-db-3f74f.firebaseapp.com",
    projectId: "crwn-clothing-db-3f74f",
    storageBucket: "crwn-clothing-db-3f74f.appspot.com",
    messagingSenderId: "512011610524",
    appId: "1:512011610524:web:238397dbd0e9bc61238059"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"  
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
 

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation

        });
    } catch (error) {
        console.log('error creating the user', error.message);
    }
  }

return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {

        if (!email || !password) return;

     return await createUserWithEmailAndPassword(auth, email, password)
  }