// firebase.js

// Firebase SDK ના જરૂરી ફંક્શન ઇમ્પોર્ટ કરો
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// તમારું Firebase પ્રોજેક્ટ config
const firebaseConfig = {
  apiKey: "AIzaSyAmGSYe-IOkba8to5KglWQwtWDoYeWa-n0",
  authDomain: "gujarat-engineering-academy.firebaseapp.com",
  projectId: "gujarat-engineering-academy",
  storageBucket: "gujarat-engineering-academy.appspot.com",
  messagingSenderId: "36947720573",
  appId: "1:36947720573:web:0c4f521895cb7298b7b414",
  measurementId: "G-1RJHZHCS0H"
};

// Firebase App ને Initialize કરો
const app = initializeApp(firebaseConfig);

// Analytics અને Authentication initial કરો
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export auth object for use in login/register
export { auth };
