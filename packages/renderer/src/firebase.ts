// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-AZ25eOhMKPX1bvfhf880qYDsJY0tOvg',
  authDomain: 'tesoreriaapp-5c5cf.firebaseapp.com',
  projectId: 'tesoreriaapp-5c5cf',
  storageBucket: 'tesoreriaapp-5c5cf.appspot.com',
  messagingSenderId: '205003913543',
  appId: '1:205003913543:web:916b0b2c5f61a9ea467462',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const sociosRef = collection(db, 'socios');

// const db = getFirestore();
// export default db;
