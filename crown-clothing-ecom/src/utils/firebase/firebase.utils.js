import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyA1K9kTQ6Of8evea1i1XWYZM1-mnBlM3C4",
  authDomain: "crwn-clothing-db-1963.firebaseapp.com",
  projectId: "crwn-clothing-db-1963",
  storageBucket: "crwn-clothing-db-1963.appspot.com",
  messagingSenderId: "131856330138",
  appId: "1:131856330138:web:66e0b01313cdf9f5b8de23",
  measurementId: "G-CRGG9NM57K"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account', // This will force the user to select an account again even if one is already signed in.
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);


  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try{
      await setDoc(userDocRef, {  displayName, email, createAt } );
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }


  return userDocRef;

};