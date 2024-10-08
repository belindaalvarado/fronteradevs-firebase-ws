import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD4ZN0sCBQDXNlgbpbTQnDkLLrUBZfdAvI",
  authDomain: "fronteradevs-firebase-ws.firebaseapp.com",
  projectId: "fronteradevs-firebase-ws",
  storageBucket: "fronteradevs-firebase-ws.appspot.com",
  messagingSenderId: "561293959611",
  appId: "1:561293959611:web:193fa2ae6d828326f9e49e",
  measurementId: "G-VR39C6EQNX"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app)

export { db, auth }