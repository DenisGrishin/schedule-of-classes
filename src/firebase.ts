// import 'firebase/firestore';
// import 'firebase/database';
// import 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   getAuth,
// //   signOut
// // } from 'firebase/auth';
// // import { getDatabase, ref, onValue} from  "firebase/database" ;
// // // Import the functions you need from the SDKs you need

// const firebaseConfig = {
//   apiKey: 'AIzaSyDrU_AYAPsSPdLN5uUunV7_fHcOItP72fQ',
//   authDomain: 'react-firebase-auth-db3b9.firebaseapp.com',
//   projectId: 'react-firebase-auth-db3b9',
//   storageBucket: 'react-firebase-auth-db3b9.appspot.com',
//   messagingSenderId: '226451533997',
//   appId: '1:226451533997:web:e765f607255477b6455624',
//   databaseURL:'https://react-firebase-auth-db3b9-default-rtdb.europe-west1.firebasedatabase.app'
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// // получить данные аутентификации
// export const  authFB = getAuth(app);
// // Регестрация приложения
// export const createUser =  (email:string, password:string) => {
//   return  createUserWithEmailAndPassword(authFB, email, password);
// };
// // Вход в приложения
// export const signInUser = async (email:string, password:string) => {
//   return  signInWithEmailAndPassword(authFB, email, password);
// };
// // выйти из приложения
// export const  singOutFB = async () => await signOut(authFB)




//  // Инициализируйте базу данных Firebase с предоставленной конфигурацией
// export const getDataBaseFB = ()=>  getDatabase(app)
//  // Ссылка на конкретную коллекцию в базе данных
// export const getRefFB = (database:any,name:string)=> ref(database,name)
// // дотсаем данные по ссылке getRefFB
// export const getValueFB = (collectionRef:any,callBack:any)=> onValue(collectionRef,callBack)




