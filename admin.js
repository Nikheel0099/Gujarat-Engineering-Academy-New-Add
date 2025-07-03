// admin.js
import { auth } from './firebase.js';
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ તમારા એડમિન ઇમેલ અહીં લખેલું છે (તમે નહિ બદલશો તો પણ ચાલે)
const allowedAdminEmail = "nikheelrathod99@gmail.com";

// 🔐 આ કોડ ચેક કરશે કે લોગિન થયેલ યુઝર એડમિન છે કે નહીં
onAuthStateChanged(auth, (user) => {
  if (user && user.email === allowedAdminEmail) {
    document.getElementById("userEmail").textContent = "Logged in as: " + user.email;
  } else {
    alert("You are not authorized to access the admin panel.");
    window.location.href = "index.html"; // જો એડમિન નહિ હોય તો હોમપેજ પર મોકલશે
  }
});

// 🔓 લૉગઆઉટ બટન
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out successfully!");
    window.location.href = "login.html";
  });
});