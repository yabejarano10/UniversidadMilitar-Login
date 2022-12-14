import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { collection, query, where,getDocs, onSnapshot  } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDLlxUuutYqbGyM8rhV9DS3If3nxzdbL2I",
  authDomain: "tigum-9007b.firebaseapp.com",
  projectId: "tigum-9007b",
  storageBucket: "tigum-9007b.appspot.com",
  messagingSenderId: "271640429760",
  appId: "1:271640429760:web:169f45159a8b5a49951925",
  measurementId: "G-1YX8471MV9"
};

let authorized = false;
let proyectsSnap = null;

export const createUserProfileDocument = async (userAuth,additionalData) => {
  
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        autorizado: false,
        ...additionalData
      });
      
    }catch(error)
    {
      console.log("error creating user",error.message);
    }
  }
  
  return userRef;
   
}

export const getProjects = async () => {
  const q = query(collection(firestore,"proyectos"));

  await onSnapshot(q,(queryS) => {
    proyectsSnap = queryS
  });
}

export const getProjectsSnap = () => {
  return proyectsSnap
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const checkAuthorized = async (email) => {
  const q = query(collection(firestore,"users"),where("email","==",email));

  await onSnapshot(q, (queryS) => {
    authorized = queryS.docs.pop().data().autorizado
  });
}

export const GetAuthorized = () => {
  
  return authorized
}

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt:'select_account'});
// export const signInWithGoogle = async () => {
//  await  auth.signInWithPopup(provider);
// }

export default firebase;