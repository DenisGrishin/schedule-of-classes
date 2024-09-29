

import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { endSession, startSession } from '../session';
import { getDatabase, onValue, ref } from 'firebase/database';



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


// export  const  writeUserData =(userId:string, name:string, email:string)=> {
// 	const db = getDataBaseFB();
// 	set(ref(db, 'users/' + userId), {
// 	  username: name,
// 	  email: email,
// 	});
//  }


//  export const registrationUser = async (email:string, password:string)=>{
// 	const registerResponse =  await createUser(email, password)
// 	startSession(registerResponse.user);
// 	 signInUser(email, password);
//  }







// Регестрация приложения
 export const  createUserAPI = async (email:string, password:string) => {
	await  createUserWithEmailAndPassword(authFB, email, password).then(registerResponse=>{
		startSession(registerResponse.user);
		signInUserAPI(email, password);
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
export const  singOutFB = async () => {await signOut(authFB).then(()=>endSession()).catch(error=>{
  throw error;
 });}
 // Инициализируйте базу данных Firebase с предоставленной конфигурацией
export const getDataBaseFB = ()=>  getDatabase(app)
 // Ссылка на конкретную коллекцию в базе данных
export const getRefFB = (database:any,name:string)=> ref(database,name)
// дотсаем данные по ссылке getRefFB
export const getValueFB = (collectionRef:any,callBack:any)=> onValue(collectionRef,callBack)




