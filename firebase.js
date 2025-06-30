// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y",
  authDomain: "gujarat-engineering.firebaseapp.com",
  projectId: "gujarat-engineering",
  storageBucket: "gujarat-engineering.appspot.com",
  messagingSenderId: "YOUR-ID",
  appId: "YOUR-ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
