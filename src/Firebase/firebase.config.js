import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQfXaZK9lIKzfAmtrPiQOBeduSu9ArwEM",
  authDomain: "real-state-project-d071d.firebaseapp.com",
  projectId: "real-state-project-d071d",
  storageBucket: "real-state-project-d071d.appspot.com",
  messagingSenderId: "1077527697693",
  appId: "1:1077527697693:web:f99ac53ebca816d0e529f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;