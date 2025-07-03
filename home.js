// Home.js

const videosContainer = document.getElementById("videosContainer");

// Gujarat Engineering Academy YouTube uploads playlist ID
const uploadsPlaylistId = "UUAKHRP0u6JIzlRup3oNyf-A";

// YouTube Data API Key
const apiKey = "AIzaSyAmGSYe-IOkba8to5KglWQwtWDoYeWa-n0";

fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    videosContainer.innerHTML = "";
    data.items.forEach(item => {
      const videoId = item.snippet.resourceId.videoId;
      const title = item.snippet.title;
      const videoElement = `
        <div style="margin-bottom: 20px;">
          <iframe width="100%" height="215" src="https://www.youtube.com/embed/${videoId}" 
                  frameborder="0" allowfullscreen></iframe>
          <p style="color: #FFE4B5;">${title}</p>
        </div>`;
      videosContainer.innerHTML += videoElement;
    });
  })
  .catch(error => {
    console.error("Error fetching YouTube videos:", error);
    videosContainer.innerHTML = "❌ Failed to load videos.";
  });