import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { getDatabase, ref, onValue} from  "firebase/database" ;
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: 'AIzaSyDrU_AYAPsSPdLN5uUunV7_fHcOItP72fQ',
  authDomain: 'react-firebase-auth-db3b9.firebaseapp.com',
  projectId: 'react-firebase-auth-db3b9',
  storageBucket: 'react-firebase-auth-db3b9.appspot.com',
  messagingSenderId: '226451533997',
  appId: '1:226451533997:web:e765f607255477b6455624',
  databaseURL:'https://react-firebase-auth-db3b9-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Регестрация приложения
export const createUser = async (email:string, password:string) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};
// Вход в приложения
export const signInUser = async (email:string, password:string) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};


export const getDataBaseFB = ()=> getDatabase(app)

export const getRefFB = (database:any,name:string)=> ref(database,name)

export const getValueFB = (collectionRef:any,callBack:any)=> onValue(collectionRef,callBack)
