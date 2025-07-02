import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

const blogsContainer = document.getElementById("blogsContainer");

async function fetchBlogs() {
  const q = query(collection(db, "blogs"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const blog = doc.data();
    const blogDiv = document.createElement("div");
    blogDiv.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <hr />
    `;
    blogsContainer.appendChild(blogDiv);
  });
}

fetchBlogs();