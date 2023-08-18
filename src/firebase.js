import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  
  apiKey: 'AIzaSyB0Eb7QFYieGToqn4Aa4Gg1QaMxXv2QID0',
  authDomain: 'online-shop-25171.firebaseapp.com',
  projectId: 'online-shop-25171',
  storageBucket: 'online-shop-25171.appspot.com',
  messagingSenderId: '377005520774',
  appId:'1:377005520774:web:2b409dc9110972f4141e07',
  
};

console.log(process.env)

const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase)
export const storage = getStorage(firebase)








