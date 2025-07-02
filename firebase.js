// firebase.js

// Firebase ના modules import કરો
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// તમારું Firebase config (Gujarat Engineering Academy project)
const firebaseConfig = {
  apiKey: "AIzaSyAmGSYe-IOkba8to5KglWQwtWDoYeWa-n0",
  authDomain: "gujarat-engineering-academy.firebaseapp.com",
  projectId: "gujarat-engineering-academy",
  storageBucket: "gujarat-engineering-academy.appspot.com",
  messagingSenderId: "36947720573",
  appId: "1:36947720573:web:0c4f521895cb7298b7b414",
  measurementId: "G-1RJHZHCS0H"
};

// Firebase App ને initialize કરો
const app = initializeApp(firebaseConfig);

// Firebase Services setup
const analytics = getAnalytics(app);
const auth = getAuth(app);

// auth export કરો જેથી register/login.js માં વાપરી શકાય
export { auth };
