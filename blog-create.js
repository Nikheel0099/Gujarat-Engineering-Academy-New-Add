import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmGSYe-IOkba8to5KglWQwtWDoYeWa-n0",
  authDomain: "gujarat-engineering-academy.firebaseapp.com",
  projectId: "gujarat-engineering-academy",
  storageBucket: "gujarat-engineering-academy.appspot.com",
  messagingSenderId: "36947720573",
  appId: "1:36947720573:web:0c4f521895cb7298b7b414",
  measurementId: "G-1RJHZHCS0H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("postBtn").addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title.trim() === "" || content.trim() === "") {
    alert("Title અને Content ખાલી ન હોય જોઈએ.");
    return;
  }

  try {
    await addDoc(collection(db, "blogs"), {
      title: title,
      content: content,
      timestamp: serverTimestamp()
    });
    alert("Blog posted successfully!");
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
  } catch (err) {
    alert("Error posting blog: " + err.message);
  }
});