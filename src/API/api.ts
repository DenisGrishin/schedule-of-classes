

import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { endSession, startSession } from '../session';
import {  child, DataSnapshot, get, getDatabase, onValue, ref, set } from 'firebase/database';



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
export const app = initializeApp(firebaseConfig);
// получить данные аутентификации
export const  authFB = getAuth(app);





// Регестрация приложения
 export const  createUserAPI = async (email:string, password:string) => {
	await  createUserWithEmailAndPassword(authFB, email, password).then(registerResponse=>{
		startSession(registerResponse.user);
		signInUserAPI(email, password);

    writeUserDataAPI(email, registerResponse.user.uid);
    return registerResponse.user.uid
  }).catch(error=>{
    throw error;
  });
};
// Вход в приложения
export const signInUserAPI = async (email:string, password:string) => {
  await  signInWithEmailAndPassword(authFB, email, password).then((loginResponse)=>{
    startSession(loginResponse.user);
  }).catch(error=>{
		throw error;
	 });
};
// выйти из приложения
export const  singOutAPI = async () => {await signOut(authFB).then(()=>endSession()).catch(error=>{
  throw error;
 });}

// сброс пароля 
export const resetPasswordAPI = async (email:string)=> await sendPasswordResetEmail(authFB,email)



 // Инициализируйте базу данных Firebase с предоставленной конфигурацией
export const dataBaseFB =  getDatabase(app)

// слушатель для FB, достаем данные с базы и постояно обновляем, в корне не использвать 
export const getOnValueDataFbAPI = (namePath:string,callBack: (snapshot: DataSnapshot) =>void)=> {
  onValue(ref(dataBaseFB,namePath),(snapshot: DataSnapshot)=>callBack(snapshot))
}

// берем данные с FB один раз
export const getDataBaseFbAPI =  (namePath:string)=>{
 return get(child(ref(dataBaseFB),namePath)).then((snapshot: DataSnapshot)=>{
    // snapshot.exists() если что есть то возраешт true, если нет то false
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((err)=> {throw err})
} 


// добаляем пользователя в базу данных
export function writeUserDataAPI(email:string,  userId:string) {
    set(ref(dataBaseFB, 'users/' + userId), {
      email: email,
    })
  }

