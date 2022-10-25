// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
export const firebaseApp = initializeApp(process.env.REACT_APP_FIREBASE_CONFIG);
export const analytics = getAnalytics(firebaseApp);