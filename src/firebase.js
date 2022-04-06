import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKLtHneNB3a_kVroNuYiSprkJrH4HlQnE",
  authDomain: "crazy4tennis-a1b94.firebaseapp.com",
  projectId: "crazy4tennis-a1b94",
  storageBucket: "crazy4tennis-a1b94.appspot.com",
  messagingSenderId: "375686541390",
  appId: "1:375686541390:web:2fdb2202a9d618f913d31f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);