

import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { endSession, startSession } from '../session';
import { Database, getDatabase, onValue, ref, set } from 'firebase/database';



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
 // Ссылка на конкретную коллекцию в базе данных
export const getRefFB = (database:Database,name:string)=> ref(database,name)
// дотсаем данные по ссылке getRefFB
export const getValueFB = (collectionRef:any,callBack:()=>unknown)=> onValue(collectionRef,callBack)

// добаляем пользователя в базу данных
export function writeUserDataAPI(email:string,  userId:string) {
    set(ref(dataBaseFB, 'users/' + userId), {
      email: email,
    })

    set(ref(dataBaseFB, 'emails/'+ '1' ), {value:email})

  }

  // 