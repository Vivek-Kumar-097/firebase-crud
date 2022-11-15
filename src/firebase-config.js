import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "fir-tutorial-dc126.firebaseapp.com",
  projectId: "fir-tutorial-dc126",
  storageBucket: "fir-tutorial-dc126.appspot.com",
  messagingSenderId: "293369689624",
  appId: "1:293369689624:web:a3e6f4b0f58f8b03d8b56d",
  measurementId: "G-0RCQ938Z7R"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)