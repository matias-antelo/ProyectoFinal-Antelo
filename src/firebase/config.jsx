import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWsi8gdHE7_niMK3lvuWwYujBkk_CYrCA",
  authDomain: "proyectofinal-antelo.firebaseapp.com",
  projectId: "proyectofinal-antelo",
  storageBucket: "proyectofinal-antelo.firebasestorage.app",
  messagingSenderId: "245695113813",
  appId: "1:245695113813:web:31d900ffa1265e61f082dc"
};

export const app = initializeApp(firebaseConfig);