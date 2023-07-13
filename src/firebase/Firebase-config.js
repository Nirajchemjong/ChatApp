import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHD,
  projectId: process.env.REACT_APP_PROID,
  storageBucket: process.env.REACT_APP_SGBUCK,
  messagingSenderId: process.env.REACT_APP_MSGID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEAID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// console.log(db);
// const analytics = getAnalytics(app);
