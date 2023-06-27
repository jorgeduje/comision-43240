import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRcWayegvwBj6jiwt3lEHT1bWZXiNmPCQ",
  authDomain: "comision-43240.firebaseapp.com",
  projectId: "comision-43240",
  storageBucket: "comision-43240.appspot.com",
  messagingSenderId: "233778535343",
  appId: "1:233778535343:web:b597f30f07145f7d132d5a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)