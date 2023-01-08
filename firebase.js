import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBiVlnACugvW6Qq_XiMalt0mw-Jr56SToc",
    authDomain: "discord-clone-fe2ad.firebaseapp.com",
    projectId: "discord-clone-fe2ad",
    storageBucket: "discord-clone-fe2ad.appspot.com",
    messagingSenderId: "190192713355",
    appId: "1:190192713355:web:683ee2727fdc6a011b5e8e"
  };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const provider = new GoogleAuthProvider()
const auth = getAuth(app);
export default app;
export { db, storage, provider, auth };