import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZneUJEpGOYVavr88YvbVNaIuYfQ3yuNs",
  authDomain: "image-gallery-c25ba.firebaseapp.com",
  projectId: "image-gallery-c25ba",
  storageBucket: "image-gallery-c25ba.appspot.com",
  messagingSenderId: "479492003512",
  appId: "1:479492003512:web:ceb9f12193b6af987f864d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };