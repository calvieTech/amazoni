import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXtub7-66Cm65fyM30J_WFKrhV8mEV3ss",
  authDomain: "i-ff344.firebaseapp.com",
  databaseURL: "https://i-ff344-default-rtdb.firebaseio.com/",
  projectId: "i-ff344",
  storageBucket: "i-ff344.appspot.com",
  messagingSenderId: "990676509404",
  appId: "1:990676509404:web:b4936bb6a9e7cdc711ca19",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const authMe = getAuth();

export { db, authMe };
