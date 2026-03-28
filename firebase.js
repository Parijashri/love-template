// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_9HnIigjWf-HFAND4GQe9lgxuT6wHkKU",
  authDomain: "lovetemplate-23b5d.firebaseapp.com",
  projectId: "lovetemplate-23b5d",
  storageBucket: "lovetemplate-23b5d.firebasestorage.app",
  messagingSenderId: "42098767733",
  appId: "1:42098767733:web:ce99682e89970f097a853c",
  measurementId: "G-X2Y96MLTHJ"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export {
  db, storage,
  doc, setDoc, getDoc,
  ref, uploadBytes, getDownloadURL
};