// firebase.js

// Firebase App અને Auth Import કરો (Google CDN થી)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// તમારું Firebase Project Config (સાચા ID values નાખેલા છે)
const firebaseConfig = {
  apiKey: "AIzaSyC05S7rCzyWTR8Xn5WBw-SrflmF-kclO5Y",
  authDomain: "gujarat-engineering.firebaseapp.com",
  projectId: "gujarat-engineering",
  storageBucket: "gujarat-engineering.appspot.com",
  messagingSenderId: "36947720573",
  appId: "1:36947720573:web:0c4f521895cb7298b7b414"
};

// Firebase App Initialize કરો
const app = initializeApp(firebaseConfig);

// Firebase Auth Object મેળવો
const auth = getAuth(app);

// Export કરો જેથી Signup/Login ફાઈલમાં ઉપયોગ કરી શકો
export { auth };
