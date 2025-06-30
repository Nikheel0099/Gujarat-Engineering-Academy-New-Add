import { auth } from './firebase.js';
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userEmail").textContent = "Logged in as: " + user.email;
  } else {
    alert("Please login first!");
    window.location.href = "login.html";
  }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out successfully!");
    window.location.href = "login.html";
  });
});
