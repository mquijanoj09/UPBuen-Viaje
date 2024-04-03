import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlH2mK_nzhsIEyqnL3EmA-NbXEREtD2Fc",
  authDomain: "upbuen-viaje.firebaseapp.com",
  databaseURL: "https://upbuen-viaje-default-rtdb.firebaseio.com",
  projectId: "upbuen-viaje",
  storageBucket: "upbuen-viaje.appspot.com",
  messagingSenderId: "1042531606445",
  appId: "1:1042531606445:web:c30454451f606422d3cb24",
  measurementId: "G-FTPWZB0MFY",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
